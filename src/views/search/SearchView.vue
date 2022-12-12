<template>
  <div>
    <van-search
      background="#3296fa"
      class="searchclose"
      v-model="searchvalue"
      show-action
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <div @click="onSearch">取消</div>
      </template>
    </van-search>
    <search-result-vue v-if="searchReaultShow" :searchvalue="searchvalue" />
    <search-suggestion-vue v-else-if="searchvalue" :searchvalue="searchvalue" @keywordFn="keywordFn" />
    <search-history-vue v-else :searchHistoryList="searchHistoryList" />
  </div>
</template>

<script>
  import searchHistoryVue from './component/searchHistory.vue'
  import searchResultVue from './component/searchResult.vue'
  import searchSuggestionVue from './component/searchSuggestion.vue'
  import { getItem, setItem } from '@/utils/storage'
  export default {
    components: {
      searchHistoryVue,
      searchResultVue,
      searchSuggestionVue
    },
    data() {
      return {
        searchvalue: '',
        searchReaultShow: false,
        searchHistoryList: getItem('SEARCHHISTORYLIST') || []
      }
    },
    methods: {
      onSearch() {
        this.$router.push('/home')
      },
      keywordFn(val) {
        this.searchvalue = val
        let num = this.searchHistoryList.indexOf(val)
        if (num != -1) {
          this.searchHistoryList.splice(num, 1)
        }
        this.searchHistoryList.unshift(val)

        this.searchReaultShow = true
      }
    },
    watch: {
      searchHistoryList: {
        handler(newVal) {
          setItem('SEARCHHISTORYLIST', newVal)
        }
      },
      searchvalue(newVal) {
        if (newVal.trim().length == 0) {
          this.searchReaultShow = false
        }
      }
    }
  }
</script>

<style></style>
