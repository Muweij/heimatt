<template>
  <div>
    <!-- 无封面的 -->
    <div class="itemone">
      <div class="itemthree">
        <!-- 单图的时候标题宽度为447 -->
        <div class="title" :class="{ wd447: item.cover.type == 1 }">
          {{ item.title }}
        </div>
        <div class="imglist imgone" v-if="item.cover.type == 1">
          <van-image width="100%" :src="item.cover.images[0]" />
        </div>
      </div>
      <div class="imglist" v-if="item.cover.type == 3">
        <van-image class="imgitem" :src="item.cover.images[0]" />
        <van-image class="imgitem" :src="item.cover.images[1]" />
        <van-image class="imgitem" :src="item.cover.images[2]" />
      </div>
      <div class="tip">
        <span>{{ item.is_top ? '置顶' : '未置顶' }}</span>
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ item.pubdate | datatime }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      item: Object
    },
    methods: {}
  }
</script>
<style scoped lang="less">
  .itemone {
    padding: 24px 28px;
    background: #fff;
    border-bottom: 2px solid #edeff3;
    .title {
      font-size: 32px;
      line-height: 32px;
      color: #3a3a3a;
      margin-bottom: 24px;
    }
    .tip {
      font-size: 24px;
      line-height: 24px;
      color: #b4b4b4;
      .red {
        color: red;
      }
      span {
        margin-right: 26px;
      }
    }
    .imglist {
      margin-bottom: 30px;
      .imgitem {
        width: 33.3%;
        height: 146px;
        padding: 0px 2px;
        box-sizing: border-box;
        // margin-right: 4px;
      }
    }
    .itemthree {
      overflow: hidden;
    }
    .wd447 {
      width: 446px;
      float: left;
    }
    .imgone {
      width: 232px;
      height: 146px;
      float: right;
    }
  }
</style>
