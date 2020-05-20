<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>物品</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' :'新建'}}物品</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-card>
 <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="物品名称：">
        <el-input
          v-model="model.name"
          placeholder="请输入物品名称"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="物品标题：">
        <el-input
          v-model="model.title"
          placeholder="请输入标题"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="物品图标：">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :headers="getAuthorization()"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="内容：">
        <vue-editor
          useCustomImageHandler
          @image-added="handleImageAdded"
          v-model="model.content"
        ></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" class="el-icon-upload">保存</el-button>
      </el-form-item>
    </el-form>
    </el-card>
   
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
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
      this.$set(this.model,'icon',res.url)
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
        res = await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/items", this.model);
      }

      this.$router.push("/item/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`);
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