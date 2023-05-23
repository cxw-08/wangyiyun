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
    <self-card></self-card>
    <self-content></self-content>
  </div>
</template>

<script setup>
import TopNav from '@/components/common/TopNav.vue';
import SelfCard from '@/components/profile/SelfCard.vue';
import SelfContent from '@/components/profile/SelfContent.vue';

</script>

<style lang="less">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: rgb(236, 235, 233) !important;
}

</style>