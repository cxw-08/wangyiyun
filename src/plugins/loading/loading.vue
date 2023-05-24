<template>
  <div class="loading" v-if="isShow">
    <div class="loading-mask">
    </div>
    <div class="loading-content">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhengzaibofang2"></use>
        </svg>
        <span>加载中</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false)
const show = () => {
  isShow.value= true
}
const hide = () => {
  isShow.value = false
}

defineExpose({
  show,hide,isShow
})
</script>

<style lang="less" scoped>

.loading {
  position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999999999;
	display: flex;
	justify-content: center;
	align-items: center;
  .loading-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
  }
  .loading-content {
    width: 106px;
    height: 106px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content:center;
    flex-wrap: wrap;
    border: 3px solid #eee;
    position: relative;
    span {
      width: 100%;
      text-align: center;
      font-size: 12px;
    }

  }

}
</style>