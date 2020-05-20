const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  name:{type : String},
  // parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
  icon:{type:String},
  title:{type:String},
  content:{type:String}},
  {timestamps: { createdAt: 'created', updatedAt: 'update' }
})

module.exports = mongoose.model('Item',schema)