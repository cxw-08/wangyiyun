<template>
  <div class="card">
    <img src="@/asset/images/disc_default.png" alt="">
    <h3 class="username">cxw-08</h3>
    <div class="info">
      <span>12关注</span>
      <span>|</span>
      <span>1粉丝</span>
      <span>|</span>
      <span>lv.5</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.card {
  margin-top:100px;
  width: 95%;
  height: 1.8rem;
  border-radius: .4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fff;
  img {
    position: absolute;
    top:-.7rem;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 0.7rem;
  }
  .username {
    position: absolute;
    top:.8rem;
  }
  .info {
    width: 2.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top:1.3rem;
    font-size: .28rem;
    color:#a8a5a5;
  }
}
</style>