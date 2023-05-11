<template>
  <div class="detailTop">
    <img :src="playList.coverImgUrl" alt="" class="bgImg">
    <div class="left">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo1"></use>
      </svg>
    </div>
  </div>
  <div class="content">
    <div class="cover">
      <img :src="playList.coverImgUrl" alt="">
      <span class="playCount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-z"></use>
        </svg>
        {{ handleCount(playList.playCount) }}
      </span>
    </div>
    <div class="rightContent">
      <h3 class="playlist_name">
        {{ playList.name }}
      </h3>
      <div class="creator" v-if="playList.creator">
        <img :src="playList.creator.backgroundUrl" alt="">
        <span class="creator_name">{{ playList.creator.nickname }}</span>
        <span class="guanzhu">+ 关注</span>
      </div>
    </div>
    <p class="description">{{ playList.description }}</p>
  </div>
  <div class="operate">
      <div class="operate-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuanfa"></use>
        </svg>
        {{ handleCount(playList.shareCount) }}
      </div>
      <div class="operate-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoxi-zhihui"></use>
        </svg>
        {{ handleCount(playList.commentCount) }}
      </div>
      <div class="operate-item" :class="state.isTrack ? '' : 'active'" @click="handleTrack()">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang1"></use>
        </svg>
        {{ handleCount(playList.subscribedCount) }}
      </div>
  </div>
</template>

<script>
import {reactive,toRef} from 'vue'
export default {
  setup(props){
    // if((props.playList.creator = '')){
    //   props.playList.creator=JSON.parse(sessionStorage.getItem().playList).creator
    // }
    const state = reactive({
      isTrack:false
    })
    const handleCount = (num)=>{
      if(num> 100000000){
        return (num/10000000).toFixed(1)+'亿'
      }else if(num > 10000){
        return (num/10000).toFixed(1) + '万'
      }else {
        return num
      }}
    
    let isTrack = toRef(state, 'isTrack')
    let handleTrack = () => {
      // 收藏这部分设计到时候要考虑登录情况
      //。。。
      isTrack.value = !isTrack.value
      // console.log(state.isTrack)
    }
    // console.log(props)
    return {handleCount ,state,handleTrack};
  },
  props:['playList']

}
</script>

<style lang="less" scoped>
.detailTop {
  // padding:.2rem;
  // background-color: gray;
  width:100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:relative;
  .bgImg {
    width: 100%;
    height: 8rem;
    position: absolute;
    z-index:-1;
    filter:blur(.5rem);
  }
  .left ,.right{
    padding: 0.2rem;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 0.2rem;
      font-size:0.4rem;
      color:#fff;
    }
    .icon {
      width: 2em; height: 2em;
    }

  }
}
.content {
  width:100%;
  display: flex;
  // height: 400px;
  // background-color: pink;
  justify-content: flex-start;
  flex-wrap:wrap;
  .cover {
    margin-left: .4rem;
    width:2.4rem;
    height: 2.4rem;
    position:relative;
    img{
      width: 100%;
      height: 100%;
      border-radius: .2rem;
    }
    .playCount {
      font-size: 0.24rem;
      color: #fff;
      position:absolute;
      right:.1rem;
      line-height: 0.6rem;
      .icon {
        vertical-align: -0.14rem;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
  .rightContent {
    height: 2.5rem;
    margin-left: .4rem;
    .playlist_name {
      width: 4rem;
      color:#fff;
    }
    .creator {
      margin-top:.2rem;
      height: 0.8rem;
      color:#eae1e1;
      img {
        width: .4rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        vertical-align: middle;
      }
      span {
        font-size: .24rem;
        margin-left:0.1rem;
      }
      .creator_name {
        font-weight: 700;
        line-height: 0.8rem; 
      }
      .guanzhu {
        padding-right:0.08rem;
        line-height: .4rem;
        text-align: center;
        display: inline-block;
        width: .8rem;
        height: .4rem;
        background-color: rgba(255,255,255,0.3);
        border-radius: .2rem;
        vertical-align: middle;
      }
    }
  }
  .description {
    margin-top:0.1rem;
    margin-left: .4rem;
    color:#eae1e1;
    font-size:0.26rem;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  }
}
.operate {
  margin-top:0.2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .operate-item {
    .icon {
      margin-right: 0.1rem;
      width: .44rem; height: .44rem;
      vertical-align: -0.1rem;
      overflow: hidden;
    }
    width: 1.9rem;
    height: 0.8rem;
    background-color: rgba(255,255,255,0.2);
    border-radius: 0.4rem;
    line-height: 0.8rem;
    text-align: center;
    color:#fff;
    font-size: .28rem;
  }
  .active {
    background-color:#9B0909;
  }
}

</style>