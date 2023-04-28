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
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-play1"></use>
            </svg>
            {{ handlePlayCount(item.playCount) }}
          </span>
          <span class="sheetname">{{ item.name }}</span>
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
    const handlePlayCount = (num)=>{
      if(num> 100000000){
        return (num/10000000).toFixed(1)+'亿'
      }else {
        return (num/10000).toFixed(1) + '万'
      }}
    onMounted(async ()=>{
      let res = await getMusicList();
      state.musicList = res.data.result
      console.log(state.musicList)
    })
    return { state ,handlePlayCount};
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
      .swipe-item {
        position: relative;
        margin-left:10px;
        img {
          border-radius: 20px;
          width: 100%;
          height:3rem;
        }
        .playCount {
          color: #fff;
          position:absolute;
          top:10px;
          right:10px;
        }

      }
    }

  }
}
</style>