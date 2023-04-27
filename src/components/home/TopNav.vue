<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <div class="topSearch">
      <van-cell-group inset>
        <van-field v-model="value" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
      </van-cell-group>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
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
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  // background-color: gray;
}
</style>
