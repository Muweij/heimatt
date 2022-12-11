<template>
  <div>
    <!-- 搜索按钮 -->
    <van-nav-bar class="page-nav-bar" title="搜索">
      <template #title>
        <van-button class="seachbtn" type="info">
          <template #icon>
            <i class="toutiao toutiao-sousuo"></i>
          </template>
          <template #default>搜索</template>
        </van-button>
      </template>
    </van-nav-bar>
    <!--------------->
    <!-- 导航栏和他的列表 -->
    <van-tabs class="channels" v-model="active">
      <van-tab v-for="item in channels" :title="item.name" :key="item.id">
        <!-- 列表 -->
        <ArtList :channelsItem="item" />
        <!-- -- -->
      </van-tab>
      <!-- 汉堡按钮 -->
      <div class="hamburgerbtn" @click="hamburgerFn">
        <span class="toutiao toutiao-gengduo"></span>
      </div>
      <!-- ------- -->
    </van-tabs>
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }">
      <channelEdit
        @close="show = false"
        :channels="channels"
        :channelActive="active"
        @ischannel="ischannel"
      ></channelEdit>
    </van-popup>
    <!-- -------------- -->
  </div>
</template>
<script>
  import { loginApi } from '@/api/home'
  import ArtList from './component/artList.vue'
  import channelEdit from '@/components/channelEdit.vue'
  export default {
    components: {
      ArtList,
      channelEdit
    },
    data() {
      return {
        channels: [],
        show: false,
        active: 0
      }
    },
    methods: {
      hamburgerFn() {
        this.show = true
      },
      ischannel(index, bool) {
        this.active = index
        this.show = bool
      }
    },
    async created() {
      try {
        let { data } = await loginApi()
        this.channels = data.data.channels
      } catch (error) {
        // console.log(error)
      }
    }
  }
</script>
<style scoped lang="less">
  .seachbtn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border-radius: 32px;
    .toutiao {
      font-size: 32px;
    }
  }
  .page-nav-bar {
    // 深度选择符
    //当你使用了第三方组件，修改样式改不了，就需要用到/deep/深度选择符
    /deep/ .van-button__text {
      color: #fff;
    }
    /deep/ .van-nav-bar__title {
      max-width: 100%;
    }
  }
  .channels {
    padding-right: 66px;
    /deep/ .van-tab {
      min-width: 190px;
      border-right: 2px solid #edeff3;
    }
    /deep/ .van-tab__text {
      font-size: 30px;
    }
    /deep/ .van-tabs__line {
      width: 31px;
      height: 6px;
      background-color: #3296fa;
      border-radius: 3px;
    }
  }
  .hamburgerbtn {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 66px;
    height: 82px;
    line-height: 80px;
    text-align: center;
    background: #ffffff;
    opacity: 0.5;
    .toutiao {
      font-size: 40px;
    }
  }
</style>
