<template>
  <div>
    <van-cell title="历史记录">
      <span v-if="deleteShow" class="alldel" @click="$emit('deleteAll')">全部删除</span>
      <span v-if="deleteShow" @click="deleteShow = !deleteShow">完成</span>
      <template #right-icon>
        <van-icon v-if="!deleteShow" name="delete" class="search-icon" @click="deleteShow = !deleteShow" />
      </template>
    </van-cell>
    <van-cell :title="item" v-for="(item, index) in searchHistoryList" :key="index" @click="deleteFn(index)">
      <template #right-icon>
        <van-icon name="close" class="search-icon" />
      </template>
    </van-cell>
  </div>
</template>

<script>
  export default {
    props: {
      searchHistoryList: Array
    },
    data() {
      return {
        deleteShow: false
      }
    },
    methods: {
      deleteFn(val) {
        if (this.deleteShow) {
          this.searchHistoryList.splice(val, 1)
        } else {
          this.$emit('openResult', this.searchHistoryList[val])
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 40px;
    line-height: inherit;
  }
  .alldel {
    margin-right: 20px;
  }
</style>
