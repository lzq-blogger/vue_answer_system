<template>
    <router-view></router-view>
</template>

<script>
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
export default {
  name: 'App',
  setup(){
    const route = useRoute()
    const router = useRouter()

    let StuNum = ref("201973849234")
    let loading = ref(false)

    console.log(route)
    console.log(router)

    function submitTopic(){
      // resolve新窗口打开
      router.push({
        name: 'topicIndex',  // 跳转的页面路由
        params:{
          id:StuNum.value
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
</style>
