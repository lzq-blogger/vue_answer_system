<template>
  <el-container>
    <el-header>Header{{StuNum}}</el-header>
    <el-container>
      <el-aside :width="`${mobile_pc_aside_width}`">
        <router-view></router-view>
      </el-aside>
      <el-container>
        <el-main>
          <ItemTopic></ItemTopic>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    import { ref,reactive,provide } from 'vue'
    import {userMainStore} from '../store/index'
    import { useRoute } from 'vue-router'
    import ItemTopic from '../components/ItemTopic'

    export default {
      name: 'TopicIndex',
      components: {ItemTopic},
      setup(){
          const store = userMainStore()
          const route = useRoute()

          const topicList = reactive([
          {
            id:'645324q',
            title:'题目1',
            options:[{A:'选项A'},{B:'选项B'},{C:'选项C'},{D:'选项D'}],
            answer:'C',
            analysis:'这是解析1'
          },
          {
            id:'546353',
            title:'题目2',
            options:[{A:'选项A'},{B:'选项B'},{C:'选项C'},{D:'选项D'}],
            answer:'B',
            analysis:'这是解析2'
          },
          ])
          
          let StuNum = ref(route.params.StuNum) //接收登录页面传过来的学生学号

          let mobile_pc_aside_width = ref(store.mobile_pc_aside_width)

          provide('topicList', topicList)  //给子组件传值

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
  
  .el-main > ul > li{
    padding:20px;
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
