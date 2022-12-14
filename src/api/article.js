import request from '@/utils/request'
export const articleListApi = article_id =>
  request({
    url: `/v1_0/articles/${article_id}`,
    method: 'get'
  })
export const followGoApi = target =>
  request({
    url: '/v1_0/user/followings',
    method: 'post',
    data: {
      target: target
    }
  })
export const followOutApi = target =>
  request({
    url: `/v1_0/user/followings/${target}`,
    method: 'delete'
  })
