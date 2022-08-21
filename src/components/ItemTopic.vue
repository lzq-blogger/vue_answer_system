<template>
  <!-- <div class="itemTopic-main" v-for="(item,index) in topicList" :key="index">
      <h6>{{item.title}}</h6>

  </div> -->
  <div></div>
</template>

<script>
import { toRefs, defineComponent } from 'vue';
export default defineComponent({
    name:'ItemTopic',
    // props:{
    //     topicList:{
    //         type:Object
    //     }
    // },
    setup(props){
        console.log(toRefs(props))
        return{
        }
    }
})
</script>

<style>
    .itemTopic-main{
        padding:10px;
        background-color: white;
    }
    .itemTopic-main > h6{
        margin-bottom: 10px;
    }
</style>