<template>
  <div class="footerMusic">
    <div class="footerLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="">
      <div>
        <p class="songContent">{{ playList[playListIndex].name }}<span class="auther"> - {{ playList[playListIndex].ar[0].name }}</span></p>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-play1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-play1"></use>
      </svg>
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['playList','playListIndex'])
  }

}
</script>

<style lang="less" scoped>
.footerMusic {
  padding:.2rem;
  border-top:1px solid #f0e9e9;
  width: 100%;
  height: 1.2rem;
  background-color: #fff;
  position:fixed;
  bottom:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footerLeft {
    width: 75%;
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
      width: 4rem;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
      font-size: 0.28rem;
      // color: #b4afaf;
      .auther {
        // white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
        // font-size: 0.28rem;
        color: #b4afaf;
      }
    }
  }
}

</style>