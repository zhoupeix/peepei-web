module.exports = options=>{
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const AdminUser = require("../models/AdminUser");
  return async (req, res, next) => {
    const token = String(req.headers.authorization || "").split(" ").pop();
    assert(token,401,'请先登入')
    const tokenData = jwt.verify(token, req.app.get("secret")); //token 解密
    assert(tokenData,401,'请先登入 ')
    const { id } = tokenData;
    req.user = await AdminUser.findById(id);
    assert(req.user,401,'请先登入')
    console.log("token", req.user);
    await next();
  }
}