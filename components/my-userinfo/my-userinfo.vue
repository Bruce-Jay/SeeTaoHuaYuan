<template>
  <view>
    <view class="my-userinfo-container">
      <!-- 头像和昵称区域 -->
      <view class="top-box">
        <image
          src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/3d-illustration-bald-person-with-glasses_23-2149436184.avif"
          mode="" class="avatar"></image>
        <view class="nickname">
          测试用户1
        </view>
      </view>

      <!-- 面板区域 -->
      <view class="panel-list">
        <view class="panel">
          <view class="panel-list-item">
            <text>我的地址</text>
            <uni-icons type="arrowright" size="15"></uni-icons>
          </view>
          <view class="panel-list-item">
            <text>联系客服</text>
            <uni-icons type="arrowright" size="15"></uni-icons>
          </view>
          <view class="panel-list-item" @click="logout">
            <text>退出登录</text>
            <uni-icons type="arrowright" size="15"></uni-icons>
          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: "my-userinfo",
    data() {
      return {

      };
    },
    computed: {
      ...mapState('m_user', ['userinfo'])
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken', 'updateAddress']),
      async logout() {
        // 询问用户是否退出登录
        const [err, succ] = await uni.showModal({
          title: '提示',
          content: '确认退出登录吗？'
        }).catch(err => err)

        if (succ && succ.confirm) {
          // 用户确认了退出登录的操作
          // 需要清空 vuex 中的 userinfo，token 和 address
          this.updateUserInfo({})
          this.updateToken('')
          this.updateAddress({})
        }
      }
    }
  }
</script>

<style lang="scss">
  .my-userinfo-container {
    height: 100%;
    background-color: #f4f4f4;

    .top-box {
      height: 400rpx;
      background-color: #f09939;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .avatar {
        width: 90px;
        height: 90px;
        border-radius: 45px;
        border: 2px solid #fff;
        box-shadow: 0 1px 5px black;
      }

      .nickname {
        font-size: 16px;
        color: white;
        margin-top: 10px;
        font-weight: bold;
      }
    }
  }

  .panel-list {
    padding: 0 10px;
    position: relative;
    top: -10px;

    .panel {
      background-color: white;
      border-radius: 3px;
      margin-bottom: 8px;

      .panel-list-item {
        height: 45px;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid #efefef;
      }
    }
  }
</style>
