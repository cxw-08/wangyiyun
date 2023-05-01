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
export default {
  setup(){
    const state = reactive({
      playList:{}
    })
    onMounted(async ()=>{
      let id = useRoute().query.id
      let res = await getMusicListDetail(id);
      state.playList = res.data.playlist
      // console.log(res)

    })
    return {state}
  },
  components:{
    DetailTop
  }

}
</script>

<style>

</style>