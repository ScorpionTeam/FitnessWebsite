import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Introduce from '../page/Stadium/Introduce.vue'
import Schedule from '../page/Schedule/Schedule.vue'
import  Activitys from'../page/Activity/Activitys.vue'
import  Question from '../page/Question/Question.vue'
import  MyQuestion from '../page/Question/MyQuestion.vue'
import Login from '../components/Login.vue'
import Register from '../page/Register.vue'
import Profile from '../page/person/Profile.vue'
import PrivateLesson from '../page/Subject/PrivateLesson.vue'
import CourseDetail from '../page/Subject/CourseDetail.vue'
import PrivateCourseSubmit from '../page/Subject/PrivateCourseSubmit.vue'
import PrivateDetail from '../page/Subject/PrivateDetail.vue'
import LessionSubmit from '../page/Subject/LessionSubmit.vue'
import GroupLesson from '../page/Subject/GroupLesson.vue'
import CoachDetail from '../page/Coach/CoachDetail.vue'
import ProfileEdit from '../page/person/ProfileEdit.vue'
import ActivityDetail from '../page/Activity/ActivityDetail.vue'
import JoinActivity from '../page/Activity/JoinActivity.vue'
import Experience from '../page/person/Experience.vue'
import Progress from '../page/person/Progress.vue'
import Notice from '../page/Notice/Notice.vue'
import NoticeDetail from '../page/Notice/NoticeDetail.vue'
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
      path:'/activity-detail/:id',
      name:'活动详情',
      component:ActivityDetail
    },
    {
      path:'/activity-join/:id',
      name:'参加活动',
      component:JoinActivity
    },
    {
      path:'/question',
      name:'问答',
      component:Question
    },
    {
      path:'/my-question',
      name:'我的问答',
      component:MyQuestion
    },
    {
      path:'/login',
      name:'登录',
      component:Login
    },
    {
      path:'/register',
      name:'注册',
      component:Register
    },
    {
      path:'/profile',
      name:'个人中心',
      component:Profile
    },
    {
      path:'/profile-edit',
      name:'修改信息',
      component:ProfileEdit
    },
    {
      path:'/experience',
      name:'申请体验',
      component:Experience
    },
    {
      path:'/progress',
      name:'进阶之路',
      component:Progress
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
      path:'/course-detail/:id',
      name:'课程详情',
      component:CourseDetail
    },
    {
      path:'/private-detail/:id',
      name:'私课详情',
      component:PrivateDetail
    },
    {
      path:'/coach-detail/:id',
      name:'教练详情',
      component:CoachDetail
    },
    {
      path:'/private-lession-submit/:id/:time/:meal',
      name:'私课预约提交',
      component:PrivateCourseSubmit
    },
    {
      path:'/lession-submit/:id/:mealFlag',
      name:'团课预约提交',
      component:LessionSubmit
    },
    {
      path:'/notice',
      name:'消息列表',
      component:Notice
    },
    {
      path:'/notice-detail/:id',
      name:'消息详情',
      component:NoticeDetail
    }
  ]
})
