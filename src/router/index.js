import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Introduce from '../page/Introduce.vue'
import Schedule from '../page/Schedule.vue'
import  Activitys from'../page/Activitys.vue'
import  Question from '../page/Question.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'

    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:'/introduce',
      name:'场馆介绍',
      component:Introduce
    },
    {
      path:'/schedule',
      name:'本月日程',
      component:Schedule
    },
    {
      path:'/activitys',
      name:'热门活动',
      component:Activitys
    },
    {
      path:'/question',
      name:'问答',
      component:Question
    }
  ]
})
