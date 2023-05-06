<template>
  <div class="footerMusic">
    <div class="footerLeft">
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
  <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `"></audio>
</template>

<script>
import {useItemStore} from '@/store/index.js'
import {computed, onMounted, reactive,ref} from 'vue'
export default {
  setup(){
    const itemStore = useItemStore()
    //播放
    const audio = ref(null)
    const playList = computed(()=> itemStore.playList)
    const playListIndex = computed(()=> itemStore.playListIndex)
    const isPlay = computed(()=> itemStore.isPlay)

    const play = ()=>{
      if(!itemStore.isPlay){
        audio.value.play()
        itemStore.updateIsPlay(true)
        // console.log('bofang')
      }else {
        // console.log('pause')
        audio.value.pause()
        itemStore.updateIsPlay(false)
      }
    }
    onMounted(()=>{
      console.log(audio.value.autoplay)
    })

    return {play ,audio,playListIndex,playList,isPlay};
  },

}
</script>

<style lang="less" scoped>
.footerMusic {
  padding:.2rem;
  border-top:1px solid #f0e9e9;
  width: 100%;
  height: 1.2rem;
  background-color: #fff;
  // position:relative;
  // bottom:0;
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