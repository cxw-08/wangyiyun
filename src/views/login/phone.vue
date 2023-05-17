<template> 
  <div class="phone">
    <nav-bar></nav-bar>
    <div class="content">
      <div class="tip">
          登录体验更多精彩
        <span>
          未注册手机号登录后将自动创建账号
        </span>
      </div>
      <div class="phonenum">
        <input type="number" class="input" maxlength="11" placeholder="请输入手机号" v-model="phoneNum" >
      </div>
      <div class="btn" @click="next">下一步</div>
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from '@/store';
import NavBar from '@/components/common/NavBar.vue'
import { showNotify } from 'vant';
import { ref } from "vue"
import { useRouter } from "vue-router"
const profileStore = useProfileStore()
const router = useRouter()
const phoneNum = ref('')
const next = ()=>{
  console.log(phoneNum.value)
  let reg = /^1[3|4|5|7|8|9][0-9]\d{4,11}$/
  if(reg.test(phoneNum.value)){
    profileStore.updateLoginAccount(phoneNum.value)
    router.push('/login/verifycode')
  }else {
    showNotify({ type: 'primary', message: '请输入正确的手机号',background: '#d51d1d', });
  }
}
</script>

<style lang="less" scoped>
.phone {
  padding-left: .2rem;
  .content {
    .tip {
      margin: .3rem 0;
      span {
        display: block;
        margin: .1rem 0;
        font-size:.24rem;
        color:#adaaaa;
      }
    }
    .phonenum {
      .input {
         height: 35px;
        line-height: 35px;
        width: 88%;
        padding-left: 40px;
        border: none;
        outline: none;
        border-bottom: 1px solid #dedede;
      }
    }
    .btn {
      margin:.6rem auto;
      width: 6rem;
      height: .9rem;
      background-color: #d51d1d;
      border-radius: 25px;
      text-align: center;
      line-height: .9rem;
      color: #fff;
    }
  }
}

</style>