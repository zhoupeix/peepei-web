const mongoose = require('mongoose')

const schema = new mongoose.Schema({

  name:{type : String},
  email:{type:String},
  phone:{type:String},
  address:{type:String},
  tags:{type:Array}
},
 
  {timestamps: { createdAt: 'created', updatedAt: 'update' }
})

module.exports = mongoose.model('Applicant',schema)