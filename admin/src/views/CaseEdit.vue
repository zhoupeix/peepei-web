<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>案例</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' :'新建'}}案例</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{ id ? "编辑" : "新建" }}案例</h1>
    <el-card>
 <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="案例名称：">
        <el-input
          v-model="model.name"
          placeholder="请输入案例名称"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="案例标题：">
        <el-input
          v-model="model.subtitle"
          placeholder="请输入子标题"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="案例图标：">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :headers="getAuthorization()"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="内容：">
        <el-input
                  v-model="model.title"
                  placeholder="请输入"
                  clearable
                  type="textarea"
                ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" class="el-icon-upload">保存</el-button>
      </el-form-item>
    </el-form>
    </el-card>
   
  </div>
</template>

<script>
// import { VueEditor } from "vue2-editor";
export default {
  // components: {
  //   VueEditor
  // },
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        
      }
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      let formData = new FormData();
      formData.append("file", file);
      let res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    handleAvatarSuccess(res, file) {
      this.$set(this.model,'avatar',res.url)
        // this.model.icon = res.url
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M;
      },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/cases/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/cases", this.model);
      }

      this.$router.push("/case/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/cases/${this.id}`);
      this.model = res.data;
      console.log(res.data);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
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
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    display: block;
  }
</style>