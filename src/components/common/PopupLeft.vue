<template>
  <div class="content">
    <div class="top">
      <div class="top-left">
        <img src="@/asset/images/disc_default.png" alt="">
        <span>请登录12333</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jinru"></use>
        </svg>
      </div>
      <div class="top-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-saoma"></use>
        </svg>
      </div>
    </div>

    <div class="card first">
      <van-cell-group>
        <van-cell  title='我的消息' is-link icon="envelop-o"/>
        <van-cell  title='云贝中心' value="签到" is-link icon="comment-o"/>
        <van-cell  title='创作者中心' is-link icon="flower-o"/>

      </van-cell-group>
    </div>

    <div class="card">
      <van-cell-group>
        <van-cell  title='设置' is-link icon="setting-o"/>
        <van-cell  title='深色模式' icon="envelop-o"/>
        <van-cell  title='定时关闭' is-link icon="clock-o"/>
        <van-cell  title='音乐黑名单' is-link icon="close"/>
        <van-cell  title='青少年模式' value="未开启" is-link icon="friends-o"/>
      </van-cell-group>
    </div>
    <div class="card">
      <van-cell-group>
        <van-cell  title='我的订单' is-link icon="shopping-cart-o"/>
        <van-cell  title='优惠券' icon="gift-o"/>
        <van-cell  title='我的客服' is-link icon="manager-o"/>
        <van-cell  title='个人信息与隐私保护' is-link icon="envelop-o"/>
        <van-cell  title='关于' is-link icon="warning-o"/>
      </van-cell-group>
    </div>
    <div class="close">
      退出登录/关闭
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.content {
  background-color: #f4f3f3;
  // overflow: hidden;
  height: 100%;
  .top {
    position: fixed;
    top:0;
    padding: .1rem;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: #ccc;
    background-color: #f4f3f3;
    .top-left {
      display: flex;
      img {
        width: .5rem;
        height: .5rem;
        border-radius: .25rem;
      }
      span {
        padding-left:.1rem;
        line-height: .5rem;
      }
    }
  }
  .card {
    margin: .2rem .3rem;
    border:1px solid #ccc;
    border-radius: .4rem;
  }
  .first {
    margin-top:1rem;
  }
  .close {
    margin-left: .2rem;
    background-color: #fff;
    width: 4.8rem;
    height: .6rem;
    border-radius: .2rem;
    color: rgb(230, 61, 61);
    text-align: center;
    line-height: .6rem;
  }
}
</style>