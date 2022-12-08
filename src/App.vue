<template>
  <div>
    <!-- <div class="box">这是一个box</div>
    <button class="btn">按钮</button>
    <button class="yzm">验证码</button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button> -->
    <router-view />
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
<style>
/* 思考：如何让样式自适应 */
/* 解决：尺寸写rem单位 */

*,
body {
  padding: 0px;
  margin: 0px;
}
/* 我这个box本意就想顶两头，所以轻而易举算出来宽度是10rem */
/* .box {
  width: 10rem;
  height: 100px;
  background: green;
} */
/* 思考：如果一个元素尺寸不是那么的正好，又想自适应 */
/* 解决：通过了一个非常复杂的计算，得出来的8.38rem */
/* 注意：设计图是2倍图，所以在计算的时候除以2，然后再除以根字号，得出rem值 */
/* .btn {
  width: 8.38rem;
  height: 50px;
  margin: 0 auto;
  display: block;
} */
/* 这两个按钮宽度使用了rem，不管设备的尺寸如何变换都能够进行自适应 */
/* 152/2/根字号 */
/* .yzm {
  width: 2.03rem;
  height: 30px;
} */
/* 每一次写样式，都需要手动计算rem累不累？ */
/* 接下来我们用一个第三方包帮我们去自动转换rem：pxtorem */
/* 思考：我有手动转换rem吗？ */
/* 但是浏览器中已经是rem */
/* 谁转换的？通过了pxtorem这个插件，配置了postcss.config.js */
/* .box {
  width: 750px;
  height: 100px;
  background: green;
}
.btn {
  width: 694px;
  height: 88px;
  margin: 0 auto;
  display: block;
} */
/* 小结：1、我们的设计图尺寸是多少，我们的基准值就写（设计图宽度/10） 即可 */
/* 小结：2、浏览器中的rem都是通过pxtorem依赖包来给我们转换的 */
/* 小结：3、需要配置postcss.config.js，前提：下包 */
/* 便利：我们写尺寸时不需要手动计算rem，pxtorem会自动计算，元素的尺寸照抄设计图即可 */

/* 又出问题了 */
/* 问题：vant的设计尺寸是以375来设计的，我们的设计图又是以750来设计的 */
/* 问题：基准值应该怎么处理？ */
/* 问题：基准值为75时，vant的样式显得很小 */
</style>
