<template>
  <view>
    <swiper class="swiper-container" indicator-dots indicator-color="white" indicator-active-color="gray"
      autoplay="true" interval="5000" circular="true">
      <swiper-item>
        <view class="item">
          <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/swiper-1-1.png" mode="widthFix"
            class="item-image" />
        </view>
      </swiper-item>
      <swiper-item>
        <view class="item">
          <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/swiper-2-1.png" mode="widthFix"
            class="item-image" />
        </view>
      </swiper-item>
      <swiper-item>
        <view class="item">
          <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/swiper-3-1.png" mode="widthFix"
            class="item-image" />
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    name: "swipers",
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 400rpx;

    .item {
      height: 100%;
      border-radius: 15rpx;

      .item-image {
        width: 100%;
      }
    }
  }
</style>
