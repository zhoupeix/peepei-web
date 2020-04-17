const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  name:{type : String},
  // parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
  icon:{type:String},
  
})

module.exports = mongoose.model('Item',schema)