import request from "@/utils/request";
// import store from "@/store";
//获取用户基本资料
export const getUserApi = () =>
  request({
    url: "/v1_0/user",
    method: "get",
    //参数是header请求头，axios单独的请求配置
    //所以不能用data或者params
    // headers: {
    //   Authorization: `Bearer ${store.state.token}`,
    // },
  });
