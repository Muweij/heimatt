<template>
  <div>
    <div>
      <van-nav-bar class="page-nav-bar" title="登录" left-arrow />

      <van-form @submit="onSubmit">
        <!-- 思考：在组件里插入不同的dom元素 -->
        <!-- vant已经告诉我们插槽的名字 -->
        <van-field
          v-model="user.mobile"
          :rules="userValidatorPhone"
          name="手机号"
          placeholder="手机号"
        >
          <template #left-icon>
            <span class="toutiao toutiao-shouji"></span>
          </template>
        </van-field>
        <van-field
          v-model="user.code"
          :rules="userValidatorCode"
          name="验证码"
          placeholder="验证码"
        >
          <template #left-icon>
            <span class="toutiao toutiao-yanzhengma"></span>
          </template>
          <template #button>
            <van-button class="send-sms-btn" round size="mini" type="default">
              获取验证码
            </van-button>
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button block type="info" native-type="submit"> 登录 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { loginApi } from "@/api/login";
// import { setItem } from "@/utils/storage";
export default {
  data() {
    return {
      user: {
        mobile: "18678884464",
        code: "246810",
      },
      userValidatorPhone: [
        { required: true, message: "请填写用户名" },
        { pattern: /^1[3|5|7|8]\d{9}$/, message: "请输入正确的手机号" },
      ],
      userValidatorCode: [
        { required: true, message: "请填写验证码" },
        { pattern: /^\d{6}$/, message: "请输入正确的验证码" },
      ],
    };
  },
  methods: {
    async onSubmit() {
      //登录状态的处理
      //思考：用户怎么才能知道是不是登录中呢？
      //解决：加一个轻提示

      //思考：轻提示要一直开着！什么时候关闭呢？
      //解决：成功或失败，给他另外一个提示：如：登录成功了，或，登录失败
      this.$toast.loading({
        message: "登录中...",
        forbidClick: true, //是否禁止背景点击，也同时能解决防抖截流，阻止用户多次点击登录
        duration: 0, //展示时长(ms)，值为 0 时，toast 不会消失
      });
      //一直在转圈的loading去哪了？
      // Toast 默认采用单例模式，即同一时间只会存在一个 Toast。打开新的，先前的就会关闭掉
      //try chtch捕获js代码异常的标准写法，也包括了异步请求的失败处理
      try {
        let { data } = await loginApi(this.user);
        // console.log(data.data.token);
        // localStorage.setItem(键, 值);
        this.$store.commit("setToken", data.data.token);
        // setItem（键，值）
        this.$toast.success("登录成功");
        //登录成功后返回到上一级页面
        // back()回退
        this.$router.back();
      } catch (error) {
        // error包含接口返回的错误信息
        console.log(error);
        //登录失败的原因给用户提示出来
        this.$toast.fail(error.response.data.message);
      }
      // loginApi(this.user)
      //   .then(() => {
      //     //正确的代码
      //   })
      //   .catch(() => {
      //     //接口请求失败的代码
      //   });
      //async和await：node第9天的课程
    },
  },
};
</script>
<style scoped>
.toutiao {
  font-size: 37px;
}
.send-sms-btn {
  width: 152px;
  height: 46px;
  line-height: 46px;
  background-color: #ededed;
  font-size: 22px;
  color: #666;
}
</style>
