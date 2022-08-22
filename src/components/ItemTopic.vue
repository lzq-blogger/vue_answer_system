<template>
  <div class="itemTopic-main" v-for="(item,index) in topicList" :key="index">
      <h6>{{index+1}}.{{item.title}}</h6><br>
      <div>
        <ul>
          <li v-for="(item,index2) in item.options" :key="index2">
            {{item.key}}.{{item.item.key}}
          </li>
        </ul>
      </div>

  </div>
  <div></div>
</template>

<script>

import {inject} from 'vue'
export default{
    name:'ItemTopic',
    setup(){
        const topicList = inject('topicList')

        return{
            topicList,
        }
    }
}
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