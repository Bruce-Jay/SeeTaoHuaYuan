export default {
  // 开启命名空间
  namespaced: true,

  // 数据
  state: () => ({
    address: {},
    // 登录成功之后的 token 字符串
    token: uni.getStorageSync('token') || '',
    // 用户的信息对象
    userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}')
  }),

  // 方法
  mutations: {
    // 更新收货地址
    updateAddress(state, address) {
      state.address = address
    },

    // 更新用户数据
    updateUserInfo(state, userinfo) {
      state.userinfo = userinfo

      this.commit('m_user/saveUserInfoToStorage')
    },
    // 将用户数据持久化存入到本地中
    saveUserInfoToStorage(state) {
      uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
    },

    // 更新 token 字符串
    updateToken(state, token) {
      state.token = token
      this.commit('m_user/saveTokenToStorage')
    },
    saveTokenToStorage(state) {
      uni.setStorageSync('token', state.token)
    }
  },

  // 指向对象
}
