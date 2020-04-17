<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>广告位管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' :'新建'}}广告位</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{id ? '编辑' :'新建'}}广告位 </h1>
    <el-card>
<el-form label-width='120px' @submit.native.prevent="save"> 
      <el-form-item label='广告位名称：'>
        <el-input  v-model="model.name" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label='广告位图片：'>
          <el-button type="text" size="small" @click="model.items.push({})"
            ><i class="el-icon-plus"></i>添加广告</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="24" v-for="(item, i) in model.items" :key="i">
              <el-form-item label="跳转地址(URL)">
                <el-input
                  v-model="item.url"
                  placeholder="请输入URL"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="图标" style="margin-top:1rem"> 
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :headers="getAuthorization()"  
                  :show-file-list="false"
                  :on-success="res=>$set(item, 'image', res.url)"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="item.image" :src="item.image" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              
              <el-form-item >
                <el-button icon="el-icon-delete" size="small" type="danger" circle
                @click="model.items.splice(i,1)"></el-button>
              </el-form-item>
            </el-col>
          </el-row>
      
      </el-form-item>
      <el-form-item>
        <el-button type='primary' native-type='submit'><i class="el-icon-upload"></i>保存</el-button>
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
      model:{
        items:[]
      },
    }
  },
  methods:{
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isJPG || isPNG) && isLt2M;
    },
    async save(){
      let res
      if(this.id){
        res = await this.$http.put(`rest/ads/${this.id}`,this.model)
      }else{
        res = await this.$http.post('rest/ads',this.model)
      }
      
      this.$router.push('/ads/list')
      this.$message({
        type:'success',
        message:'保存成功'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = Object.assign({},this.model,res.data)
      console.log(res.data);
    }
  },
  created(){
    this.id && this.fetch()
  }
  
}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  min-width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.avatar {
  min-width: 5rem;
  height: 5rem;
  display: block;
}
</style>
