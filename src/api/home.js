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
export const allChannelApi = () =>
  request({
    url: '/v1_0/channels',
    method: 'get'
  })
export const setChannelApi = channels =>
  request({
    url: '/v1_0/user/channels',
    method: 'put',
    data: {
      channels
    }
  })
export const searchSuggestionApi = val =>
  request({
    url: '/v1_0/suggestion',
    method: 'get',
    params: {
      q: val
    }
  })
export const searchResultApi = params =>
  request({
    url: '/v1_0/search',
    method: 'get',
    params
  })
