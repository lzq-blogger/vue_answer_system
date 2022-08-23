<template>
  <el-container>
    <el-header>Header{{StuNum}}</el-header>
    <el-container>
      <!-- <el-aside :width="`${mobile_pc_aside_width}`">
       
        <SnswerSheetPc v-if="mobile_pc_aside_width==='300px'"></SnswerSheetPc>
        <SnswerSheetMobile v-else></SnswerSheetMobile>    
      </el-aside> -->
      <el-container>
        <el-main>
          <ItemTopic></ItemTopic>
        </el-main>
        <el-footer>
          <el-button type="info" plain>答题卡</el-button>
         
          <el-button type="info" plain>提交</el-button>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    import { ref,reactive,provide } from 'vue'
    import {userMainStore} from '../store/index'
    import { useRoute } from 'vue-router'
    import ItemTopic from '../components/ItemTopic'
    // import SnswerSheetMobile from './answerSheet/SnswerSheetMobile'
    // import SnswerSheetPc from './answerSheet/SnswerSheetPc'

    export default {
      name: 'TopicIndex',
      components: { ItemTopic},
      setup(){
          const store = userMainStore()
          const route = useRoute()

          const topicList = reactive([
          {
            id:'645324q',
            title:'题目1',
            options:[{optionWord:'选项A',option:'A'},{optionWord:'选项B',option:'B'},{optionWord:'选项C',option:'C'},{optionWord:'选项D',option:'D'}],
            answer:'C',
            select:0,  //0是单选
            analysis:'这是解析1'
          },
          {
            id:'546353',
            title:'题目2',
            options:[{optionWord:'选项A',option:'A'},{optionWord:'选项B',option:'B'},{optionWord:'选项C',option:'C'},{optionWord:'选项D',option:'D'}],
            answer:'B',
            select:1,  //1是多选
            analysis:'这是解析2'
          },
          {
            id:'64352',
            title:'题目3',
            options:[{optionWord:'选项A',option:'A'},{optionWord:'选项B',option:'B'},{optionWord:'选项C',option:'C'},{optionWord:'选项D',option:'D'}],
            answer:'D',
            select:1,  //1是多选
            analysis:'这是解析3'
          },
          {
            id:'73564',
            title:'题目4',
            options:[{optionWord:'选项A',option:'A'},{optionWord:'选项B',option:'B'},{optionWord:'选项C',option:'C'},{optionWord:'选项D',option:'D'}],
            answer:'D',
            select:0,  //1是多选
            analysis:'这是解析4'
          },
          {
            id:'23432',
            title:'题目5',
            options:[{optionWord:'选项A',option:'A'},{optionWord:'选项B',option:'B'},{optionWord:'选项C',option:'C'},{optionWord:'选项D',option:'D'}],
            answer:'B',
            select:1,  //1是多选
            analysis:'这是解析5'
          }
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
  *{
    padding:0;
    margin:0;
  }
  .el-header,.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    width:100%;
    position: fixed;
    top: 0;
  }
  .el-footer{
    width:100%;
    position: fixed;
    bottom: 0;
  }  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin:60px 0px 60px 0px;
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
