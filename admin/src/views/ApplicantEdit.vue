<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ id ? "编辑" : "新建" }}申请客户</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{ id ? "编辑" : "新建" }}申请客户</h1>
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
        <el-form-item label="添加标签：">
          <el-tag
              :key="i"
              v-for="(tag, i) in model.tags"
              closable
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm()"
              @blur="handleInputConfirm()"
            >
            </el-input> 
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+ 加标签</el-button
            >
          
        </el-form-item>

        <el-form-item>
          <el-button type="primary" native-type="submit" class="el-icon-upload"
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
      model: {
        tags: [], //标签上的名称
      },
      parents: [],
      //标签🇭数据
      
      inputVisible: false,
      inputValue: "", //输入值,
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/applicants/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/applicants", this.model);
      }

      this.$router.push("/applicant/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/applicants/${this.id}`);
      this.model = res.data;
      console.log(res.data);
    },

     // 列表标签
    async handleClose(tag) {
      this.model.tags.splice(this.model.tags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    async handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.model.tags.push(inputValue);
        console.log('先加标签',this.dynamicTags)
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
