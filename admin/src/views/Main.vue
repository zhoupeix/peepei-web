<template>
<el-container style="height:100vh;">
  <el-header style="text-align: right; font-size: 16px; display:flex;justify-content:space-between">
    <div>
      <img src="" alt="">
      <samp>peepei网站管理后台</samp>
    </div>
    <div>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px "></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{username}}</span>
    </div>
    </el-header>
  <el-container>
    <el-aside width = "isCollapse? '64px': '200px‘">
      <div class="toggle-button" @click="toggleCollapse">
        |||
      </div>
    <el-menu router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :collapse-transition="false"
      >
       <el-menu-item index="dashboard" >
        <i class="el-icon-odometer"></i>
        <span slot="title">仪表盘</span>
      </el-menu-item>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>玩家管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/player/list">玩家列表</el-menu-item>
          <el-menu-item index="/player/create">新建玩家</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goblet-full"></i>
          <span>俱乐部管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/club/list">俱乐部列表</el-menu-item>
          <el-menu-item index="/club/create">新建俱乐部</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
     
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/category/list">分类列表</el-menu-item>
          <el-menu-item index="/category/create">新建分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>物品管理(页面案例)</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/item/list">物品列表</el-menu-item>
          <el-menu-item index="/item/create">新建物品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-picture-outline-round"></i>
          <span>英雄管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/hero/list">英雄列表</el-menu-item>
          <el-menu-item index="/hero/create">新建英雄</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/article/list">文章列表</el-menu-item>
          <el-menu-item index="/article/create">新建文章</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-data-analysis"></i>
          <span>广告位管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          <el-menu-item index="/ads/create">新建广告位</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>管理员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin_user/list">管理员列表</el-menu-item>
          <el-menu-item index="/admin_user/create">新建管理员</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/custom/create">新建客户</el-menu-item>
          <el-menu-item index="/custom/list">客户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>案例管理(底部案例)</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/case/create">新建案例</el-menu-item>
          <el-menu-item index="/case/list">案例列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>申请管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/applicant/create">申请试用</el-menu-item>
          <el-menu-item index="/applicant/list">申请试用列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
    

    <el-main>
      <!-- 默认以组件区分 如果组件一样 以route区分 这样页面数据会清空 -->
      <router-view :key="$route.path"></router-view>

      <!-- <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
data() {
      return {
        username:'',
        isCollapse:false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleCollapse(){
      this.isCollapse = !this.isCollapse
      }
    },

    created(){
      this.username = localStorage.username
      console.log(this.username)
    }
}
</script>

<style>
.el-header {
  background-color:#545c64;
  color:#fff;
  line-height: 60px;
  }

.el-aside {
  color: #333;
}
.el-aside .el-menu{
  border-right: none;
}
.el-icon-setting{
  color:#fff;
}
.el-aside-head{
  background-color: #545c64;
}
.toggle-button{
  background-color: #8c9197;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  letter-spacing: 0.2rem;
  cursor: pointer;
}
</style>