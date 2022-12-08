<template>
  <div>
    这是layout页面
    <!-- 二级路由挂载点 -->
    <router-view />
    <!-- 页面的切换了 -->
    <van-tabbar route>
      <van-tabbar-item class="tabitem" replace to="/home" icon="home-o">
        <span>首页</span>
        <template #icon>
          <span class="toutiao toutiao-shouye"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tabitem" replace to="/qa" icon="search">
        <span>问答</span>
        <template #icon>
          <span class="toutiao toutiao-wenda"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tabitem" replace to="/video" icon="search">
        <span>视频</span>
        <template #icon>
          <span class="toutiao toutiao-shipin"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tabitem" replace to="/my" icon="search">
        <span>我的</span>
        <template #icon>
          <span class="toutiao toutiao-wode"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="less">
.tabitem {
  .toutiao {
    font-size: 40px;
  }
  span {
    font-size: 20px;
  }
}
</style>
