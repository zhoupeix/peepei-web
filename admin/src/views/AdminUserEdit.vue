<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' :'新建'}}管理员</el-breadcrumb-item>
    </el-breadcrumb>
     <h1>{{id ? '编辑' :'新建'}}管理员 </h1>
    <el-card>
    <el-form label-width='120px' @submit.native.prevent="save"> 
      <el-form-item label='管理员名：'>
        <el-input  v-model="model.username" placeholder="请输入名称" clearable></el-input>
      </el-form-item>
      <el-form-item label='密码：'>
        <el-input  v-model="model.password" placeholder="请输入密码" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' native-type='submit' class="el-icon-upload">保存</el-button>
      </el-form-item>
    </el-form>
    </el-card>
    
  </div>
</template>

<script>
export default {
  props:{
    id:{}
  },
  data(){
    return{
      model:{},
    }
  },
  methods:{
    async save(){
      let res
      if(this.id){
        res = await this.$http.put(`rest/admin_users/${this.id}`,this.model)
      }else{
        res = await this.$http.post('rest/admin_users',this.model)
      }
      
      this.$router.push('/admin_user/list')
      this.$message({
        type:'success',
        message:'保存成功'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data
      console.log(res.data);
    }
  },
  created(){
    this.id && this.fetch()
  }
  
}
</script>
