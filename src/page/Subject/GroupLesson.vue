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
      margin-top: 1rem;
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
              .link{
                line-height: 2rem;
                color: #888;
              }
            }
          }
        }
        .join-info {
          margin: 0 1.5rem 1.5rem;
          padding: 1.5rem;
          overflow: hidden;
          color: #888;
          border: 1px solid #00bfbf;
          border-radius: .4rem;
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
  .previous-img {
    .hd{
      margin-top: 4rem;
      text-align: center;
      span {
        display: inline-block;
        padding: 1rem 2rem 0;
        border-top: 1px solid #ddd;
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
  /*加载动画*/
  .loadingMore{
    text-align: center;
  }
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
  <div style="background: #f8f8f8">
    <Vheader></Vheader>
    <div class="header pt">
      <mt-navbar v-model="selectedTime">
        <mt-tab-item v-for="time in timeList" :key="time.value" :id="time.value">
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
    <div class="shcedule-list">
      <div class="hd">
        <div class="content">
          <div class="item" v-for="group in groupList">
            <div class="media">
              <div class="fl">
                <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="课程图片">
              </div>
              <div class="rt">
                <div class="row">
                  <a class="fr link" @click="skipToPage('课程详情',group.id)">课程详情</a>
                  <div class="h3">{{group.name}}</div>
                </div>
                <div class="time">
                  <i class="i-time icon"></i>
                  {{group.timeTotal}}min
                  <a class="fr link" @click="skipToPage('教练详情',group.coachId)">教练详情</a>
                </div>
              </div>
            </div>
            <div class="join-info">
              <div class="fl">
                剩余席位
                <span style="color: #00bfbf;">{{group.surplusNum}}/{{group.total}}</span>
              </div>
              <div class="fr">
                报名截止时间:
                <span style="color: #00bfbf;">30分钟</span>
              </div>
            </div>
            <div class="btns">
              <Row>
                <Col span="11">
                <Button class="btn-appoint" @click="skipToPage('课程预约提交',group.id)">预约</Button>
                </Col>
                <Col span="12" offset="1">
                <Button class="btn-appoint food" @click="skipToPage('课程预约提交',group.id)">预约并约定营养餐</Button>
                </Col>
              </Row>
            </div>
          </div>
          <div class="loadingMore" v-if='loadMoreFlag' @click="loadMore('more')">加载更多</div>
          <Spin fix style="position: relative" v-if="loadFlag">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
          </Spin>
        </div>
      </div>
    </div>
    <div class="previous-img">
      <div class="hd">
        <span>往期图片</span>
      </div>
    </div>
    <p></p>
    <mt-datetime-picker
      v-model="pickerVisible"
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="nowday"
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
  export default{
    data(){
      return{
        selectedTime:0,
        nowday:'',
        today:0,
        loadMoreFlag:true,
        timeList:[],
        pickerVisible:'',
        /*团课列表*/
        groupList:[],
        /*约课时间点*/
        appointTime:'',
        /*场馆模态*/
        stadiumFlag:false,
        stadiumList:[],
        currentStadium:'',
        loadFlag:false,
        /*活动分页对象*/
        page:{
          pageSize:5
        }
      }
    },
    watch:{
      selectedTime:function () {
        /*重置加载更多按钮*/
        this.loadMoreFlag = true
        this.load();
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
        })
        self.load();
      },
      skipToPage(name,id){
        if(id){
          this.$router.push({name:name,params:{id:id}})
        }else {
          this.$router.push(name)
        }
      },
      /*显示时间点*/
      show(index){
        let cont = document.getElementsByClassName('cont');
        cont[index].style.display=cont[index].style.display=='none'?'inline-block':'none';
      },
      /*选择时间*/
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
        /*换场馆后重新加载列表*/
        /*重置加载按钮*/
        self.loadMoreFlag = true
        this.load()
      },
      /*加载更多*/
      load(action){
        let self = this;
        let url = '/groupClass/classListByStadium?pageNo=1&pageSize='+this.page.pageSize+'&stadiumId='+localStorage.getItem('stadiumId')+
          '&date='+this.selectedTime
        self.$http.get(url).then(function (res) {
          if(res.result==1){
            self.groupList = res.data
            self.loadFlag=false
            if(self.page.pageSize>res.total&&action=='more'){
              self.loadMoreFlag = false
              self.$toast('没有更多啦')
            }
          }
        })
      },
      loadMore(action){
        this.loadFlag=true
        this.page.pageSize = this.page.pageSize + 5 ;
        this.load(action)
      }
    },
    created:function () {
      this.getTimeList();
      this.init()
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter,
      'Appoint':Appoint
    }
  }
</script>
