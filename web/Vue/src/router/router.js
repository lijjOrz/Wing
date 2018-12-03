import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/context/home.vue'
import companyInfo from '../components/context/companyInfo.vue'
import appInfo from '../components/context/appInfo.vue'
import job from '../components/context/job.vue'
import milieu from '../components/context/milieu.vue'
import about from '../components/context/about.vue'

Vue.use(VueRouter)

var router = new router({
    routes: [
        {
            path: '/',//首页
            name: 'home',
            component: home
        },
        {
            path: '/companyInfo',//公司介绍
            name: 'companyInfo',
            component: companyInfo
        },
        {
            path: '/appInfo',//产品介绍
            name: 'appInfo',
            component: appInfo
        },
        {
            path: '/job',//正在招聘
            name: 'job',
            component: job
        },
        {
            path: '/milieu',//公司环境
            name: 'milieu',
            component: milieu
        },
        {
            path: '/about',//联系我们
            name: 'about',
            component: about
        },
    ]
})