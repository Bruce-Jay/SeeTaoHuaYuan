<template>
  <view>
    <view class="big-box">
      <view class="box-item">
        <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/hiking.png" mode=""
          class="item-image" />
        <text class="item-text">休闲游</text>
      </view>
      <view class="box-item">
        <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/couple.png" mode=""
          class="item-image" />
        <text class="item-text">跟团游</text>
      </view>
      <view class="box-item">
        <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/pagoda.png" mode=""
          class="item-image" />
        <text class="item-text">景点发现</text>
      </view>
      <view class="box-item">
        <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/first-aid-kit.png" mode=""
          class="item-image" />
        <text class="item-text">行前准备</text>
      </view>
      <view class="box-item">
        <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/placeholder.png" mode=""
          class="item-image" />
        <text class="item-text">附近</text>
      </view>
      <view class="box-item">
        <image src="https://seetaohuayuan-1313090931.cos.ap-shanghai.myqcloud.com/img/money-bag.png" mode=""
          class="item-image" />
        <text class="item-text">天天爆红包</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "grids",
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .big-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 12rpx 0;
    box-shadow: 0rpx 0rpx 10rpx 15rpx rgb(184, 182, 182);
    border-left: 1rpx solid #aaa;
    border-top: 1rpx solid #aaa;

    .box-item {
      height: 200rpx;
      width: 33.33%;
      border: 1rpx solid #aaa;
      border-left: none;
      border-top: none;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .item-image {
        width: 90rpx;
        height: 90rpx;
      }

      .item-text {
        margin-top: 10rpx;
        font-size: 28rpx;
      }
    }
  }
</style>
