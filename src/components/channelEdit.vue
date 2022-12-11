<template>
  <div>
    <div class="close" @click="$emit('close')">
      <span class="toutiao toutiao-guanbi"></span>
    </div>
    <!-- 我的频道 -->
    <div class="mycha">
      <div>我的频道</div>
      <van-button
        class="editbtn"
        plain
        type="danger"
        round
        @click="isEdit = !isEdit"
      >
        {{ isEdit ? '完成' : '编辑' }}
      </van-button>
    </div>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        :class="{ red: channelActive == index }"
        v-for="(item, index) in channels"
        :key="item.id"
        :text="item.name"
        @click="mychannelFn(index)"
      >
        <template #icon>
          <van-icon name="clear" class="clearbtn" v-if="isEdit && item.id" />
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 频道推荐 -->
    <div class="mycha">
      <div>频道推荐</div>
    </div>
    <van-grid direction="horizontal" :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(item, index) in recommendChannels"
        :key="index"
        :text="item.name"
        icon="plus"
        @click="addchannelFn(item)"
      ></van-grid-item>
    </van-grid>
  </div>
</template>
<script>
  import { allChannelApi } from '@/api/home'
  export default {
    props: {
      channels: Array,
      channelActive: Number
    },

    data() {
      return {
        allChannel: [],
        isEdit: false
      }
    },
    async created() {
      let { data } = await allChannelApi()

      this.allChannel = data.data.channels
      // console.log(this.allChannel)
    },
    computed: {
      recommendChannels() {
        return this.allChannel.filter(item => {
          return !this.channels.find(it => {
            return it.id == item.id
          })
        })
      }
    },
    methods: {
      mychannelFn(index) {
        if (this.isEdit) {
          if (this.channels[index].id == 0) {
            return false
          }
          if (index < this.channelActive) {
            this.$emit('ischannel', this.channelActive - 1, true)
          }
          this.channels.splice(index, 1)
        } else {
          this.$emit('ischannel', index, false)
        }
      },
      addchannelFn(item) {
        this.channels.push(item)
      }
    }
  }
</script>

<style scoped lang="less">
  .close {
    margin: 30px 0px 0px 30px;
    .toutiao {
      font-size: 28px;
      line-height: 28px;
      display: block;
    }
  }

  .mycha {
    height: 48px;
    margin-top: 40px;
    padding: 0px 24px;
    margin-bottom: 46px;
    div:first-child {
      font-size: 32px;
      line-height: 36px;
      letter-spacing: 2px;
      color: #333333;
      float: left;
    }
    .editbtn {
      height: 48px;
      width: 120px;
      float: right;
      /deep/.van-button__text {
        font-size: 25px;
        color: red;
      }
    }
  }
  .mt75 {
    margin-top: 75px;
  }
  .grid-item {
    width: 160px;
    height: 86px;
    /deep/.van-grid-item__content {
      background-color: #f4f5f6;
      .van-grid-item__text {
        font-size: 28px;
        color: #222222;
        margin-left: 6px;
      }
      .van-icon {
        font-size: 24px;
      }
      .van-grid-item__icon-wrapper {
        position: unset;
        .clearbtn {
          position: absolute;
          top: -12px;
          right: -12px;
          z-index: 9;
          color: #cacaca;
        }
      }
    }
  }
  /deep/.red {
    .van-grid-item__content {
      .van-grid-item__text {
        color: red;
      }
    }
  }
</style>
