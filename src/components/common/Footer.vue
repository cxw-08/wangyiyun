<template>
  <div class="footer">
    <footer-music v-if="$route.meta.requiresAudio"></footer-music>
    <footer-menu v-if="$route.meta.requiresFooterMenu"></footer-menu>
  </div>
</template>

<script>
import FooterMenu from '@/components/common/FooterMenu.vue'
import FooterMusic from '../item/FooterMusic.vue'
import { onMounted } from 'vue'
export default {
  setup(){
    onMounted(()=>{
    })
  },
  components:{
    FooterMenu,
    FooterMusic
  }
}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>