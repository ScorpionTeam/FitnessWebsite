import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Introduce from '../page/Introduce.vue'
import Schedule from '../page/Schedule.vue'
import  Activitys from'../page/Activitys.vue'
import  Question from '../page/Question.vue'
import Login from '../components/Login.vue'
import Profile from '../page/Profile.vue'
import PrivateLesson from '../page/PrivateLesson.vue'
import CourseDetail from '../page/CourseDetail.vue'
import LessionSubmit from '../page/LessionSubmit.vue'
import GroupLesson from '../page/GroupLesson.vue'
import CoachDetail from '../page/CoachDetail.vue'
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
    },
    {
      path:'/login',
      name:'登录',
      component:Login
    },
    {
      path:'/profile',
      name:'个人中心',
      component:Profile
    },
    {
      path:'/private-lesson',
      name:'私教预约',
      component:PrivateLesson
    },
    {
      path:'/group-lesson',
      name:'团课预约',
      component:GroupLesson
    },
    {
      path:'/course-detail',
      name:'课程详情',
      component:CourseDetail
    },
    {
      path:'/coach-detail',
      name:'教练详情',
      component:CoachDetail
    },
    {
      path:'/lession-submit',
      name:'课程预约提交',
      component:LessionSubmit
    }
  ]
})
