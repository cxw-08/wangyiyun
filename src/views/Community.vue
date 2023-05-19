<template>
  <div>
    <TopNav>
      <template v-slot:middle>
        <div style="{text-align: center;font-size:.36rem;}" >社区</div>
      </template>
      <template v-slot:right> 
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianchongxing-"></use>
          </svg>
      </template>
   </TopNav>
    
  </div>
</template>

<script setup>
import TopNav from '@/components/common/TopNav.vue';
</script>

<style>

</style>