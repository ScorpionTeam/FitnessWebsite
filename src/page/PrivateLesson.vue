<template>
  <div>
    <Vheader></Vheader>
    <div class="header pt">
      <mt-navbar v-model="selected">
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
      <div class="fl">
        当前场馆 :
        <a class="fc1" href="#">
          亚运村店
          <Icon type="ios-arrow-right"></Icon>
        </a>
      </div>
    </div>
    <div class="shcedule-list">
      <div class="hd">
        <div class="title">请选择课程</div>
        <div class="content">
          <div class="item">
          <div class="media">
            <div class="fl">
              <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="课程图片">
            </div>
            <div class="rt">
              <div class="row">
                <a class="fr link" @click="skipToPage('course-detail')">课程详情</a>
                <div class="h3">一对一私教课</div>
              </div>
              <div class="time">
                <i class="i-time icon"></i>
                60min
              </div>
              <Appoint @click.native="show(0)"></Appoint>
            </div>
          </div>
            <div class="cont" style="display: none">
              <div class="time-list">
              <Radio-group class='time-group' v-model="appointTime" type="button">
                <div class="d">
                  <Radio label="北京">08:00</Radio>
                </div>
                <div class="d">
                  <Radio label="2">09:00</Radio>
                </div >
                <div class="d">
                  <Radio label="1">10:00</Radio>
                </div>
                <div class="d">
                  <Radio label="3">11:00</Radio>
                </div>
              </Radio-group>
            </div>
              <div class="btns">
                <Row>
                  <Col span="11">
                    <Button class="btn-appoint" @click="skipToPage('lession-submit')">预约</Button>
                  </Col>
                  <Col span="12" offset="1">
                    <Button class="btn-appoint food" @click="skipToPage('lession-submit')">预约并约定营养餐</Button>
                  </Col>
                </Row>
              </div>
            </div>
        </div>
          <div class="item">
            <div class="media">
              <div class="fl">
                <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="课程图片">
              </div>
              <div class="rt">
                <div class="row">
                  <a class="fr link">课程详情</a>
                  <div class="h3">一对一私教课</div>
                </div>
                <div class="time">
                  <i class="i-time icon"></i>
                  60min
                </div>
                <Appoint></Appoint>
              </div>
            </div>
            <div class="cont" style="display: none">
              <div class="time-list">
                <Radio-group class='time-group' v-model="appointTime" type="button">
                  <div class="d">
                    <Radio label="北京">08:00</Radio>
                  </div>
                  <div class="d">
                    <Radio label="2">09:00</Radio>
                  </div >
                  <div class="d">
                    <Radio label="1">10:00</Radio>
                  </div>
                  <div class="d">
                    <Radio label="3">11:00</Radio>
                  </div>
                </Radio-group>
              </div>
            </div>
          </div>
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
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vhedaer from '../components/Header.vue'
  import  Vfooter from'../components/Footer.vue'
  import  {Toast} from 'mint-ui'
  import Appoint  from '../components/AppointLesson.vue'
  import getDateFormatter from '../common/formatterDate'
  export default{
    data(){
      return{
        selected:0,
        today:0,
        timeList:[],
        pickerVisible:'',
        nowday:'',
        button1:'a',
        /*约课时间点*/
        appointTime:''
      }
    },
    methods:{
      skipToPage(name){
          this.$router.push(name)
      },
      /*显示时间点*/
      show(index){
          let cont = document.getElementsByClassName('cont');
           cont[index].style.display=cont[index].style.display=='none'?'inline-block':'none';
      },
      getTimeList(data){
        let date= data||new Date();
        this.selected = getDateFormatter.formatterDate(date)
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
      init(){

      }
    },
    created:function () {
      this.getTimeList();
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter,
      'Appoint':Appoint
    }
  }
</script>
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
      background-image: url(../assets/calendar.png);
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

  /*动画样式*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
