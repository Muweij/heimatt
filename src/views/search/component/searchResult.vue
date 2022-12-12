<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in resultList" :key="item.art_id" :title="item.title" />
    </van-list>
  </div>
</template>
<script>
  import { searchResultApi } from '@/api/home'
  export default {
    props: {
      searchvalue: String
    },
    data() {
      return {
        resultList: [],
        loading: false,
        finished: false,
        page: 1
      }
    },
    methods: {
      async onLoad() {
        let obj = {
          page: this.page,
          per_page: 10,
          q: this.searchvalue
        }
        try {
          let { data } = await searchResultApi(obj)
          if (data.data.results != 0) {
            this.page++
            this.resultList = [...this.resultList, ...data.data.results]
            this.loading = false
          } else {
            this.finished = true
          }
        } catch (error) {
          this.loading = false
        }
      }
    },
    created() {}
  }
</script>
<style scoped></style>
