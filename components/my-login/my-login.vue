<template>
  <view class="login-container">
    <uni-icons type="contact-filled" size="100" color="#afafaf"></uni-icons>
    <button type="primary" class="btn-login" open-type="getUserInfo" @click="myLoginHandler">一键登录</button>
    <text class="tips-text">登录后尽享更多权益</text>
  </view>
</template>

<script>
  import {
    mapMutations
  } from 'vuex';
  export default {
    name: "my-login",
    data() {
      return {
        userInfo: {}
      };
    },
    methods: {
      // 调用 mapMutations 辅助方法，把 m_user 模块中的 updateUserInfo 映射到当前组件中使用
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken']),

      // 以下的 loginHandler 是利用了 getUserProfile 方法，但是现在不能用了，所以现在模拟一个新的方法 myLoginHandler
      // 在用户授权之后，获取用户的基本信息
      loginHandler() {
        uni.getUserProfile({
          desc: '仅获取本人账号信息',
          success: (res) => {
            console.log(res)
            this.updateUserInfo(res.userInfo)

            // 获取登录成功后的 token 字符串
            this.getToken(res)
          }
        })
      },
      async getToken(info) {
        const [err, res] = await uni.login({

        }).catch(err => err)

        // console.log(res);
        // res 包含两部分，一个是 err，一个是 code。code 是我们成功登录的凭证

        if (err || res.errMsg !== 'login:ok') return uni.$showMsg('登录失败！')
        // console.log(err);
        // console.log(res.code);
        // console.log(info);

        // 准备参数对象
        const query = {
          code: res.code,
          encryptedData: info.encryptedData,
          iv: info.iv,
          rawData: info.rawData,
          signature: info.signature
        }

        const {
          data: loginResult
        } = await uni.$http.post('/api/public/v1/users/wxlogin', query)

        console.log(loginResult);

        if (loginResult.meta.status === 400) uni.$showMsg('登录成功')

        // 把 token 保存到 vuex 中

        console.log('bidenfuckamericacreatedjs');
        this.updateToken('bidenfuckamericacreatedjs')
      },

      // 自己定义的登录函数，数据计划存储在服务器的数据库中
      myLoginHandler() {
        const token = 'bidenfuckamericacreatedjs'
        if (token) uni.$showMsg('登录成功')
        this.updateToken(token)
      },

      // 生成以 biden 开头的 + 八位随机小写字母的 token
      generateToken() {
        // 母串
        var mStr = "qwertyuiopasdfghjklzxcvbnm"
        var mStr_len = mStr.length;
        var tmp = "biden"
        var timestamp = new Date().getTime()
        for (var i = 0; i < 8; i++) {
          tmp += mStr.charAt(Math.ceil(Math.random() * 1000000) % mStr_len)
        }
        return tmp
      }

    }
  }
</script>

<style lang="scss">
  .login-container {
    height: 750rpx;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::after {
      content: ' ';
      background-color: white;
      display: block;
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 100%;
      transform: translateY(50%);
    }

    .btn-login {
      width: 90%;
      border-radius: 100px;
      margin: 15px 0;
      background-color: #c00000;
    }

    .tips-text {
      font-size: 12px;
      color: gray;
    }
  }
</style>
