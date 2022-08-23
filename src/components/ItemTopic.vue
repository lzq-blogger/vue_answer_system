<template>
  <div class="itemTopic-main" v-for="(item,index) in topicList" :key="index">
      <h3>{{index+1}}.{{item.title}}（{{item.select===1?'多选':'单选'}}）</h3><br>
      <div class="option" @click="optionClick(item.select)" v-for="(item1,index1) in item.options" :key="index1">
        <input type="checkbox" v-if="item.select===1">
        <input type="radio" :name="item.id" v-else>
        <span>{{item1.option}}</span>
        <span>:{{item1.optionWord}}</span>
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


        function optionClick(optionSelect){
            console.log(optionSelect)
            return optionSelect
        }

        return{
            topicList,
            optionClick
        }
    }
}
</script>

<style>
     .itemTopic-main{
        padding:30px 30px 0px 30px;
        background-color: white;
        overflow:auto
    }
    .itemTopic-main > h6{
        margin-bottom: 10px;
    }
    .option{
        border:1px solid #CDCDCD;
        padding:10px;
        margin-bottom: 10px;
    }
    .option > input{
        margin-right:5px;
    } 
</style>