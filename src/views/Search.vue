<template>
  <div class="top">
    <div class="searchTop">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
      </div>
      <div class="searchContent">
        <van-search
          ref="search"
          v-model="searchKey"
          shape="round"
          placeholder="请输入搜索关键词"
          />
      </div>
      <div class="topRight">
        搜索
      </div>
    </div>
    <div class="searchHistory">
      <div class="titile">
        <span class="left">搜索历史</span>
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-ashbin"></use>
        </svg>
      </div>
      <div class="historyContent">
        <span>周杰伦</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const searchKey = ref()
const search = ref()
onMounted(()=>{
  search.value.focus()
})
</script>

<style lang="less" scoped>
.top {
  background-color: #f1ecec;
  .searchTop {
    width: 100%;
    height: 1rem;
    padding: .3rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    .searchContent {
    width: 5rem;
    }
    .topRight {
      color: #726e6e;
      cursor: pointer;
    }
  }
  .searchHistory {
    margin-top:10px;
    .titile {
      padding: 5px;
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }
    .historyContent {
      padding:10px;
      div {
        padding:10px;
        background-color:#fff;
        color: #726e6e;
        height: 28px;
        border-radius: 10px;
        font-size:22px;
        line-height: 28px;
      }
    }
  }
}

</style>