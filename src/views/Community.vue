<template>
  <div>
    <TopNav>
      <template v-slot:middle>
        <div class="nav_bar">
          <router-link to="/community/guangchang"><div class="item">
            广场
          </div></router-link>
          <router-link to="/community/video">
            <div class="item">
            视频
            </div>
          </router-link>
         <router-link to="/community/room">
            <div class="item">
              歌房
            </div>
         </router-link>
          <!-- <span class="underline"></span> -->
        </div>
      </template>
      <template v-slot:right> 
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianchongxing-"></use>
          </svg>
      </template>
   </TopNav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import TopNav from '@/components/common/TopNav.vue';
</script>

<style lang="less">
.nav_bar {
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .active {
    border-bottom: 3px solid #d72e2e;
  }
}
</style>