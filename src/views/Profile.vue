<template>
  <div class="profile">
      <top-nav>
        <template v-slot:middle>
          <div style="{text-align: center;font-size:.36rem;}" >我的</div>
        </template>
        <template v-slot:right>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_sousuo"></use>
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