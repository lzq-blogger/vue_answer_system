<template>
  <el-container>
    <el-header>Header{{$route.params.id}}</el-header>
    <el-container>
      <el-aside :width="`${mobile_pc_aside_width}`">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    import {useStore} from 'vuex'
    import { useRoute } from 'vue-router'
    export default {
      name: 'TopicIndex',
      components: {},
      setup(){
          var store = useStore()
          var route = useRoute()

          var StuNum = route.params.StuNum //接收登录页面传过来的学生学号

          let mobile_pc_aside_width = store.state.mobile_pc_aside_width
          return {
              mobile_pc_aside_width,
              StuNum
          }
      }
    }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
