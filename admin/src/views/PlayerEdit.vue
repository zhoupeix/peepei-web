<template>
  <div class="about">
    <h1>创建玩家</h1>
    <el-form label-width='120px' @submit.native.prevent="save"> 
      <el-form-item label='玩家ID：'>
        <el-input placeholder="玩家ID" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label='玩家名称：'>
        <el-input  v-model="model.name" placeholder="请输入玩家名字" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' native-type='submit'>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      model:{}
    }
  },
  methods:{
    save(){
      
    }
  }
  
}
</script>
