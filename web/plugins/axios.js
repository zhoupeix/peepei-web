import axios from 'axios'

const instance = axios.create({
  // baseURL: process.env.API_HOST + ':' + process.env.API_PORT,
  
  transformRequest: function (request) {
    return request
  }
})
console.log('axios',instance)
export default instance