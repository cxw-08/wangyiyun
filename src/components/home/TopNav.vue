<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <!-- @click="$router.push('/search')" -->
    <div class="topSearch" @click="$router.push('/search')" >
      <van-search
        v-model="value"
        shape="round"
        placeholder="请输入搜索关键词"
        />
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huatong"></use>
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
  // background-color: gray
  .topSearch {
    width: 5rem;
  }
}
</style>
