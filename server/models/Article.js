const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  title:{type : String},
  categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
  content:{type:String}},
  {timestamps: { createdAt: 'created', updatedAt: 'update' }
})

module.exports = mongoose.model('Article',schema)