<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <!-- @click="$router.push('/search')" -->
   <slot name="middle"></slot>
    <div class="topRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const value = ref('');
    return { value };
  },
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
