const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  total:{type : String},
},
  {timestamps: { createdAt: 'created', updatedAt: 'update' }}
)

module.exports = mongoose.model('Customer',schema)