<template>
  <div class="footerMusic">
    <div class="footerLeft" @click="updatePopShow">
      <img :src="playList[playListIndex].al.picUrl" alt="">
      <div>
        <p class="songContent"><span class="songName">{{ playList[playListIndex].name }}</span><span class="auther"> - {{ playList[playListIndex].ar[0].name }}</span></p>
      </div>
    </div>
    <div class="footerRight">
      <svg v-if="!isPlay" class="icon" aria-hidden="true" @click="play" >
        <use xlink:href="#icon-bofang3"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-yuyinzhengzaibofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlist2"></use>
      </svg>
    </div>
    
  </div>
  <audio ref="audio" :src="musicUrl"></audio>
  <van-popup
    v-model:show="songDetailShow"
    position="bottom"
    :style="{ height: '100%' ,width:'100%'}"
  >
    <song-detail @play="play" @durationChange="durationChange"></song-detail>

  </van-popup>
</template>

<script>
import SongDetail from '@/components/item/SongDetail.vue'
import {useItemStore} from '@/store/index.js'
import {computed, onMounted, onUpdated, reactive,ref, watch} from 'vue'
export default {
  setup(){
    const itemStore = useItemStore()
    //播放
    const audio = ref(null)
    let timer = ref(0)
    const playList = computed(()=> itemStore.playList)
    const playListIndex = computed(()=> itemStore.playListIndex)
    const isPlay = computed(()=> itemStore.isPlay)
    const songDetailShow = computed(()=> itemStore.songDetailShow)
    const musicUrl = computed(()=> itemStore.musicUrl)

    const play = ()=>{
      if(!itemStore.isPlay){
        audio.value.play()
        itemStore.updateIsPlay(true)
        // console.log('bofang')
        // 开启一个定时器
        timer = setInterval(()=>{
          itemStore.updateCurrentTime(audio.value.currentTime)
        },1000)
      }else {
        clearInterval(timer)
        // console.log('pause')
        audio.value.pause()
        itemStore.updateIsPlay(false)
      }
    }
    const updatePopShow = ()=>{
      itemStore.updateSongDetailShow()
    }
    onMounted(()=>{
      // console.log(audio.value.autoplay)
      // console.log(playList[playListIndex].id)
      itemStore.getLyric(itemStore.playList[itemStore.playListIndex].id)
    })
    onUpdated(()=>{
      itemStore.getLyric(itemStore.playList[itemStore.playListIndex].id)
    })
    watch([playListIndex,playList],()=>{
      itemStore.updateDuration(audio.value.duration)
      audio.value.autoplay = true
      if(timer){
        clearInterval(timer)
      }
      timer = setInterval(()=>{
        itemStore.updateCurrentTime(audio.value.currentTime)
      },1000)
      if(!itemStore.isPlay){
        itemStore.updateIsPlay(true)
      }
      console.log('index发生了改变')
    })
    const durationChange = ()=>{
      itemStore.updateDuration(audio.value.duration)
    }

    return {play ,audio,playListIndex,playList,isPlay,songDetailShow,updatePopShow,durationChange,musicUrl};
  },
  components:{
    SongDetail
  }

}
</script>

<style lang="less" scoped>
.footerMusic {
  padding:.2rem;
  border-top:1px solid #f0e9e9;
  width: 100%;
  height: 1rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footerLeft {
    width: 78%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: .8remm;
      height: .8rem;
      border-radius: 0.4rem;
    }
    .songContent {
      width: 4.5rem;
      font-size: 0.28rem;
      // color: #b4afaf;
      white-space:nowrap;
      color: #b4afaf;
      text-overflow:ellipsis;
      overflow:hidden;
      .songName {
        color: black;
      }
    }
  }
  .footerRight {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 100%;
  }
}

</style>