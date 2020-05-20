<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>案例管理</el-breadcrumb-item>
      <el-breadcrumb-item>案例列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>案例列表</h1>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入案例名称" v-model="queryInfo.query" clearable @clear="fetch">
              <el-button slot="append" icon="el-icon-search" @click="fetch"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
          <el-button type='primary' @click="$router.push('/case/create')" class="el-icon-plus">添加案例</el-button>
          </div>
          </el-col>
      </el-row>

      <el-table :data="tableData" style="width: 100%" max-height="650">
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="_id" label="ID" width="250"> </el-table-column>
        <el-table-column prop="name" label="案例名称" width="250">
        </el-table-column>
        <el-table-column prop="avatar" label="案例图标" width="250">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" style="height:2.5rem;" />
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
      this.$router.push(`/case/edit/${row._id}`);
    },
    async remove(row) {
      this.$confirm(`操作将永久删除 “${row.name}” , 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/cases/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    async fetch() {
      const res = await this.$http.get("rest/cases",{
        params:this.queryInfo
      });
      this.tableData = res.data.items;
      this.total = res.data.countNum;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
