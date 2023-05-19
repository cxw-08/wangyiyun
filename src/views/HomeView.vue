<template>
  <div class="home">
   <TopNav>
      <template v-slot:middle>
        <div class="topSearch" @click="$router.push('/search')" >
          <van-search
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
            />
        </div>
      </template>

      <template v-slot:right> 
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huatong"></use>
          </svg>
      </template>
   </TopNav>
   <SwiperTop/>
   <IconList></IconList>
   <MusicList></MusicList>


  </div>
</template>

<script>
import TopNav from '@/components/common/TopNav.vue';
import SwiperTop from '@/components/home/SwiperTop.vue';
import IconList from '@/components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue';

export default {
  name: 'HomeView',
  components:{
    TopNav,
    SwiperTop,
    IconList,
    MusicList,
  }
}
</script>

<style lang="less" scoped>
</style>
