<template>
  <div class="songList">
    <div class="songListTop">
      <div class="listLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <span>播放全部<span class="mini">({{ songList.length }})</span></span>
      </div>
      <div class="listRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu"></use>
        </svg>
      </div>
    </div>
    <div class="songListContent">
      <div class="item" v-for="(item,i) in songList" :key="i">
        <div class="itemLeft" @click="playMusic(i,item.id)">
          <span class="number">{{ i+1 }}</span>
          <div class="songName">
            <p>{{ item.name }}</p>
            <div class="authers">
              <span v-for="item1 in item.ar" :key="item1.id" class="mini">{{  item1.name}}</span>
            </div>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon" aria-hidden="true" v-if="item.mv">
            <use xlink:href="#icon-play1"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo2"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useItemStore } from '@/store'

export default {
  setup(props){
    // songList = reactive([])
    // console.log('props',props)
    const itemStore = useItemStore()
    const playMusic = (index,id)=>{
      // console.log(props.songList)
      itemStore.updatePlayList(props.songList)
      itemStore.updatePlayListIndex(index)
      itemStore.getMusicUrl(id)
    }
    

    return {playMusic}
  },
  props:['songList']

}
</script>

<style lang="less" scoped>
.songList {
  margin-top:.4rem;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: .4rem;
  border-top-right-radius: .4rem;
  .mini {
    font-size: 0.24rem;
    color:#b4afaf;
  }
  .songListTop {
    padding:.2rem;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listLeft {
      .icon {
        vertical-align: -0.1rem;
      }
      span {
        margin-left: .2rem;
      }
    }
    .listRight {
      .icon {
        margin-left:.4rem;
      }
    }

  }
  .songListContent {
    width: 100%;
    .item {
      padding: .2rem;
      width: 100%;
      height: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .number {
          text-align: center;
          width: 0.5rem;
          color: #b4afaf;
          font-size:0.32rem;
        }
        .songName {
          width: 5rem;
          margin-left: 0.2rem;
          p {
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          .authers {
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            color:#b4afaf;
          }
        }
      }
      .itemRight {
        .icon {
          margin-left: .1rem;
        }
      }
    }
  }
}

</style>