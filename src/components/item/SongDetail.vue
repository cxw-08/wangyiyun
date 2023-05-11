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
    <div class="songContent" v-show="!isLyricShow" @click="isLyricShow = true">
      <img src="@/asset/images/needle-ab.png" alt="" class="img_needle" :class="{img_needle_active:isPlay}">
      <img src="@/asset/images/disc-plus.png" alt="" class="img_cd">
      <img :src="playList[playListIndex].al.picUrl" alt="" class="img_al" :class="{img_al_active:isPlay,img_al_paused:!isPlay}">
    </div>
    <div class="songLyric" ref="musicLyric" v-show="isLyricShow" @click="isLyricShow = false">
      <p v-for="item in lyricList" :key="item" :class="{active:(currentTime * 1000 >=  item.time && currentTime * 1000 <= item.nextTime)}">{{ item.lrc }}</p>
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
      <div class="footerContent">
        <input type="range" min="0" :max="duration" v-model="currentTime" step="0.05" class="range">
      </div>
      <div class="footer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cxw_music85-copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
          <use xlink:href="#icon-cxw_music83-copy"></use>
        </svg>
        <svg v-show='!isPlay' class="icon big" aria-hidden="true" @click="play">
          <use xlink:href="#icon-bofang3" @click="play"></use>
        </svg>
        <svg v-show='isPlay' class="icon big" aria-hidden="true" @click="play">
          <use xlink:href="#icon-yuyinzhengzaibofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="goPlay(1)" >
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
import { onMounted ,computed,ref,watch} from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
  setup(props){
    let isLyricShow = ref(false)
    const musicLyric = ref(null)
    const itemStore = useItemStore()
    const playList = computed(()=> itemStore.playList)
    const playListIndex = computed(()=> itemStore.playListIndex)
    const isPlay = computed(()=> itemStore.isPlay)
    const currentTime = computed(()=> itemStore.currentTime)
    const duration = computed(()=> itemStore.duration)
    const lyricList = computed(()=>{
      let arr = itemStore.lyricList.lyric.split(/\n/).map((item,i)=>{
        let min = item.slice(1,3)
        let sec = item.slice(4,6)
        let mill=item.slice(item.indexOf('.')+1,item.indexOf(']'))
        let lrc = item.slice(11,item.length)
        let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 +parseInt(mill)
        // console.log(min,sec,mill,lrc)
        return {time,lrc}
      })
      arr.pop()
      arr.forEach((item,i) => {
        if(i === arr.length -1){
          item.nextTime = 1000000
        }else {
          item.nextTime = arr[i+1].time
        }
      });
      console.log('arr',arr)
      return arr
    })
    onMounted(()=>{
      // console.log('打开歌曲详情')
      props.durationChange()
      console.log('propsss',props)
      console.log('playlist::::::',playList)
      // console.log('lyric',itemStore.lyricList.lyric.split(/\n/))

    })
    watch(currentTime,(value)=>{
      let p = document.querySelector('p.active')
      if(p && p.offsetTop > 280){
        // console.log('refffff::',musicLyric.value)
        musicLyric.value.scrollTop = p.offsetTop -280
        console.log('offetTop:::',p.offsetTop)
      }
      if(value >= itemStore.duration){
        goPlay(1)
      }
    })
    const closePopup = ()=>{
      isLyricShow.value = false
      // console.log('关闭')
      console.log('isLyricShow',isLyricShow)
      itemStore.updateSongDetailShow()
    }

    const goPlay = (num)=>{
      let index = itemStore.playListIndex + num
      if(index < 0){
        index = itemStore.playList.length -1
      }else if (index === itemStore.playList.length){
        index = 0
      }
      itemStore.updatePlayListIndex(index)
    }
    return {
      playList,playListIndex,closePopup,isPlay,isLyricShow,lyricList,currentTime,musicLyric,goPlay,duration
    }
  },
  props:['play','durationChange'],
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
  .songLyric {
    margin-top:0.3rem;
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    p {
      color:#e1dddd;
      margin-bottom: .3rem;
    }
    .active {
      color: #fff;
      font-size:.4rem;
    }
  }
  .songFooter {
    width: 100%;
    position: absolute;
    bottom:0;
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
    .footerContent {
      .range {
        width: 100%;
        height: .02rem;
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