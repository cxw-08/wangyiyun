<template>
  <div class="login">
    <img src="../../asset/images/bg.png" alt="" class="bg"> 

    <div class="btn" @click="goPhoneLogin">手机号登录</div>
    <div class="agreement">
      <input type="checkbox" v-model="isAgree" />
      <span>
        《用户协议》 《隐私政策》 《儿童隐私协议》
      </span>
    </div>
  </div>
  
</template>

<script setup>
import { showNotify } from 'vant';
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter()
const isAgree = ref(false)
const goPhoneLogin = ()=>{
  if (isAgree.value == false) {
    showNotify({ type: 'primary', message: '请先勾选协议',background: '#cc0b0b', });
    return;
  }
  router.push('/login/phone');
}
</script>

<style lang="less">
.login {
  position: relative;
  width: 100%;
  height: 13.34rem;
 .bg {
    position:absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .btn {
    position:absolute;
    top:8rem;
    left: 50%;
    margin-left: -2rem;
    width: 4rem;
    height: .9rem;
    background-color: #cc0b0b;
    border-radius: 25px;
    text-align: center;
    line-height: .9rem;
    color: #fff;
  }
  .agreement {
    position:absolute;
    text-align: center;
    top:9.4rem;
    left: 50%;
    width: 6rem;
    margin-left: -3rem;
    font-size:0.24rem;
    color:#86a9ae;
  }

}

</style>