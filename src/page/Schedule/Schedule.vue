<style scoped rel='stylesheet/scss' lang='scss'>
  .calendar{
    background: #fff;
    .hd{
      padding: 2rem;
      background-color: #f8f8f8;
    }
    .content{
      margin: 0 2rem;
      padding-top: 2rem;
      .container{
        table {
          width: 100%;
          box-sizing: border-box;
          table-layout: fixed;
          border-collapse: collapse;
          border-spacing: 0;
          font-size: 1em;
          th{
            height: 4rem;
            vertical-align: middle;
            border: 1px solid #ddd;
          }
          td{
            border: 1px solid #ddd;
            height: 4rem;
            position: relative;
            span{
              padding: 2px;
              position: absolute;
              right: 0;
              top:0;
            }
          }
        }
      }
    }
    .ft{
      padding: 1rem 2rem 0;
      .item{
        margin-top:1rem;
        .lump{
          display: inline-block;
          width: 4.4rem;
          height: 3.2rem;
          margin-right: 1rem;
          vertical-align: middle;
        }
      }
    }
    .private{
      background-color: #008000;
      color:#fff;
    }
    .group{
      background: #fc0;
      color:#fff;
    }
    .late{
      background: #3cc;
      color:#fff;
    }
    .abcend{
      background: #f00;
      color:#fff;
    }
  }
  .modal_footer{
    text-align: center;
    padding: 5px 0;
    color: #40AFFE;
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="calendar">
      <div class="hd">
        <Row :gutter="17">
          <Col span="7" >
          <Select v-model="year">
            <Option v-for="year in yearList" :value="year.value" :key='year.value' :label="year.label"></Option>
          </Select>
          </Col>
          <Col span="7">
          <Select v-model="month">
            <Option v-for="month in monthList" :value="month.value" :key='month.value' :label="month.label"></Option>
          </Select>
          </Col>
          <Col span="3">
          <Button type="success" style="background: #00bfbf;font-size: 1.4rem" @click="query">查询</Button>
          </Col>
        </Row>
      </div>
      <div class="content">
        <div class="container">
          <table>
            <tr>
              <th>周日</th>
              <th>周一</th>
              <th>周二</th>
              <th>周三</th>
              <th>周四</th>
              <th>周五</th>
              <th>周六</th>
            </tr>
            <tr v-for=" week in monthTable">
              <td v-for=" day in week" @click="openDetail(day.day)">
                <span>{{day.day}}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="ft">
        <div class="item">
          <i class="lump" style="  background-color: #008000;"></i>
          私教
        </div>
        <div class="item">
          <i class="lump" style="background: #fc0"></i>
          团课
        </div>
        <div class="item">
          <i class="lump" style="background: #3cc"></i>
          迟到
        </div>
        <div class="item">
          <i class="lump" style="background: #f00"></i>
          缺席
        </div>
      </div>
    </div>
    <Modal v-model="detailFlag" title="日程详情">
      <div slot="footer" class="modal_footer" @click="closeModal">知道了</div>
    </Modal>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  import getTime from '../../common/getTime'
  export default{
    data(){
      return {
        year:'',
        month:'',
        yearList:[],
        monthList:[],
        monthTable:[],
        /*模态标志*/
        detailFlag:true
      }
    },
    methods:{
      init(){
        this.yearList = getTime.getYear()
        this.monthList = getTime.getMonth()
        this.year = this.yearList[0].value
        this.month = this.monthList[0].value
        this.query()
      },
      query(){
        /*初始化*/
        this.monthTable = [];
        /*查询当前月内时间*/
        let current = this.year+'-'+this.month+'-1'
        let date = new Date(current)
        /*获取上个月的最后一天*/
        let lastMonthDay = new Date(current)
        lastMonthDay.setDate(0)
        let lastMonthLastDay = lastMonthDay.getDate()
        /*获取本月最后一天*/
        let nex = this.year+'-'+(this.month+1)+'-1'
        let Month = new Date(nex);
        Month.setDate(0)
        let MonthLastDay =Month.getDate()
     /*   console.log('last='+lastMonthLastDay)
        console.log('now='+MonthLastDay)*/
        /*当月1号所属周几*/
        let nowDay = date.getDay()==0?7:date.getDay();
        /*console.log('nowday='+nowDay)*/
        /*循环获取6行时间*/
        for(let i = 0;i<6;i++){
          let c = []
          for(let j = 1 ;j<=7;j++){
              let dayObj={}
            if(i==0){
              if(j<nowDay){
                dayObj.day = lastMonthLastDay+j+1-nowDay
                c.push(dayObj)
              }else {
                dayObj.day = j-nowDay+1
                c.push(dayObj)
              }
            }else {
              /*判断是否换行*/
              if(c.length!=0){
                /*判断是否超过本月最后一天*/
                if(c[j-2].day==MonthLastDay){
                  dayObj.day = 1
                  c.push(dayObj)
                }else {
                  dayObj.day = c[j-2].day+1
                  c.push(dayObj)
                }
              } else{
                /*判断是否超过本月最后一天*/
                if(this.monthTable[i-1][6].day==MonthLastDay){
                  dayObj.day = 1
                  c.push(dayObj)
                }else {
                    dayObj.day =this.monthTable[i-1][6].day+1
                  c.push(dayObj)
                }
              }
            }
          }
          this.monthTable.push(c)
        }
        console.log(this.monthTable)
      },
      /*关闭模态*/
      closeModal(){
          this.detailFlag=!this.detailFlag
      },
      /*查看详情*/
      openDetail(date){
          console.log(date)
      }
    },
    created:function () {
      this.init()
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    }
  }
</script>
