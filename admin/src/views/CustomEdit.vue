<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ id ? "编辑" : "新建" }}客户</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{ id ? "编辑" : "新建" }}客户</h1>
    <el-card>
      <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="客户名称：">
          <el-input
            v-model="model.name"
            placeholder="请输入客户名称"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址：">
          <el-input
            v-model="model.email"
            placeholder="请输入邮箱地址"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-input
            v-model="model.phone"
            placeholder="请输入手机号"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="详细地址：">
          <el-input
            v-model="model.address"
            placeholder="请输入详细地址"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" class="el-icon-upload"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
       <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入客户总数" v-model="model.customers" clearable >
  
            </el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
          <el-button type='primary' @click="UpdataCustom" class="el-icon-plus">修改客户数</el-button>
          </div>
          </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
      customers:''
      },
      parents: [],
      customers_id:''
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/customs/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/customs", this.model);
      }

      this.$router.push("/custom/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/customs/${this.id}`);
      
      this.model = res.data;
      
      console.log(res.data);
    },
    async getCutomers(){
      const data = await this.$http.get('rest/customers')
      console.log('data',data.data[0].total)
      this.model.customers = data.data[0].total
      this.customers_id = data.data[0]._id
    },
    async UpdataCustom(){
      console.log('model',this.model)
      const res = await this.$http.put(`rest/customers/${this.customers_id}`,{total:this.model.customers})
       this.$message({
        type: "success",
        message: "客户数修改成功"
      });
    }
  },

  created() {
    this.id && this.fetch();
    this.getCutomers();
  }
};
</script>
