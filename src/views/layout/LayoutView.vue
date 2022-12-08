<template>
  <div>
    <!-- 二级路由挂载点 -->
    <router-view />
    <!-- 页面的切换了 -->
    <van-tabbar route>
      <!-- 目前有个bug，图标颜色加不上，iconfont网站生成的图标有问题 -->
      <!-- 实际工作中：UI小姐姐都会给我们正常的小图标，放心 -->
      <van-tabbar-item class="tabitem" replace to="/home">
        <span>首页</span>
        <template #icon>
          <span class="toutiao toutiao-shouye"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tabitem" replace to="/qa">
        <span>问答</span>
        <template #icon>
          <span class="toutiao toutiao-wenda"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tabitem" replace to="/video">
        <span>视频</span>
        <template #icon>
          <span class="toutiao toutiao-shipin"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class="tabitem" replace to="/my">
        <span>{{ $store.state.token ? "我的" : "未登录" }}</span>
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
