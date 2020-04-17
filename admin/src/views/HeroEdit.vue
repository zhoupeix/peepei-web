<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>英雄管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' :'新建'}}英雄</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-card>
      <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs type="border-card" value="skills">
        <el-tab-pane label="基本信息" name="base">
          <el-form-item label="英雄名称：">
            <el-input
              v-model="model.name"
              placeholder="请输入物品名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="英雄称号：">
            <el-input
              v-model="model.title"
              placeholder="请输入英雄称号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="英雄分类：">
            <el-select v-model="model.categories" placeholder="请选择" multiple>
              <el-option
                v-for="item of categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="英雄图标：">
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
          <el-form-item label="难度：">
            <el-rate
              v-model="model.scores.difficult"
              style="margin-top:0.6rem"
              show-score
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能：">
            <el-rate
              v-model="model.scores.skills"
              style="margin-top:0.6rem"
              show-score
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击：">
            <el-rate
              v-model="model.scores.attack"
              style="margin-top:0.6rem"
              show-score
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存：">
            <el-rate
              v-model="model.scores.survive"
              style="margin-top:0.6rem"
              show-score
            ></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装：">
            <el-select v-model="model.items1" placeholder="请选择" multiple>
              <el-option
                v-for="item of items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装：">
            <el-select v-model="model.items2" placeholder="请选择" multiple>
              <el-option
                v-for="item of items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧：">
            <el-input
              v-model="model.usageTips"
              placeholder="请输入内容"
              clearable
              type="textarea"
              autosize
            ></el-input>
          </el-form-item>
          <el-form-item label="攻击技巧：">
            <el-input
              v-model="model.battleTips"
              placeholder="请输入内容"
              clearable
              type="textarea"
              autosize
            ></el-input>
          </el-form-item>
          <el-form-item label="团队技巧：">
            <el-input
              v-model="model.teamTips"
              placeholder="请输入内容"
              clearable
              type="textarea"
              autosize
            ></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button type="text" size="small" @click="model.skills.push({})"
            ><i class="el-icon-plus"></i>添加技能</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item, i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input
                  v-model="item.name"
                  placeholder="请输入技能名称"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="图标"> 
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :headers="getAuthorization()"
                  :show-file-list="false"
                  :on-success="res=>$set(item, 'icon', res.url)"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input
                  v-model="item.description"
                  placeholder="请输入"
                  clearable
                  type="textarea"
                ></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input
                  v-model="item.tips"
                  placeholder="请输入"
                  clearable
                  type="textarea"
                ></el-input>
              </el-form-item>
              <el-form-item >
                <el-button icon="el-icon-delete" size="small" type="danger" circle
                @click="model.skills.splice(i,1)"></el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit" 
        style="margin-top:1rem" icon="el-icon-upload" 
        
          >保存</el-button
        >
      </el-form-item>
    </el-form>
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
      categories: [],
      items: [],
      model: {
        name: "",
        avatar: "",
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        },
        skills: []
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      // this.$set(this.model,'icon',res.url)
      this.model.avatar = res.url;
    },
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
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heroes", this.model);
      }

      this.$router.push("/hero/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
      console.log(res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get("rest/categories");
      this.categories = res.data;
      console.log(res.data);
    },
    async fetchItems() {
      const res = await this.$http.get("rest/items");
      this.items = res.data;
      console.log(res.data);
    }
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
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
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
.avatar {
  width: 3rem;
  height: 3rem;
  display: block;
}
</style>
