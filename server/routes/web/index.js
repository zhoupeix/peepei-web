module.exports=app=>{
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  const Artcile = mongoose.model('Article')
  router.get('/news/init',async (req,res)=>{
    // const cats = await Category.findOne().where(
    //   {
    //     name:'新闻资讯'
    //   }
    // ).populate(
    //   {
    //     path:'children',
    //     populate:{
    //       path:'newList'
    //     }
    //   }
    // ).lean()
    // 聚合查询
    const parent = await Category.findOne().where({
      name:'新闻资讯'
    })
    
    const cats = await Category.aggregate([
      {$match:{parent:parent._id}},
      {
        $lookup:{
          from:'articles',
          localField:'_id',
          foreignField:'categories',
          as:'newsList'
        }
      }
    ]
    )
    // cats数组中增加cateName 
    cats.map(cat=>{
      cat.newsList.map(news=>{
        news.categoryName = cat.name
        return news
      })
      cat.total = Math.floor(parseInt(cat.newsList.length) / 7) + 1
      return cat
    })
    if(Object.keys(req.query).length !== 0 ){
      let pageNum = parseInt(req.query.pageNum)
      let pageSize = parseInt(req.query.pageSize) 
      let tab = parseInt(req.query.tab)
      let pageNums = pageSize * (pageNum -1)
      if(tab === 0){
        cats.map(cat=>{
          if(cat.name === '行业资讯'){
            cat.newsList = cat.newsList.slice(pageNums,pageNums+7)
            //  console.log('tab',cats)
            res.send(cats)
          }
        })
        
      }else if(tab === 1){
        cats.map(cat=>{
          if(cat.name === '西窗动态'){
            cat.newsList = cat.newsList.slice(pageNums,pageNums+7)
            //  console.log('tab',cats)
            res.send(cats)
          }
        })
        
      }else{
        cats.map(cat=>{
          if(cat.name === '常见问题'){
            cat.newsList = cat.newsList.slice(pageNums,pageNums+7)
            //  console.log('tab',cats)
            res.send(cats)
          }
        })
        
      }
     
    }else{
      cats.map(cat=>{
        cat.newsList = cat.newsList.slice(0,7)
        return cat
      })
      res.send(cats)
    }
    })
  app.use('/web/api',router)
}