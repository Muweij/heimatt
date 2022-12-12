<template>
  <div>
    <van-cell icon="search" v-for="(item, index) in suggestionList" :key="index">
      <template #title>
        <div v-html="text(item)" @click="addFn(item)"></div>
      </template>
    </van-cell>
  </div>
</template>
<script>
  import { searchSuggestionApi } from '@/api/home'
  import lodash from 'lodash'
  export default {
    props: {
      searchvalue: String
    },
    data() {
      return {
        time: '',
        suggestionList: []
      }
    },
    methods: {
      text(val) {
        let hightStr = `<span style="color: red">${this.searchvalue}</span>`
        //如果需要根据一个变量来创建正则表达式，两个斜线中间没法写变量
        //就手动new RegExp正则表达式的构造函数
        // RegExp(匹配模式字符串, 匹配模式);
        let res = new RegExp(this.searchvalue, 'gi')
        return val.replace(res, hightStr)
      },
      addFn(item) {
        this.$emit('keywordFn', item)
      }
    },
    created() {},
    watch: {
      searchvalue: {
        handler: lodash.debounce(async function (newVal) {
          try {
            let { data } = await searchSuggestionApi(newVal)
            if (data.data.options[0] != null) {
              this.suggestionList = data.data.options
            }
          } catch (error) {
            console.log(error)
          }
        }, 500),
        immediate: true
      }
    }
  }
</script>
<style scoped></style>
