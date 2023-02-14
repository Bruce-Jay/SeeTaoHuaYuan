<template>
  <view>
    <swipers></swipers>

    <grids></grids>

    <view class="article-container">
      <view class="article-item" v-for="(item, i) in articleList" :key="i" @click="articleClickHandler(item)">
        <!-- 图片，在最左边 -->
        <image :src="item.picUrl" mode="widthFix" class="article-image"></image>
        <view class="article-text">
          <!-- 文章标题 -->
          <view class="article-title">{{item.title}}</view>
          <!-- 文章简介 -->
          <view class="article-brief">{{item.brief}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        articleList: [{
          id: 1,
          picUrl: "https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/cover-3.png",
          title: "三月樱飘，带上父母感受春天",
          brief: "绿杨烟外晓寒轻，红杏枝头春意闹，春的气息正在悄悄渗入上海的每个角落。樱花的花语是生命、幸福、希望。它很适合和自己重要的人一同赏玩用来表达自己内心的爱意，也代表着保留你们之间最美好的回忆。",
          aUrl: "https://mp.weixin.qq.com/s/SbdejQHSyHoZb1UwOT84qQ"
        }, {
          id: 2,
          picUrl: "https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/cover-2.png",
          title: "老年人出游注意事项来袭！！",
          brief: "2023年的春节，你有出去旅游吗？据统计，今年春节假期全国国内旅游出游3.08亿人次，国内旅游收入达3758.43亿元。",
          aUrl: "https://mp.weixin.qq.com/s/1QMBeKqJGUN9PvYaxbFzxw"
        }, {
          id: 3,
          picUrl: "https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/cover-1.png",
          title: "任何人错过这个公众号我都会伤心",
          brief: "大家好，这里是【五人成行 看见桃花源】。我们，顾名思义，是带您一起探索桃花源的地方。先给大家介绍一下我们的团队吧，我们是一支大学生创业队伍，团队里面五位都是来自华东师范大学2020级的学生，希望在这里能跟大家一起分享一些旅游的相关素材。",
          aUrl: "https://mp.weixin.qq.com/s/9CounxZQELzjLBIKzAhedw",
        }]
      };
    },
    methods: {
      articleClickHandler(item) {
        uni.navigateTo(item.aUrl)
      }
    }
  }
</script>

<style lang="scss">
  .article-container {
    .article-item {
      height: 150px;
      margin: 5rpx 5rpx;
      border-radius: 8rpx;
      border: 2px solid black;
      box-shadow: 0rpx 0rpx 10rpx 10rpx rgba(184, 184, 184, 1);
      display: flex;
      justify-content: space-around;


      .article-image {
        height: 80px;
        width: 80px;
        border-radius: 8rpx;
        margin-top: 35px;
      }

      .article-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 10px 0;
        width: 250px;

        .article-title {
          font-weight: bold;
          font-size: 16px;
          height: 20px;
          margin: 10px 0;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .article-brief {
          font-size: 13px;
          color: #ccc;
          height: 90px;
          margin: 10px 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

    }
  }
</style>
