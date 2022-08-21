<template>
  <el-container>
    <el-header>Header{{$route.params.StuNum}}</el-header>
    <el-container>
      <el-aside :width="`${mobile_pc_aside_width}`">
        <router-view></router-view>
      </el-aside>
      <el-container>
        <el-main>
          <ItemTopic :topicList='topicList'></ItemTopic>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    import { ref,reactive } from 'vue'
    import {useStore} from 'vuex'
    import { useRoute } from 'vue-router'
    import ItemTopic from '../components/ItemTopic'

    export default {
      name: 'TopicIndex',
      components: {ItemTopic},
      setup(){
          const store = useStore()
          const route = useRoute()

          const topicList = reactive([
            {
              title:'题目1',
              options:[{'A':'选项A'},{'B':'选项B'},{'C':'选项C'},{'D':'选项D'}],
              answer:'C',
              analysis:'这是解析1'
            },
            {
              title:'题目2',
              options:[{'A':'选项A'},{'B':'选项B'},{'C':'选项C'},{'D':'选项D'}],
              answer:'B',
              analysis:'这是解析2'
            },
          ])
          
          let StuNum = ref(route.params.StuNum) //接收登录页面传过来的学生学号

          let mobile_pc_aside_width = ref(store.state['user'].mobile_pc_aside_width)
          return {
              mobile_pc_aside_width,
              StuNum,
              topicList
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
