<template>
  <div class="follow">
    <top-nav>
      <template v-slot:middle>
        <div style="{text-align: center;font-size:.36rem;}" >动态</div>
      </template>
      <template v-slot:right>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianjia"></use>
          </svg>
      </template>
    </top-nav>
  </div>
</template>

<script setup>
import TopNav from '@/components/common/TopNav.vue';
</script>

<style>

</style>