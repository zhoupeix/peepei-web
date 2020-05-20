const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: { type: String },
  password: { 
    type: String,
    select:false,
    set(val){ //对密码加密
      return require('bcrypt').hashSync(val,12)
    }
  }},
  {timestamps: { createdAt: 'created', updatedAt: 'updated' }}
);

module.exports = mongoose.model("AdminUser", schema);
