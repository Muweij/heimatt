<template>
  <div>
    <div class="header">
      <div class="my-container">
        <!-- 登录未登录也要根据缓存里的token来判断 -->
        <!-- 已登录的dom结构 -->
        <div class="loginin" v-if="$store.state.token">
          <!-- 用户头像 -->
          <div class="logintop">
            <van-image class="img" round :src="userinfo.photo" />
            <div class="loginname">{{ userinfo.name }}</div>
            <van-button class="loginbtn" size="mini" type="primary">
              编辑资料
            </van-button>
          </div>
          <!-- 数据统计 -->
          <div class="datalist">
            <div class="item">
              <div>{{ userinfo.art_count }}</div>
              <div>头条</div>
            </div>
            <div class="item">
              <div>{{ userinfo.follow_count }}</div>
              <div>关注</div>
            </div>
            <div class="item">
              <div>{{ userinfo.fans_count }}</div>
              <div>粉丝</div>
            </div>
            <div class="item">
              <div>{{ userinfo.like_count }}</div>
              <div>获赞</div>
            </div>
          </div>
        </div>
        <!-- 未登录的dom结构 -->
        <div class="outlogin" v-else @click="loginin">
          <img src="@/assets/img/mobile.png" alt="" />
          <div class="text">登录/注册</div>
        </div>
      </div>
    </div>
    <van-grid :column-num="2">
      <!-- 刚才看到图标里面明明有收藏和历史为什么没用 -->
      <!-- 1、为了教学，让大家更好的练习插槽的使用 -->
      <!-- 2、黑马头条一开始录制这个课程的时候，vant组件还不支持插槽 -->
      <!-- 实际工作中 -->
      <!-- 1、如果使用的第三方库有想要的图标，直接拿来用 -->
      <!-- 2、如果第三方库没有图标，那只能用UI小姐姐给的 -->
      <van-grid-item class="columnitem">
        <template #icon>
          <span class="toutiao toutiao-shoucang"></span>
        </template>
        <template #text>
          <span class="text">收藏</span>
        </template>
      </van-grid-item>
      <van-grid-item class="columnitem">
        <template #icon>
          <span class="toutiao toutiao-lishi"></span>
        </template>
        <template #text>
          <span class="text">历史</span>
        </template>
      </van-grid-item>
    </van-grid>
    <div class="line"></div>
    <van-cell title="消息通知" is-link />
    <van-cell title="小智同学" is-link />
    <div class="line"></div>
    <!-- 思考：什么时候才显示退出登录 -->
    <!-- 目标：有了token才显示 -->
    <div class="loginout" v-if="$store.state.token" @click="loginout">
      退出登录
    </div>
  </div>
</template>
<script>
import { removeItem } from "@/utils/storage";
import { getUserApi } from "@/api/user";
export default {
  data() {
    return {
      // loginstate: getItem("token"),
      userinfo: {},
    };
  },
  //created或者mounted
  async created() {
    if (this.$store.state.token) {
      try {
        let { data } = await getUserApi();
        this.userinfo = data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    loginin() {
      //编程式导航
      this.$router.push("/login");
    },
    // 登出方法
    // 细节：加上二次确认框
    // 原因：因为有时候用户并不是真的想退出，有可能是误触
    // 如果不加二次确认框：点击登出真就退出了，继续浏览，还要重新登录（麻烦不麻烦？）
    // 解决：加上二次确认框
    loginout() {
      //思考：我已经全局引入vant，为什么还不能用？
      //使用：this.$dialog
      this.$dialog
        .confirm({
          title: "确认退出吗？",
        })
        .then(() => {
          console.log("点击了确认");
          // on confirm
          removeItem();
          //思考：
          // 1、我点击确认退出登录，为什么页面没变化？
          // 2、浏览器缓存的数据，是响应性的吗？
          // 3、是不是要监听缓存的变化，以我们目前的学的知识，很难办到！
          //目标：退出之后，页面应该显示未登录的状态
          //解决：使用Vuex
        })
        .catch(() => {
          console.log("点击了取消");
          // on cancel
        });
    },
  },
};
</script>

<style scoped lang="less">
.line {
  height: 10px;
  width: 100%;
}
.header {
  height: 390px;
  width: 100%;
  background: url("../../assets/img/banner.png");
  .outlogin {
    text-align: center;
    img {
      width: 132px;
      height: 132px;
      margin: 113px 0px 15px;
    }
    .text {
      font-size: 28px;
      color: #fff;
    }
  }
  .loginin {
    overflow: hidden;
    line-height: 132px;
    .logintop {
      margin-top: 80px;
      padding: 0px 32px;
      overflow: hidden;
      .img {
        width: 132px;
        height: 132px;
        border: 4px solid #fff;
        float: left;
      }
      .loginname {
        font-size: 30px;
        color: #fff;
        float: left;
        margin-left: 22px;
      }
      .loginbtn {
        width: 116px;
        height: 33px;
        background-color: #ffffff;
        border-radius: 16px;
        color: #666666;
        font-size: 20px;
        float: right;
        margin-top: 50px;
      }
    }

    .datalist {
      padding: 0px 32px;
      .item {
        width: 25%;
        float: left;
        color: #fff;
        text-align: center;
        div:first-child {
          font-size: 36px;
          line-height: 36px;
          margin: 55px 0px 18px;
        }
        div:last-child {
          font-size: 23px;
          line-height: 24px;
        }
      }
    }
  }
}
.columnitem {
  .toutiao {
    font-size: 45px;
  }
  .text {
    font-size: 28px;
    color: #333333;
    margin-top: 16px;
  }
}
.cel {
  margin: 9px 0px;
}
.loginout {
  height: 105px;
  font-size: 30px;
  letter-spacing: 2px;
  color: #d86262;
  text-align: center;
  background: #fff;
  line-height: 105px;
}
</style>
