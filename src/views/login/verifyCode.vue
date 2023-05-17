<template>
  <div class="content">
    <nav-bar></nav-bar>

    <div class="tips">
      <p>请输入验证码</p>
      <div class="info">
        <div class="left"> 已发送至
          <span class="ico">+86 {{ loginAccount }}</span>
        </div>
        <div class="timer">
          <span class="time" v-if="count!=60">{{ count }} s</span>
          <span class="regain" v-else>重新获取</span>
        </div>
      </div>
    </div>

    <div class="input">
      <van-password-input
        :length="4"
        :value="code"
        :mask="false"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        v-model="code"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </div>
    </div>
</template>

<script setup>
import { showNotify } from 'vant';
import NavBar from '@/components/common/NavBar.vue';
import {getPhoneCode,verifyPhoneCode,getPhoneLogin} from '@/request/api/my';
import { useProfileStore } from '@/store';
import { computed, onMounted, ref, watch } from 'vue';
const code = ref('');
const showKeyboard = ref(true);
const count = ref(59)
const timer = ref(null)
const profileStore = useProfileStore()
const loginAccount = computed(()=> profileStore.loginAccount)
onMounted(()=>{
  // startTimer()
  getSendVerifyCode()
})
watch(code,(newCode)=>{
  if (newCode.length === 4) {
    profileStore.login(newCode)
  }
})
const startTimer = ()=>{
  timer.value = window.setInterval(() => {
    count.value--
    if (count.value === 0) {
      count.value = 60;
      clearInterval(timer.value)
    }
  }, 1000);
}
const getSendVerifyCode = async ()=>{
  let res = await getPhoneCode(profileStore.loginAccount)
  console.log(res,'res')
  if (res.data.code === 200){
    showNotify({ type: 'primary', message: '已发送验证码',background: '#d51d1d', });
    startTimer()
  }
  // console.log('loginAccount',res)
}
</script>

<style lang="less" scoped>
.content {
  padding: .2rem;
  .tips {
    margin: .4rem 0;
    font-size: .36rem;
    .info {
      margin-top:.2rem;
      color: #959494;
      display: flex;
      justify-content: space-between;
      .left {
        font-size:.28rem;
      }
      .timer {
        margin-right: .4rem;
        .regain {
          color: black;
        }
      }
      
    }
  }
}

</style>