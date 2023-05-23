<template>
  <div class="apply">
    <div class="item" v-for="item in applyList" :key="item">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <span>{{ item.name }}</span>
    </div>
  </div>
  <div class="liked">
    <div class="liked_left">
      <img src="@/asset/images/disc_default.png" alt="">
      <div class="info">
        <p>我喜欢的音乐</p>
        <span>100首</span>
      </div>
    </div>
    <div class="liked_right">
      心动模式
    </div>

  </div>
</template>

<script setup>
import {ref} from 'vue'
const applyList = ref([
  {name:'最近播放',icon:'#icon-bofang1'},
  {name:'本地下载',icon:'#icon-ziyuan'},
  {name:'云盘',icon:'#icon-shangchuanyunpan'},
  {name:'已购',icon:'#icon-yigou'},
  {name:'我的好友',icon:'#icon-haoyou1'},
  {name:'收藏和赞',icon:'#icon-shoucang2'},
  {name:'我的播客',icon:'#icon-sirenbiji'},
  {name:'我的听书',icon:'#icon-youshengshu1'},
])
</script>

<style lang="less" scoped>
.apply {
  margin:.4rem 0;
  padding:.4rem;
  width: 95%;
  border-radius: .4rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: .2rem;
    span {
      color:#635f5f
    }
  }

}
.liked {
  padding:.3rem;
  width: 95%;
  height: 1.5rem;
  background-color: #fff;
  border-radius: .4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .liked_left {
    width: 70%;
    display: flex;
    img {
      width: .8rem;
      height: .8rem;
      border-radius: .1rem;     
    }
    .info {
      margin-left:.2rem;
      p {
        color: #3f3e3e;
      }
      span {
        font-size: .24rem;
        color: #8a8787;
      }
    }
  }
  .liked_right {
    padding: .1rem;
    border:1px solid #9c9797;
    border-radius: .3rem;
    font-size:.26rem;
    color: #3f3e3e;
  }
}
</style>