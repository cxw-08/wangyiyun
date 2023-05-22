<template>
  <div>
    <Suspense>
      <template #default>
        <detail-top :playList="playList"></detail-top>
      </template>
      <template #fallback>
        <DetailTopSkeleton></DetailTopSkeleton>
      </template>
    </Suspense>
    <detail-music-list :songList="songList"></detail-music-list>
  </div>
</template>

<script setup>
import { getMusicListDetail,getAllMusicList } from '@/request/api/item';
import { defineAsyncComponent, onMounted, reactive ,ref} from 'vue';
import { useRoute } from 'vue-router';
import DetailMusicList from '@/components/item/DetailMusicList.vue';


import DetailTopSkeleton from '@/components/item/DetailTopSkeleton.vue';

// 使用异步组件 性能优化 代码分包
const DetailTop = defineAsyncComponent(()=> import('@/components/item/DetailTop.vue'))

const playList = ref({})
const songList = reactive([])

onMounted(async ()=>{
  let id = useRoute().query.id
  //获取歌单详情信息
  let res = await getMusicListDetail(id);
  playList.value = res.data.playlist
  // 获取播放列表
  let result = await getAllMusicList(id)
  songList.push(...result.data.songs)
  // console.log('result',result)
  // console.log('plallist::',res.data.playlist)
  //防止页面刷新数据丢失，把数据保存在sessionStorage里面
  // sessionStorage.setItem('musicDetail',JSON.stringify(state))

})
</script>

<style>

</style>