<template>
  <div>
    <detail-top :playList="state.playList"></detail-top>
  </div>
</template>

<script>
import { getMusicListDetail } from '@/request/api/item';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import DetailTop from '@/components/item/DetailTop.vue';
import DetailMusicList from '@/components/item/DetailMusicList.vue';
export default {
  setup(){
    const state = reactive({
      playList:{}
    })
    onMounted(async ()=>{
      let id = useRoute().query.id
      let res = await getMusicListDetail(id);
      state.playList = res.data.playlist
      console.log('plallist::',res.data.playlist)
      //防止页面刷新数据丢失，把数据保存在sessionStorage里面
      sessionStorage.setItem('musicDetail',JSON.stringify(state))

    })
    return {state}
  },
  components:{
    DetailTop,
    DetailMusicList
  }

}
</script>

<style>

</style>