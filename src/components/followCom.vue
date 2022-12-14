<template>
  <div>
    <van-button class="follow-btn" round size="small" v-if="isFollowed" @click="followFn" :loading="following">
      已关注
    </van-button>
    <van-button
      class="follow-btn"
      type="info"
      color="#3296fa"
      round
      size="small"
      icon="plus"
      v-else
      :loading="following"
      @click="followFn"
    >
      关注
    </van-button>
  </div>
</template>

<script>
  import { followGoApi, followOutApi } from '@/api/article'
  export default {
    props: ['isFollowed', 'autId'],
    data() {
      return {
        following: false
      }
    },
    methods: {
      async followFn() {
        this.following = true
        try {
          if (this.isFollowed) {
            // console.log(this.articleContent.aut_id)
            await followOutApi(this.autId)
          } else {
            await followGoApi(this.autId)
          }
          this.following = false
          this.$emit('isFollowFn', !this.isFollowed)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>

<style></style>
