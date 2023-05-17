<template>
  <div class="top-nav">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-fanhui"></use>
      </svg>
      <span class="title">手机号登录</span>
    </div>
</template>


<style lang="less" scoped>
.top-nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    .title {
      margin-left:.4rem;
      font-size: 18px;
    }
  }
</style>