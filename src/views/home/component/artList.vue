<template>
  <div>
    <div class="artlistcon">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
        :success-text="successText"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- <van-cell
            v-for="item in list"
            :key="item.art_id"
            :title="item.title"
          /> -->
          <artItem v-for="item in list" :key="item.art_id" :item="item" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import { artListApi } from '@/api/home'
  import artItem from '@/components/artItem.vue'
  export default {
    components: { artItem },
    props: {
      channelsItem: Object
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        timestamp: new Date().valueOf(),
        isLoading: true,
        successText: ''
      }
    },
    methods: {
      async getArtList() {
        let obj = {
          channel_id: this.channelsItem.id,
          timestamp: this.timestamp
        }
        let { data } = await artListApi(obj)
        console.log(data)
        if (data.data.pre_timestamp == null || data.data.results.length == 0) {
          this.finished = true
        } else {
          this.timestamp = data.data.pre_timestamp
          this.list = [...this.list, ...data.data.results]
          this.loading = false
        }
      },
      onLoad() {
        this.getArtList()
      },
      async onRefresh() {
        try {
          let obj = {
            channel_id: this.channelsItem.id,
            timestamp: new Date().valueOf()
          }
          let { data } = await artListApi(obj)
          //   this.list = data.data.results
          this.list.unshift(...data.data.results)
          this.successText = `刷新成功，刷新了${data.data.results.length}条数据`
          this.isLoading = false
        } catch (error) {
          this.isLoading = false
          this.successText = '刷新失败'
        }
      }
    },
    created() {}
  }
</script>

<style scoped>
  .artlistcon {
    position: fixed;
    top: 186px;
    left: 0px;
    right: 0px;
    bottom: 104px;
    overflow-y: auto;
  }
</style>
