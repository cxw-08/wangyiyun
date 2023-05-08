<template>
  <router-view/>
  <Footer></Footer>
</template>
<script>
import Footer from '@/components/common/Footer.vue';
export default {
  setup(){

  },
  components:{
    Footer
  }
}
  
</script>

<style lang="less">
* {
  margin:0;
  padding:0;
  box-sizing: border-box;

}
.icon {
  width:.5rem;
  height:.5rem;
}

a {
  color: black;
}
</style>
