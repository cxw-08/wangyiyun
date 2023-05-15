import Login from '../views/login/index.vue'
import Phone from '../views/login/phone.vue'
import verifyCode from '../views/login/verifyCode.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,

  },
  {
    path: '/login/phone',
    name: 'phone',
    component: Phone
  },
  {
    path: '/login/verifycode',
    name: 'verifycode',
    component: verifyCode
  },
]