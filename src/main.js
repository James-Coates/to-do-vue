import Vue from 'vue';
import App from './App.vue';
import { MdField, MdList, MdCard, MdCheckbox, MdButton, MdIcon } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdCard);
Vue.use(MdCheckbox);
Vue.use(MdButton);
Vue.use(MdIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
