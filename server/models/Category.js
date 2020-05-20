const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  name:{type : String},
  parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
  
})


// 增加虚拟字段
schema.virtual('children',{ 
  localField:'_id',
  foreignField:'parent',
  justOne:false,
  ref:'Category'
})
schema.virtual('newList',{ 
  localField:'_id',
  foreignField:'categories',
  justOne:false,
  ref:'Article'
})

module.exports = mongoose.model('Category',schema)