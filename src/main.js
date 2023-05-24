import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import 'vant/lib/index.css';
import { createPinia } from 'pinia'

import loading from './plugins/loading'
const app = createApp(App)
//实现图片懒加载的自定义事件
app.directive('lazy', async (el, bingding) => {
  const def = await import('@/asset/images/disc_default.png')
  // console.log('el', el)
  // console.log('bingding', bingding)
  let viewWidth = document.body.clientWidth
  let rect = el.getBoundingClientRect()
  // console.log('rect', rect)
  // console.log('viewWidth', viewWidth)
  if (rect.left < viewWidth && rect.left + rect.width > 0) {
    el.src = bingding.value
  } else {
    el.src = def.default
  }
})

app.use(loading)
getVant(app)
app.use(createPinia())
app.use(store)
app.use(router).mount('#app')

