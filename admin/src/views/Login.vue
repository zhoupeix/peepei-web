<template>
  <div class="login-container" >
    <el-card header='请登入' class="login" >
      <el-form label-width='60px' @submit.native.prevent="login">
        <el-form-item label="用户名:">
        <el-input placeholder="请输入用户名" v-model = model.username></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input placeholder="请输入密码" show-password v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' native-type='submit'>登入</el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  data(){
    return {
      model:{}
    }
  },
  methods:{
   async login(){
      const res = await this.$http.post('/login',this.model)
      localStorage.token = res.data.token  // 浏览器关闭 依然存在
      localStorage.username = res.data.username
      // sessionStorage.token = res.data.token // 当前会话 浏览器关闭 将删除token
      this.$router.push('/')
      this.$message({
        type:'success',
        message:`${res.data.username} 欢迎回来！`
      })
      console.log(res.data)
    }
  }
}
</script>
<style >
.login{
  margin: 10rem auto;
  width: 30rem;
  
}
</style>
