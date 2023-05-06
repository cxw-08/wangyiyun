<template>
  <div>
    <detail-top :playList="state.playList"></detail-top>
    <detail-music-list :songList="state.songList"></detail-music-list>
    <Footer></Footer>
  </div>
</template>

<script>
import { getMusicListDetail,getAllMusicList } from '@/request/api/item';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import DetailTop from '@/components/item/DetailTop.vue';
import DetailMusicList from '@/components/item/DetailMusicList.vue';
import Footer from '@/components/common/Footer.vue';
export default {
  setup(){
    const state = reactive({
      playList:{},
      songList:[]
    })
    onMounted(async ()=>{
      let id = useRoute().query.id
      //获取歌单详情信息
      let res = await getMusicListDetail(id);
      state.playList = res.data.playlist
      // 获取播放列表
      let result = await getAllMusicList(id)
      state.songList = result.data.songs
      console.log('result',result)
      console.log('plallist::',res.data.playlist)
      //防止页面刷新数据丢失，把数据保存在sessionStorage里面
      sessionStorage.setItem('musicDetail',JSON.stringify(state))

    })
    return {state}
  },
  components:{
    DetailTop,
    DetailMusicList,
    Footer
  }

}
</script>

<style>

</style>