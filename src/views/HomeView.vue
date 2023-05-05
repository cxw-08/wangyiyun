<template>
  <div class="home">
   <TopNav></TopNav>
   <SwiperTop/>
   <IconList></IconList>
   <MusicList></MusicList>
   <footer-menu></footer-menu>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue';
import SwiperTop from '@/components/home/SwiperTop.vue';
import IconList from '@/components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue';
import FooterMenu from '@/components/common/FooterMenu.vue';

export default {
  name: 'HomeView',
  components:{
    TopNav,
    SwiperTop,
    IconList,
    MusicList,
    FooterMenu
  }
}
</script>
