<template>
  <div class="musicList">
    <div class="top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" :show-indicators="false" class="swipe">
        <van-swipe-item v-for="item in state.musicList" :key="item.id" class="swipe-item">
          <img :src="item.picUrl" alt="">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
            </svg>
            {{ item.playCount }}
          </span>
          <span>{{ item.name }}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from '@/request/api/home';
import { reactive,onMounted } from 'vue';
export default {
  setup() {
    const state =reactive({
      musicList:[]
    }) 
    onMounted(async ()=>{
      let res = await getMusicList();
      state.musicList = res.data.result
      console.log(state.musicList)
    })
    return { state };
  },

}
</script>

<style lang="less" scoped>
.musicList {
  width:100%;
  height: 4rem;
  // background-color: pink;
  .top {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    // background-color: skyblue;
    .title {
      font-size: .36rem;
      font-weight: 700;
    }
    .more {
      padding: 0 0.1rem;
      font-size: 0.26rem;
      border:1px solid #ccc;
      border-radius: .3rem;
      line-height: 0.6rem;
    }

  }
  .musicContent {
    width:100%;
    height: 3.4rem;
    .swipe {
      height: 100%;
      display: flex;
      .swipe-item {
        img {
          width: 100%;
        }
      }
    }

  }
}
</style>