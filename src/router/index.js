import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    //路由懒加载
    component: () => import("@/views/login/LoginView"),
  },
  {
    path: "/",
    // name: 'layout', // 如果父路由有默认子路由，那它的 name 没有意义
    component: () => import("@/views/layout/LayoutView"),
    children: [
      {
        path: "/home", // 默认子路由，只能有1个
        name: "home",
        component: () => import("@/views/home/HomeView"),
      },
      {
        path: "/qa",
        name: "qa",
        component: () => import("@/views/question/QuestionView"),
      },
      {
        path: "/video",
        name: "video",
        component: () => import("@/views/video/VideoView"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("@/views/my/MyView"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
