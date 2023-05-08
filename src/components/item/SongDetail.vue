<template>
  <div class="songDetail">
    <img :src="playList[playListIndex].al.picUrl" alt="" class="BgImg">
    <div class="songTop">
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="closePopup">
          <use xlink:href="#icon-arrow-down"></use>
        </svg>
      </div>
      <div class="center">
        <Vue3Marquee>
          {{ playList[playListIndex].name }}
        </Vue3Marquee>
        <span class="auther">{{ playList[playListIndex].ar[0].name }}</span>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-huatong"></use>
        </svg>
      </div>
    </div>
    <div class="songContent">
      <img src="@/asset/images/needle-ab.png" alt="" class="img_needle" :class="{img_needle_active:isPlay}">
      <img src="@/asset/images/disc-plus.png" alt="" class="img_cd">
      <img :src="playList[playListIndex].al.picUrl" alt="" class="img_al" :class="{img_al_active:isPlay,img_al_paused:!isPlay}">
    </div>
    <div class="songFooter">
      <div class="footerTop">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cxw_music89-copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai1-copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jianyi-copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jianyi-copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo1"></use>
        </svg>
      </div>
      <div class="footerContent"></div>
      <div class="footer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cxw_music85-copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cxw_music83-copy"></use>
        </svg>
        <svg v-if='!isPlay' class="icon big" aria-hidden="true" @click="play">
          <use xlink:href="#icon-bofang3" @click="play"></use>
        </svg>
        <svg v-else class="icon big" aria-hidden="true" @click="play">
          <use xlink:href="#icon-yuyinzhengzaibofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cxw_music82-copy"></use>
        </svg>
        <svg class="icon mini" aria-hidden="true">
          <use xlink:href="#icon-gf-playlist2-copy"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {useItemStore} from '@/store/index.js'
import { onMounted ,computed} from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
  setup(){
    const itemStore = useItemStore()
    const playList = computed(()=> itemStore.playList)
    const playListIndex = computed(()=> itemStore.playListIndex)
    const isPlay = computed(()=> itemStore.isPlay)
    onMounted(()=>{
      console.log('playlist::::::',playList)
    })
    const closePopup = ()=>{
      itemStore.updateSongDetailShow()
    }
    return {
      playList,playListIndex,closePopup,isPlay
    }
  },
  props:['play'],
  components:{
    Vue3Marquee
  }
}
</script>

<style lang="less" scoped>
.songDetail {
  width: 100%;
  height: 100%;
  position: relative;
  .BgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index:-1;
    filter:blur(.9rem);
  }
  .songTop {
    padding: .2rem;
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .center {
      width: 50%;
      color:#fff;
      text-align: center;
      font-size:0.34rem;
      .auther{
        font-size: 0.28rem;
        color: #696565;
      }

    }
    .icon {
       fill: #fff;
    }
  }
  .songContent {
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img_needle {
      width: 2rem;
      height: 3.2rem;
      position:absolute;
      left:46%;
      transform-origin: 0 0;
      transform: rotate(-20deg);
      transition:all 2s;
    }
    .img_needle_active {
      transform: rotate(0deg);
    }
    .img_cd {
      width: 5rem;
      height: 5rem;
      position: absolute;
      bottom: 2.3rem;
      z-index:-1;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .img_al {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      position:absolute;
      bottom: 3.2rem;
      animation: rotate 10s linear infinite;
      // animation-play-state: paused;
    }
    .img_al_active {
      animation-play-state: running;
    }
    .img_al_paused {
      animation-play-state:paused;
    }
  }
  .songFooter {
    width: 100%;
    .footerTop {
      padding-left: .2rem;
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        width: .6rem;
        height: .6rem;
      }
    }
    .footer {
      padding-left: .2rem;
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        width: .7rem;
        height: .7rem;
      }
      .mini {
        width: .6rem;
        height: .6rem;
      }
      .big {
        width: .9rem;
        height: .9rem;
      }
    }
  }
}

</style>