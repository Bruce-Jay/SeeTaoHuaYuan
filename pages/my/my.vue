<template>
  <view>
    <view class="my-container">
      <!-- 如果 token 不存在，那就展示 user-login, 反之展示 user-info -->
      <my-login v-if="!token"></my-login>

      <my-userinfo v-else></my-userinfo>
    </view>
  </view>
</template>

<script>
  // import badgeMix from '@/mixins/tabbar-badge.js'
  // 从 vuex 中按需导入 mapState 辅助函数
  import {
    mapState
  } from 'vuex'

  export default {
    data() {
      return {

      };
    },
    computed: {
      // 从 m_user 模块中导入需要的 token 字符串
      ...mapState('m_user', ['token'])
    }
  }
</script>

<style lang="scss">
  page,
  .my-container {
    height: 100%;
  }
</style>
