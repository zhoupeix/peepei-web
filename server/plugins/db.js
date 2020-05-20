module.exports = app=>{
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://admin:123456@127.0.0.1:27017/peepei',{ //带用户名 和密码连接数据库
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  })
  require('require-all')(__dirname + '/../models')
}