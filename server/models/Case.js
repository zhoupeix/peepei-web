const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  name:{type : String},
  // parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
  avatar:{type:String},
  title:{type:String},
  subtitle:{type:String}},
  {timestamps: { createdAt: 'created', updatedAt: 'update' }
})

module.exports = mongoose.model('Case',schema)