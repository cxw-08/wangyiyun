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
          background="#f3f0f0"
          ref="search"
          v-model="searchKey"
          shape="round"
          placeholder="请输入搜索关键词"
          />
      </div>
      <div class="topRight" @click="handleSearch">
        搜索
      </div>
    </div>
    <div class="searchHistory">
      <div class="titile">
        <span class="left">搜索历史</span>
        <svg class="icon" aria-hidden="true" @click="handleSearchHistory">
          <use xlink:href="#icon-ashbin"></use>
        </svg>
      </div>
      <div class="historyContent">
        <span v-for="item in searchHistoryList" :key="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
const searchKey = ref()
const search = ref()
const searchHistoryList = reactive([])
onMounted(()=>{
  search.value.focus()
  // console.log(JSON.parse(localStorage.getItem('searchHistoryList')))
  if(JSON.parse(localStorage.getItem('searchHistoryList'))){
    searchHistoryList.push(...JSON.parse(localStorage.getItem('searchHistoryList')))
  }
  
})

const handleSearch = ()=>{
  console.log(searchKey.value)
  if(searchKey.value){
    let index = searchHistoryList.indexOf(searchKey.value)
    if( index === -1){
      searchHistoryList.unshift(searchKey.value)
    }else {
      searchHistoryList.splice(index,1)
      searchHistoryList.unshift(searchKey.value)
    }
    //固定长度设置
    if(searchHistoryList.length > 6){
      console.log('固定长度')
      searchHistoryList.splice(searchHistoryList.length-1,1)
    }
    localStorage.setItem('searchHistoryList',JSON.stringify(searchHistoryList))
  }
}
const handleSearchHistory = ()=>{
  localStorage.removeItem('searchHistoryList')
  searchHistoryList.length = 0
  // localStorage.setItem('searchHistoryList',JSON.stringify(searchHistoryList))
}
</script>

<style lang="less" scoped>
.top {
  background-color: #f3f0f0;
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
      padding:.2rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      span {
        margin: .1rem;
        display: inline-block;
        padding:.2rem;
        background-color:#fff;
        color: #726e6e;
        height: .56rem;
        border-radius: .28rem;
        font-size:.24rem;
        line-height: .16rem;
      }
    }
  }
}

</style>