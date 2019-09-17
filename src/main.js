// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iview from 'iview';
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';

Vue.use(iview)

// import { Table } from 'iview';
// Vue.component('Button', Button);
// Vue.component('Table', Table);

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
});