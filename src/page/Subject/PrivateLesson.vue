<style scoped rel='stylesheet/scss' lang='scss'>
  .pt{
    .date{
      padding-bottom: .6rem;
      height: 100%;
      line-height: 3.3rem;
      font-size: 1.4rem;
    }
    .week{
      font-size: 1.8rem;
    }
    .i-calendar {
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 3rem;
      height: 3.2rem;
      background-image: url(../../assets/calendar.png);
    }
  }
  .index-bar{
    height: 4.8rem;
    padding:0 1.5rem;
    line-height: 4.8rem;
    background: #fff;
    overflow: hidden;
    .fc1{
      text-decoration: none;
      color:#00bfbf;
    }
    .fr{
      .btn{
        display: inline-block;
        position: relative;
        line-height: 1;
        font-size: 0;
        vertical-align: middle;
        .num-info{
          position: absolute;
          display: inline-block;
          background: #ff0000;
          color:#fff;
          width: 1.6rem;
          height: 1.6rem;
          line-height: 1.6rem;
          text-align: center;
          border-radius: 50% ;
          top:0.5rem;
          right: -0.5rem;
          font-size:1.2rem

        }
        .i-msg{
          color:#000;
          font-size: 3.5rem;
        }
      }
    }
  }
  /*课程列表*/
  .shcedule-list{
    background: #fff;
    .hd{
      position: relative;
      border-top: 1px solid #eee;
      .title{
        line-height: 4.2rem;
        text-align: center;
      }
    };
    .content{
      .item{
        border-top: 1px solid #eee;
        .media{
          overflow: hidden;
          margin: 0 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid #eee;
          .fl{
            width: 7rem;
            height: 7rem;
            img{
              width: 100%;
              height: 100%;
              vertical-align: top;
              object-fit: cover;
            }
          }
          .rt{
            position: relative;
            min-height: 7rem;
            margin-left: 8.5rem;
            .row{
              overflow: hidden;
              .link{
                line-height: 2rem;
                color: #888;
              }
              .h3{
                padding-right: 2.2rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 1.8rem;
              }
            }
            .time{
              margin-top: .1rem;
              color: #888;
            }
          }
        }
        .cont{
          width: 100%;
          border-bottom: 1px solid #eee;
          .time-list{
            padding: 1.5rem 1rem;
            .time-group{
              width: 100%;
            }
            .d{
              display: inline-block;
              width: 25%;
              padding: 0.5rem;
            }
          }
          .btns{
            padding: 0 1rem 1.5rem;
            .btn-appoint{
              background: #fff;
              font-size: 1.8rem;
              height: 4.2rem;
              width: 100%;
              text-align: center;
            }
            .food{
              color:#fff;
              background: #00bfbf;
            }
          }
        }
      }
    }
  }
  /*教练列表*/
  .loadingMore{
    text-align: center;
  }
  .coach-list{
    .coachGallery{
      position: relative;
      height: 15rem;
      overflow: hidden;
      .list{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20rem;
        height: 11rem;
        margin: -5.5rem 0 0 -10rem;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-perspective: 200px;
        perspective: 200px;
        .item-scroll{
          position: absolute;
          width: 20rem;
          height: 11rem;
          padding: 1rem 1.5rem;
          box-shadow: 0 0 3px rgba(0,0,0,0.2);
          background-color: #fff;
          border-radius: .2rem;
          -webkit-transition: transform .6s ease;
          transition: transform .6s ease;
          .lf{
            width: 5rem;
            height: 5rem;
            float: left;
            border: 1px solid #ddd;
            border-radius: 50%;
            img{
              width: 5rem;
              height: 100%;
              border-radius:50%;
              object-fit: cover;
            }
          }
          .rt{
            margin-left: 5.8rem;
            .name{
              text-align: left;
              padding: 1rem 0 .5rem;
            }
            .star{
              width: 100%;
              text-align: left;
            }
            .val{
              margin-left: .5rem;
              color: #fea500;
              font-size: 1.2rem;
            }
          }
          .tags{
            height: 4rem;
            overflow: hidden;
            font-size: 0;
          }
        }
      }
    }
    .hd{
      padding: 1.2rem 2rem;
      color:#00bfbf !important;
      text-align: right;
    }
    overflow: hidden;
    .item{
      list-style: none;
      float: left;
      width: 25%;
      margin-bottom: 2rem;
      text-align: center;
      .avatar{
        position: relative;
        width: 6rem;
        height:6rem;
        margin: 0 auto;
        img{
          border: 2px solid #ddd;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
      }
      .name{
        padding: .5rem 0 .7rem;
        font-size: 1.5rem;
      }
      .active{
        &:after{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 1.6rem;
          height: 1.6rem;
          background: #fff url(../../assets/i-checked.png) no-repeat 0 0;
          background-size: 100% 100%;
          border-radius: 50%;
          content: '';
        }
        img{
          border-color: #00bfbf;
        }
      }
    }
  }
  /*场馆模态*/
  .select-shop{
    max-height: 60vh;
    margin: 0;
    overflow-y: auto;
    .item{
      margin: 0 2.2rem;
      .link{
        display: table;
        width: 100%;
        padding: 2.2rem 0;
        line-height: 0;
        border-bottom: 1px solid #d1d1d1;
        .pic{
          display: table-cell;
          vertical-align: middle;
          img{
            width:4.4rem;
            height: 4.4rem;
          }
        }
        .txt{
          display: table-cell;
          width: 100%;
          padding: 0 1rem;
          line-height: 1.2;
          vertical-align: middle;
          h4{
            font-size: 1.5rem;
            font-weight: normal;
          }
          p{
            color: #999;
            font-size: 1.3rem;
          }
        }
        .ico{
          display: table-cell;
          vertical-align: middle;
          .i-arrow-right{
            width: .9rem;
            height: 1.6rem;
            background-image: url(../../assets/i-arrow-right.png);
          }
        }
      }
    }
  }
  /*动画样式*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  /*加载动画*/
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="header pt">
      <mt-navbar v-model="selectedTime">
        <mt-tab-item v-for="time in timeList" :key="time.value" :id="time.value" @click.native="changeTime">
          <p class="date">{{time.label}}</p>
        </mt-tab-item>
        <!-- <mt-tab-item id="1">
             <p class="date">07.19</p>
             <p class="week">周三</p>
         </mt-tab-item>
         <mt-tab-item id="2">
           <p class="date">07.19</p>
           <p class="week">周三</p>
         </mt-tab-item>
         <mt-tab-item id="3">
           <p class="date">07.19</p>
           &lt;!&ndash;<p class="week">周三</p>&ndash;&gt;
         </mt-tab-item>-->
        <mt-tab-item id="4" @click.native="openPicker">
          <i id="btnCalendar" class="i-calendar"></i>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="index-bar">
      <div class="fl" @click="openStadium">
        当前场馆 :
        <a class="fc1">
          {{currentStadium}}
          <Icon type="ios-arrow-right"></Icon>
        </a>
      </div>
    </div>
    <div class="coach-list">
      <div class="hd" @click="coachListTransform">全部教练{{'（'+coachList.length+'）'}}</div>
      <div class="coachGallery" v-show="!allCoachFlag">
        <ul class="list" @touchend="slideMove($event)" @touchstart="slideStart">
          <li class="item-scroll" v-for='(slide,index) in slideList' :style="slideClassList[index]" :key='slide.id' @click="coachDetail(slide.id)">
            <div class="info">
              <div class="lf">
                <img :src="headerUrl+slide.coachImgUrl" alt="">
              </div>
              <div class="rt">
                <div class="name">{{slide.name}}</div>
                <Rate disabled :value="slide.grade.coachScore" class="star"></Rate>
              </div>
              <div class="tags">
                <Tag type="border" v-for="(tag,index) in slide.impressionList" :key="index">{{tag}}</Tag>
              </div>
            </div>
          </li>
          <!-- <li class="item-scroll" style="transform: translate3d(200px, 0px, 0px);">
             <div class="info">
               <div class="lf">
                 <img src="../../assets/avatar.png" alt="">
               </div>
               <div class="rt">
                 <div class="name">流浪</div>
                 <Rate disabled :value="2" class="star"></Rate>
               </div>
             </div>
             <div class="tags">
               <Tag type="border">标签三</Tag>
             </div>
           </li>
           <li class="item-scroll" style="transform: translate3d(400px, 0px, 0px);">
             <div class="info">
               <div class="lf">
                 <img src="../../assets/avatar.png" alt="">
               </div>
               <div class="rt">
                 <div class="name">流浪</div>
                 <Rate disabled :value="2" class="star"></Rate>
               </div>
             </div>
             <div class="tags">
               <Tag type="border">标签三</Tag>
             </div>
           </li>-->
        </ul>
      </div>
      <div class="allCoach" v-show="allCoachFlag">
        <div style="overflow: hidden">
          <li class="item " v-for="(coach,index) in coachList" @click="selectCoach(coach.id,index)">
            <div :class="{avatar:true,coach:true,active:coach.flag}">
              <img :src="headerUrl+coach.coachImgUrl" alt="">
            </div>
            <div class="name">{{coach.name}}</div>
            <Rate disabled :value="coach.grade.coachScore"></Rate>
          </li>
        </div>
        <div style="text-align: center;">
          <Button @click="coachListTransform">收起教练列表</Button>
        </div>
      </div>
    </div>
    <div class="shcedule-list">
      <div class="hd">
        <div class="title">请选择课程</div>
        <div class="content">
          <div v-for="(item,index) in subjectList" class="item">
            <div class="media">
              <div class="fl">
                <img :src="headerUrl+item.mainImgUrl" alt="课程图片">
              </div>
              <div class="rt">
                <div class="row">
                  <a class="fr link" @click="skipToPage('私课详情',item.id)">课程详情</a>
                  <div class="h3">{{item.name}}</div>
                </div>
                <div class="time">
                  <i class="i-time icon"></i>
                  {{item.classTime}}min
                </div>
                <Appoint @click.native="show(index)"></Appoint>
              </div>
            </div>
            <div class="cont" style="display: none">
              <div class="time-list">
                <Radio-group class='time-group' v-model="appointTime" type="button">
                  <div class="d" v-for="(time,index) in item.privateClassTimeList" :key="index" v-if="time.status=='0'?true:false">
                    <Radio :label="time.id" >{{time.times}}</Radio>
                  </div>
                </Radio-group>
              </div>
              <div class="btns">
                <Row>
                  <Col span="11">
                  <Button class="btn-appoint" @click="skipToPage('私课预约提交',item.id,appointTime,'0')">预约</Button>
                  </Col>
                  <Col span="12" offset="1">
                  <Button class="btn-appoint food" @click="skipToPage('私课预约提交',item.id,appointTime,'1')">预约并约定营养餐</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div class="loadingMore" @click="loadMore" v-if="loadMoreFlag">加载更多</div>
          <Spin fix style="position: relative" v-if="loadFlag">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
          </Spin>
        </div>
      </div>
    </div>
    <p></p>
    <mt-datetime-picker
      v-model="pickerVisible"
      ref="picker"
      type="date"
      :startDate="nowday"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="confirmDate">
    </mt-datetime-picker>
    <Modal title="场馆选择" v-model="stadiumFlag" :closable="false">
      <ul class="select-shop">
        <li class="item" v-for="gym in stadiumList" @click="selectStadium(gym.id,gym.name)">
          <a class="link">
            <div class="pic">
              <img src="http://zoneke-img.b0.upaiyun.com/a74d6191fb0e2ab5eee9e51c21417750.jpg" alt="">
            </div>
            <div class="txt">
              <h4>{{gym.name}}</h4>
              <p>北京市朝阳区亚运村安立路安立花园2A1202</p>
            </div>
            <div class="ico">
              <i class="icon i-arrow-right"></i>
            </div>
          </a>
        </li>
      </ul>
      <div slot="footer"></div>
    </Modal>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vhedaer from '../../components/Header.vue'
  import  Vfooter from'../../components/Footer.vue'
  import  {Toast} from 'mint-ui'
  import Appoint  from '../../components/AppointLesson.vue'
  import getDateFormatter from '../../common/formatterDate'
  import classObj from '../../common/classOperate'
  import { InfiniteScroll } from 'mint-ui';
  import {headerUrl}from'../../common/WebApi'
  export default{
    data(){
      return{
        /*选择时间*/
        selectedTime:0,
        today:0,
        timeList:[],
        pickerVisible:'',
        nowday:'',
        currentStadium:'',
        button1:'a',
        /*约课时间点*/
        appointTime:'',
        loading:false,
        /*场馆模态*/
        stadiumFlag:false,
        stadiumList:[],
        /*教练列表*/
        coachList:[],
        slideList:[],//滑动列表
        selectFlag:false,
        /*课程列表*/
        loadFlag:false,
        loadMoreFlag:true,
        subjectList:[],
        pageSize:5,
        /*图片静态地址*/
        headerUrl:'',
        /*slide时间*/
        start:0,
        index:0,//滑动图片序号
        transform:[36,200,400,600],
        slideClassList:['transform: translate3d(0px, 0px,36px)','transform: translate3d(200px, 0px,0px)','transform: translate3d(400px, 0px,0px)','transform: translate3d(600px, 0px,0px)','transform: translate3d(800px, 0px,0px)',],
        /*所有教练显示标志*/
        allCoachFlag:false,
        selectCoachIndex:0//选中教练序号
      }
    },
    methods:{
      init(){
        let self=this
        /*获取当前场馆*/
        self.$http.get('stadium/stadiumInfo?id='+localStorage.getItem('stadiumId')).then(function (res) {
          if(res.result==1){
            self.currentStadium = res.data.name
          }
        }),
          /*获取当前教练列表*/
          self.getPrivateCoach()
      },
      skipToPage(name,id,time,mealFlag){
        if(id==undefined){
          this.$router.push(name)
        } else if(mealFlag!=''&&mealFlag!=undefined){
          if(time==''||time==undefined){
            this.$toast('请选择时间点')
            return
          }
          this.$router.push({name:name,params:{id:id,time:time,meal:mealFlag}})
        }else {
          this.$router.push({name:name,params:{id:id}})
        }
      },
      /*显示时间点*/
      show(index){
        let cont = document.getElementsByClassName('cont');
        cont[index].style.display=cont[index].style.display=='none'?'inline-block':'none';
      },
      getTimeList(data){
        let date= data||new Date();
        this.selectedTime = getDateFormatter.formatterDate(date)
        this.nowday = new Date();
        let dateObj ={}
        /*获取今天到后天的时间*/
        for(let i =0 ;i<3;i++){
          let time = date.getTime()
          date = i==0?date:new Date(time+24*3600*1000);
          let month = getDateFormatter.formatterMonth(date);
          let day = getDateFormatter.formtterDay(date)
          dateObj.label = month+'.'+day
          dateObj.value = getDateFormatter.formatterDate(date)
          this.timeList[i]=Object.assign({},dateObj)
        }
      },
      openPicker(){
        this.$refs.picker.open();
      },
      confirmDate(){
        this.$refs.picker.close();
        console.log(this.pickerVisible);
        this.getTimeList(this.pickerVisible)
      },
      /*选择场馆*/
      openStadium(){
        this.stadiumFlag=!this.stadiumFlag;
        let self =this;
        self.$http.get('stadium/allStadium').then(function (res) {
          if(res.result==1){
            self.stadiumList = res.data;
          }
        })
      },
      selectStadium(id,name){
        this.stadiumFlag=!this.stadiumFlag;
        localStorage.setItem('stadiumId',id)
        this.currentStadium = name;
        /*重新加载教练列表*/
        this.getPrivateCoach()
      },
      /*获取私教*/
      getPrivateCoach(){
        let self = this;
        self.$http.get('/coach/coachListByStadiumId?stadiumId='+localStorage.getItem('stadiumId')).then(function (res) {
          console.log(res)
          if(res.result==1){
            self.coachList = res.data
            /*滑动列表*/
            self.slideList=[]
            for(let i =0;i<res.data.length;i++){
              if(i>5){
                return
              }
              self.slideList.push(res.data[i])
            }
            /*初始化样式*/
            for(let i = 0;i<res.data.length;i++){
              self.coachList[i].flag=i==0?true:false
            }
            self.selectCoach(res.data[0].id,0)
          }else {
            self.$toast(res.error.message)
            self.coachList = []
            self.slideList=[]
          }
        })
      },
      selectCoach(id,index){
        /*标记所选教练序号*/
        this.index = index
        let el = document.getElementsByClassName('coach')
        for(let i =0;i<el.length;i++){
          i==index? classObj.addClass('active',el[index]):classObj.removerClass('active',el[i])
        }
        /*获取课程*/
        localStorage.setItem('coachId',id)
        this.getSubjects(id)
      },
      coachDetail(id){
        this.$router.push({name:'教练详情',params:{id:id}})
      },
      /*加载更多课程*/
      loadMore(){
        this.loadFlag=true;
        let self = this;
        self.pageSize+=5
        self.getSubjects(localStorage.getItem('coachId'))
      },
      /*获取课程*/
      getSubjects(id){
        let url= '/privateClass/listByCoachId?pageNo=1&pageSize=' +
          this.pageSize+'&coachId='+id+'&date='+this.selectedTime
        let self = this
        self.$http.get(url).then(function (res) {
          console.log(res)
          if(res.result==1){
            if(res.total==0){
              self.$toast('查无结果')
              self.loadMoreFlag = false
              self.loadFlag = false
              self.subjectList = []
              return
            }
            if(res.data.length==self.subjectList.length){
              self.$toast('没有更多啦')
              self.loadMoreFlag = false
              self.loadFlag = false
            }else {
              self.loadFlag = false
              self.subjectList = res.data
            }
          }else {
            self.$toast(res.error.message)
            self.subjectList = []
          }
        })
      },
      /*教练列表滑动*/
      slideStart(e){
        this.start = e.touches[0].pageX;
      },
      slideMove(e){
        /*根据index判断当前教练id*/
        if(e.changedTouches[0].pageX-this.start>0){
          console.log('向右')
          /*判断是否在最左边*/
          if(this.index==0){
            console.log('最左边了')
          }else {
            let dom = document.getElementsByClassName('item-scroll')
            /*slideList里的序号*/
            this.index= this.index-1
            /*获取该教练课程*/
            let coachId = this.slideList[this.index].id
            this.getSubjects(coachId)
            for(let i = 0;i<dom.length;i++){
              if(i==this.index){
                dom[i].style.transform = 'translate3d(0,0,36px)'
              }else{
                dom[i].style.transform = 'translate3d('+((i-this.index)*200)+'px,0,0)'
              }
            }

          }
        }else if(e.changedTouches[0].pageX-this.start==0){
          console.log('不动')
        }else{
          console.log('向左')
          if(this.index==this.slideList.length-1){
            console.log('最右边了')
          }else {
            let dom = document.getElementsByClassName('item-scroll')
            this.index= this.index+1
            /*获取该教练课程*/
            let coachId = this.slideList[this.index].id
            this.getSubjects(coachId)
            for(let i = 0;i<dom.length;i++){
              if(i==this.index){
                dom[i].style.transform = 'translate3d(0,0,36px)'
              }else{
                dom[i].style.transform = 'translate3d('+((i-this.index)*200)+'px,0,0)'
              }
            }
          }
        }
      },
      /*教练列表,滑动转换*/
      coachListTransform(){
        this.allCoachFlag = !this.allCoachFlag;
        if(!this.allCoachFlag){
          /*slide样式*/
          let dom = document.getElementsByClassName('item-scroll')
          this.$nextTick(function(){
            for(let i = 0;i<dom.length;i++){
              if(i==this.index){
                dom[i].style.transform = 'translate3d(0,0,36px)'
              }else{
                dom[i].style.transform = 'translate3d('+((i-this.index)*200)+'px,0,0)'
              }
            }
          })
        }else {
          /*list样式*/
          let el = document.getElementsByClassName('coach')
          let index = this.index
          for(let i =0;i<el.length;i++){
            i==index? classObj.addClass('active',el[index]):classObj.removerClass('active',el[i])
          }
        }
      },
      /*时间变化*/
      changeTime(){
        this.getSubjects(localStorage.getItem('coachId'))
      }
    },
    mounted:function(){
      this.init();
    },
    created:function () {
      this.headerUrl = headerUrl
      this.getTimeList();
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter,
      'Appoint':Appoint
    }
  }
</script>
