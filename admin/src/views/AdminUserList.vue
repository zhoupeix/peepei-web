<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>管理员列表</h1>
    <el-card>
      <el-col :gutter="30">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入管理员名称" v-model="queryInfo.query" clearable @clear="fetch" >
              <el-button slot="append" icon="el-icon-search" @click="fetch"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="$router.push('/admin_user/create')" class="el-icon-plus"
              >添加管理员</el-button>
          </div>
        </el-col>
      </el-col>
      <el-table :data="tableData" style="width: 100%" max-height="550" stripe>
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="_id" label="ID" width="250"> </el-table-column>
        <el-table-column prop="username" label="管理员名" width="350">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="handleClick(scope.row)" size="small" circle></el-button>
            <!-- <el-button  class="el-icon-edit" @click="handleClick(scope.row)" type="text" size="small">编辑</el-button> -->
            <el-button type="danger" icon="el-icon-delete" @click="remove(scope.row)" size="small" circle></el-button>
            <!-- <el-button class="el-icon-delete" @click="remove(scope.row)" type="text" size="small">删除</el-button> -->
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
      :total="total">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search:'',
      queryInfo:{
        query:'',
        //当前第几页
        pageNum:1,
        //显示几条
        pageSize:10,
      
      },
      total:0
    };
  },
  methods: {
    // 每页条数 事件
    handleSizeChange(newSize){ 
      this.queryInfo.pageSize = newSize
      this.fetch()
    },
    //页码值 改变事件
    handleCurrentChange(newPage){
      this.queryInfo.pageNum = newPage
      this.fetch()
    },
    handleClick(row) {
      this.$router.push(`/admin_user/edit/${row._id}`);
    },
    async remove(row) {
      this.$confirm(`操作将永久删除 "${row.username}", 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/admin_users/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    async fetch() {
      const res = await this.$http.get("rest/admin_users",{
      params: this.queryInfo//get请求携带参数
    });
      this.tableData = res.data.items;
      this.total = res.data.countNum
    }
  },
  created() {
    this.fetch();
  }
};
</script>
