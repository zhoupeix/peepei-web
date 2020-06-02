import axios from 'axios'
import Vue from 'vue'
const http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/admin/api',
  // baseURL:'http://localhost:3001/admin/api'
  // headers: {'content-type': 'application/x-www-form-urlencoded'} 
})
http.interceptors.request.use(config=>{ //在请求头中添加 authorization 
  // Do something before request is sent
  if(localStorage.token){
    config.headers.Authorization = 'Bearer '+localStorage.token
  }
  return config;
}, err=>{
  // Do something with request error
  if(err.response.data.message){
    Vue.prototype.$message({
      type:'error',
      message:err.response.data.message
    })
  }
  return Promise.reject(err);
})
//http response的拦截器 全局
http.interceptors.response.use(res=>{
  // Do something before request is sent
  return res;
}, err=>{
  // Do something with request error
  if(err.response.data.message){
    Vue.prototype.$message({
      type:'error',
      message:err.response.data.message
    })
  }
  if(err.response.status === 401){
    Vue.prototype.router.push('/login')
  }
  return Promise.reject(err);
})
export default http