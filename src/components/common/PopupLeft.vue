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

    <div class="card">
      <van-cell-group>
        <van-cell  title='我的消息' value="内容"  is-link/>
        <van-cell  title='云贝中心' value="签到"  is-link/>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.content {

  .top {
    padding: .1rem;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: #ccc;
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
}
</style>