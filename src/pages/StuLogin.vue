<template>
  <div class="main">
      <div class="search">
        <span>学号：</span>
        <el-input style="width:150px;margin-right:10px;"  v-model="StuNum" placeholder="请输入学号"></el-input>
        <el-button type="primary" :loading="loading" @click="submitTopic">确定</el-button>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'StuLogin',
  setup(){
    const router = useRouter()

    let StuNum = ref("201973849234")
    let loading = ref(false)


    function submitTopic(){
      // resolve新窗口打开
      router.replace({
        name: 'topicIndex',  // 跳转的页面路由
        params:{
          StuNum:StuNum.value  //带参数
        }
      })
    }


    return {
      StuNum,
      loading,
      submitTopic
    }
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
}
.main {
    text-align: center;
    line-height: 160px;
}
  
.search{
  background-color: #E9EEF3;
  color: #333;
  width:100%;
  padding:10px;
}
</style>
