<template>
  <div class="topNav">
    <div class="topLeft" @click="showSetting">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <!-- @click="$router.push('/search')" -->
   <slot name="middle"></slot>
    <div class="topRight">
      <slot name="right"></slot>
    </div>
    <Teleport to="body">
      <van-popup
        v-model:show="showLeftPopup"
        position="left"
        :style="{ width: '70%', height: '100%' }"
      >
      <PopupLeft></PopupLeft>
    </van-popup>
    </Teleport>
  </div>
</template>

<script setup>
import PopupLeft from './PopupLeft.vue'
import { ref } from "vue"
const showLeftPopup = ref(false)
const showSetting = ()=>{
  showLeftPopup.value = true
}
</script>

<style lang="less">
.topNav {
  position: fixed;
  top:0;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  // background-color: gray
  .topSearch {
    width: 5rem;
  }
  .topRight {
    .icon {
      vertical-align:-0.15em;
    }
  }
}
</style>
