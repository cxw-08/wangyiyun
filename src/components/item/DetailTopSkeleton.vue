<template>
    <van-skeleton>
      <template #template>
        <div :style="{ display: 'flex', width: '100%' ,marginTop:'.8rem'}">
          <van-skeleton-image />
          <div :style="{ flex: 1, marginLeft: '16px' }">
            <van-skeleton-paragraph row-width="60%" />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
        </div>
      </template>
    </van-skeleton>
</template>

<script>

</script>

<style>

</style>