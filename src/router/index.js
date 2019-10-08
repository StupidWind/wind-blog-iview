import Vue from 'vue'
import Router from 'vue-router'
import WindHeader from '../components/WindHeader'
import HomePage from '../views/HomePage'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: HomePage
    }]
})