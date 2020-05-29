module.exports = app => {
  const express = require("express");
  const assert = require("http-assert");
  const jwt = require("jsonwebtoken");
  const AdminUser = require("../../models/AdminUser");
  const authMiddleWare = require('../../middleware/auth');
  const rescourceMiddleWare = require('../../middleware/rescource');
  const router = express.Router(
    { mergeParams: true } //表示父级的路由参数 可以在子级中使用 即resource 可以在router中用
  );

  router.post("/", async (req, res) => {
    console.log("req.Modle", req.Model, req.body);
    const model = await req.Model.create(req.body);
    res.send(model);
  });

  router.get("/",
    async (req, res) => {
      console.log('req.query',req.query)
      const queryOptions = {};
      if (req.Model.modelName === "Category") {
        queryOptions.populate = "parent";
      }
      if(Object.keys(req.query).length !== 0 ){
        
        if(req.query.query){
          let query={};
          let items
          let countNum
          if(req.Model.modelName === "AdminUser"){
            query['username']=new RegExp(req.query.query);//模糊查询参数
          }else if(req.Model.modelName === "Article"){
            query['title']=new RegExp(req.query.query);//模糊查询参数
          }else{
            query['name']=new RegExp(req.query.query);//模糊查询参数
          }
          await req.Model.find(query,(err,list)=>{
            if(err) return false
            items = list
          })
          countNum = items.length
          res.send({countNum,items})
          console.log("模糊查询",items)
        }else{
          let countNum = 0
          let pageNum = parseInt(req.query.pageNum)
          let pageSize = parseInt(req.query.pageSize) 
          let pageNums = pageSize * (pageNum -1)
          console.log('查询总',pageNums)
          // if(req.Model.modelName === 'Article') {
          //   queryOptions.populate = 'categories'
          //   console.log('进来了')
          // }
          await req.Model.find().countDocuments((err,reslut)=>{
            if(err){
              return false
            }
            countNum = reslut
          })
          const items = await req.Model.find()
            .setOptions(queryOptions)
            .sort({'_id':-1})
            .skip(pageNums)
            .limit(pageSize)
          res.send({countNum,items});
          console.log(countNum,items);
        }
      }else{
        const items = await req.Model.find()
          .setOptions(queryOptions)
        res.send(items);
        console.log("items",items)
      }
    });

  router.get("/:id", async (req, res) => {
    console.log('req.',req.params.id)
    const item = await req.Model.findById(req.params.id);
    
    res.send(item);
  });

  router.put("/:id", async (req, res) => {
    const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(item);
  });

  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true
    });
  });

  app.use("/admin/api/rest/:resource",authMiddleWare(),rescourceMiddleWare(),router
  );

  const multer = require("multer"); //上传文件
  const upload = multer({ dest: __dirname + "/../../uploads" });
  app.post("/admin/api/upload",authMiddleWare(),upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://admin.peepei.con/uploads/${file.filename}`;
    res.send(file);
  });

  app.post("/admin/api/login", async (req, res) => {
    //用户校验步骤 1. 查数据库用户 2.验证密码 3.返回token
    const { username, password } = req.body;

    const user = await AdminUser.findOne({ username }).select("+password");
    assert(user,422,'用户名不正确!')
    // if (!user) {
    //   return res.status(422).send({
    //     message: "用户名不存在"
    //   });
    // }
    const isverify = require("bcrypt").compareSync(password, user.password);
    assert(isverify,422,'密码不正确')
    // if (!isverify) {
    //   return res.status(422).send({
    //     message: "密码不正确"
    //   });
    // }
    const token = jwt.sign({ id: user._id }, app.get("secret"));
    res.send({ token, username });
  });

  app.use('/web/api/res/:resource',rescourceMiddleWare(),router);

  //http 错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
};
