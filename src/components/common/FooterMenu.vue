<template>
  <div class="footerMenu">
    <router-link  :to="{path:'/'}">
      <div class="footer-item"  @click="activeIndex = 0">
      <svg class="icon" aria-hidden="true" :class="{ active: activeIndex === 0 }">
          <use xlink:href="#icon-faxian"></use>
      </svg>
      <span>
        发现
      </span>
    </div>
    </router-link>
    <router-link :to="{path:'/follow'}">
      <div class="footer-item"  @click="activeIndex = 1">
      <svg class="icon" aria-hidden="true" :class="{ active: activeIndex === 1 }">
          <use xlink:href="#icon-cainiwenti"></use>
      </svg>
      <span>
        播客
      </span>
    </div>
    </router-link>
    <router-link :to="{path:'/community'}">
      <div class="footer-item" @click="activeIndex = 2">
      <svg class="icon" aria-hidden="true" :class="{ active: activeIndex === 2 }">
          <use xlink:href="#icon-shequ"></use>
      </svg>
      <span>
        社区
      </span>
    </div>
    </router-link>
    <router-link :to="{path:'/profile'}">
      <div class="footer-item" @click="activeIndex = 3">
      <svg class="icon" aria-hidden="true" :class="{ active: activeIndex === 3 }" >
          <use xlink:href="#icon-yinle"></use>
      </svg>
      <span>
        我的
      </span>
    </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import 'animate.css';
const activeIndex = ref(0)
</script>

<style lang="less" scoped>
.footerMenu {
  width: 100%;
  height: 60px;
  // background-color: #fff;
  // position: relative;
  // bottom:0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top:1px solid #f0e9e9;
  .footer-item {
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .active{
      padding:4px;
      background-color:#e72424;
      border-radius: 12px;
      fill: #fff;
      width:25px;
      height: 25px;
    }
    span {
      font-size: 0.24rem;
      color: #b4afaf;
    }
  }
}

</style>