<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>申请客户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>客户列表</h1>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入客户名称"
              v-model="queryInfo.query"
              clearable
              @clear="fetch"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="fetch"
              ></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <!-- <el-button
              type="primary"
              @click="$router.push('/custom/create')"
              class="el-icon-plus"
              >添加客户</el-button
            > -->
          </div>
        </el-col>
      </el-row>

      <el-table :data="tableData" style="width: 100%" max-height="650">
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="_id" label="ID" width="150"> </el-table-column>
        <el-table-column prop="name" label="客户名称" width="150">
        </el-table-column>
        <el-table-column prop="email" label="邮箱地址" width="150">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="150">
        </el-table-column>
        <el-table-column prop="address" label="联系地址" width="150">
        </el-table-column>
        <el-table-column prop="created" label="申请时间" width="150">
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag
              :key="i"
              v-for="(tag, i) in scope.row.tags"
              
              
            >
              {{ tag }}
            </el-tag>
            <!-- <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm(scope.row)"
              @blur="handleInputConfirm(scope.row)"
            >
            </el-input> -->
            <!-- <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+ 加标签</el-button
            > -->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button @click="remove(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search: "",
      queryInfo: {
        query: "",
        //当前第几页
        pageNum: 1,
        //显示几条
        pageSize: 10,
      },
      total: 0,
      //标签🇭数据
      dynamicTags: [], //标签上的名称
      inputVisible: false,
      inputValue: "", //输入值,
    };
  },
  methods: {
    // 每页条数 事件
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
      this.fetch();
    },
    //页码值 改变事件
    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;
      this.fetch();
    },

    handleClick(row) {
      this.$router.push(`/applicant/edit/${row._id}`);
    },
    async remove(row) {
      this.$confirm(`操作将永久删除 “${row.name}” , 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.delete(`rest/applicants/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
    async fetch() {
      const res = await this.$http.get("rest/applicants", {
        params: this.queryInfo,
      });
      console.log(res.data);
      this.tableData = res.data.items;
      this.total = res.data.countNum;
    },

    // 列表标签
    // async handleClose(tag, row) {
    //   row.tags.splice(row.tags.indexOf(tag), 1);
    //   this.dynamicTags = this.dynamicTags.concat(row.tags);
    //   const res = await this.$http.put(`rest/applicants/${row._id}`, {
    //     tag: this.dynamicTags,
    //   });
    // },

    // showInput() {
    //   this.inputVisible = true;
    //   this.$nextTick(_ => {
    //     this.$refs.saveTagInput.$refs.input.focus();
    //   });
    // },

    // async handleInputConfirm(row) {
    //   let inputValue = this.inputValue;
    //   if (inputValue) {
    //     row.tag.push(inputValue)
    //     this.dynamicTags = this.dynamicTags.concat(row.tag);
    //     console.log("row.tag",row.tag)
    //     console.log('先加标签',this.dynamicTags)
    //     const res = await this.$http.put(`rest/applicants/${row._id}`,{tag:this.dynamicTags})
    //   }
    //   this.inputVisible = false;
    //   this.inputValue = '';
    // }
  },
  created() {
    this.fetch();
  },
};
</script>
<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
