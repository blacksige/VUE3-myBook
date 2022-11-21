import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import store from './store'


setTimeout(() => {
  // window.document.getElementById('loading').remove();
  const app = createApp(App);
  app.use(store);
  app.use(router);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus);
  app.mount('#app');
},1500)

