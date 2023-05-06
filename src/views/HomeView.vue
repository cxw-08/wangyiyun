<template>
  <div class="home">
   <TopNav></TopNav>
   <SwiperTop/>
   <IconList></IconList>
   <MusicList></MusicList>
   <Footer></Footer>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue';
import SwiperTop from '@/components/home/SwiperTop.vue';
import IconList from '@/components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'HomeView',
  components:{
    TopNav,
    SwiperTop,
    IconList,
    MusicList,
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
