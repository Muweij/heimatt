import request from '@/utils/request'
//请求导航栏列表
export const loginApi = () =>
  request({
    url: '/v1_0/user/channels',
    method: 'get'
  })
// 请求文章列表
export const artListApi = params =>
  request({
    url: '/v1_0/articles',
    method: 'get',
    params
  })
