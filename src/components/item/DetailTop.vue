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
</template>

<script>
export default {
  setup(props){
    // console.log(playlist)
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

</style>