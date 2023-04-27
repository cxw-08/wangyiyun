<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {getBanner} from '@/request/api/home'
import {onMounted,reactive} from 'vue'
export default {
  setup() {
    const state =reactive({
      images:[]
    }) 
    onMounted(async ()=>{
      let res = await getBanner();
      state.images = res.data.banners
    })
    return { state };
  },
}
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    padding:0,.2rem;
   .van-swipe-item {
      img {
        width: 100%;
        height: 3rem;
        border-radius: 5%;
        padding: 0 .2rem;
      }
    }
    .van-swipe__indicator--active{
      background-color: #9B0909;
    }
  }
}
</style>