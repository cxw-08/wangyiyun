import loading from './loading.vue'
import { createVNode, render } from 'vue'

export default {
  install(app) {
    let VNode = createVNode(loading)
    render(VNode, document.body)
    app.config.globalProperties.$loading = {
      show: VNode.component?.exposed?.show,
      hide: VNode.component?.exposed?.hide,
    }
  }
}