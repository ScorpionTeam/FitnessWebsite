<style scoped rel='stylesheet/scss' lang='scss'>
  .hd{
    background: #fff;
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
          margin-top: 0.2rem;
          color: #888;
        }
      }
    }
  }
  .lesson-submit{
    .row {
      display: table;
      width: 100%;
      padding: 1.5rem;
      font-size: 1.6rem;
      border-top: 1px solid #f8f8f8;
      background-color: #fff;
      .lf{
        display: table-cell;
        width: 7.2rem;
        vertical-align: middle;
      }
      .rt{
        display: table-cell;
        padding-left: 1rem;
        vertical-align: middle;
        text-align: right;
        color: #999;
        .coach-info {
          display: inline-block;
          vertical-align: top;
          overflow: hidden;
          font-size: 0;
          .pic {
            float: left;
            width: 5rem;
            height: 5rem;
            img{
              width: 100%;
              height: 100%;
              vertical-align: top;
              object-fit: cover;
              border-radius: 50%;
            }
          }
          .info {
            float: left;
            margin-left: 1rem;
            vertical-align: top;
            text-align: left;
            font-size: 1.4rem;
          }
        }
      }
    }
    .mt{
      margin-top: 1rem;
    }
  }
  .btn-submit{
    display: block;
    width: 15rem;
    height: 4rem;
    margin: 2rem auto 0;
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
    background-color: #00bfbf;
    border-radius: .5rem;
  }
  /*套餐*/
  .meal{
    border-top: 1px solid #f8f8f8;
    background: #fff;
    padding: 2rem;
    .introduce{
      text-overflow:ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .item{
      border-bottom:1px solid #c1c1c1 ;
      overflow: hidden;
      list-style: none;
      padding: 2rem 1rem;
      font-size: 1.6rem;
      .lf{
        float: left;
        text-align: center;
        margin-bottom: 0.5rem;
        width: 50%;
      }
      .rg{
        width: 50%;
        text-align: center;
        margin-bottom: 0.5rem;
        float: right;
      }
    }
    .meal-btn{
      margin-top: 1rem;
    }
    table{
      width: 100%;
      border-collapse: collapse;
      td{
        padding: 5px;
        border: 1px solid;
        text-align: center;
      }
    }
    /*  h3{
        display: inline-block;
        margin-right: 2rem;
      }
      .introduce{
        margin-left:2rem;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }*/
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="hd">
      <div class="media">
        <div class="fl">
          <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="课程图片">
        </div>
        <div class="rt">
          <div class="row">
            <div class="h3">{{courseDetail.name}}</div>
          </div>
          <div class="time">
            <span style="color:#00bfbf;">{{courseDetail.stadiumName}}</span>
            <i class="fr icon i-arrow-right1" @click="skipToPage('课程详情',courseDetail.id)"></i>
          </div>
          <div class="time">
            <i class="i-time icon"></i>
            {{courseDetail.timeTotal}}min
          </div>
        </div>
      </div>
    </div>
    <div class="lesson-submit">
      <div class="row mt">
        <div class="lf">课程时间</div>
        <div class="rt">{{courseDetail.startDate}}</div>
      </div>
      <div class="row">
        <div class="lf">教练</div>
        <div class="rt">
          <div class="coach-info">
            <div class="pic">
              <img src="../../assets/1.jpg" alt="">
            </div>
            <div class="info">
              <div class="name">{{coachDetail.name}}</div>
              <Rate disabled v-model="coachDetail.grade.coachScore"></Rate>
            </div>
          </div>
        </div>
      </div>
      <div class="meal" v-if="mealFlag">
        <ul>
          <li class="item" v-for="meal in mealList">
            <div class="lf">餐名:{{meal.name}}</div>
            <div class="rg">价格: {{meal.price}}</div>
            <div class="lf">余量: {{meal.total}}</div>
            <div class="lf">简介: {{meal.content}}</div>
            <Button class="meal-btn" long type="primary" @click="mealConfirm(meal.id)">预约</Button>
          </li>
        </ul>
        <!--<table>
          <tr>
            <td colspan="1">套餐名</td>
            <td colspan="1">余量</td>
            <td colspan="1">价格</td>
            <td colspan="7">简介</td>
          </tr>
          <tr v-for="meal in mealList">
            <td>
              <span>{{meal.name}}</span>
            </td>
            <td>
              <span>{{meal.total}}</span>
            </td>
            <td>
              <span>{{meal.price}}</span>
            </td>
            <td>
              <span class="introduce">{{meal.content}}</span>
            </td>
          </tr>
        </table>-->
      </div>
      <div class="row mt">
        <div class="lf">备注</div>
        <div class="rt">
          <Input placeholder="请填写备注"></Input>
        </div>
      </div>
    </div>
    <Button class="btn-submit" @click="submitConfirm" v-if="!mealFlag">确定预约</Button>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vhedaer from '../../components/Header.vue'
  import  Vfooter from'../../components/Footer.vue'
  import MessageBox from '../../common/component'
  export default{
    data(){
      return{
        disabledGroup:'',
        valueDisabled:5,
        courseDetail:{},
        coachDetail:{
          grade:{}
        },
        /*营养餐*/
        mealFlag:false,
        mealList:[],
        mealId:''
      }
    },
    methods:{
      init(){
        this.mealFlag=  this.$route.params.mealFlag == '1'?true:false
        this.getCourseDetail()
        this.getMealList()
      },
      skipToPage(name,id){
        if(id){
          this.$router.push({name:name,params:{id:id}})
        }else {
          this.$router.push(name)
        }
      },
      /*获取课程详情*/
      getCourseDetail(){
        let self = this;
        self.$http.get('/groupClass/classInfoByClassId?classId='+this.$route.params.id).then(function (res) {
          if(res.result==1){
            self.courseDetail = res.data
            self.getCoachDetail(res.data.coachId)
          }

        })
      },
      /*获取教练详情*/
      getCoachDetail(id){
        let self = this;
        self.$http.get('/coach/coachInfo?id='+id).then(function (res) {
          if(res.result==1){
            self.coachDetail = res.data
          }
        })
      },
      /*约课*/
      submitConfirm(id){
        let self = this;
        self.$messagebox.confirm('确认预约该课程？').then(function (res) {
          self.submitHandler()
        }).catch(function () {

        })
      },
      submitHandler(){
        let url = '/groupClass/apply?memberId='+localStorage.getItem('fitId')+'&classId='+this.courseDetail.id
        let self = this;
        self.$http.post(url).then(function (res) {
          console.log(res)
          if(res.result==1){
            self.$toast('预约成功')
          }else {
            MessageBox.warnAlert(self,res.error.message)
          }
        })
      },
      /*获取营养餐*/
      getMealList(){
        let self = this;
        this.$http.get('/meal/listByStadiumId?stadiumId='+localStorage.getItem('stadiumId')).then(function (res) {
          console.log(res)
          if(res.result==1){
            self.mealList = res.data
          }
        })
      },
      /*提交营养餐预定*/
      mealConfirm(mealId){
          let self= this;
          self.$messagebox.confirm('确认预定该套餐?').then(function (res) {
             self.mealSubmit(mealId)
          }).catch(function (cancel) {

          })
      },
      mealSubmit(mealId){
        let self=this;
        /*传递对象*/
        let data = {}
        data.memberId = Number(localStorage.getItem('fitId'))
        data.classId = Number(this.$route.params.id)
        data.mealId = mealId
        data.type = '1'
        console.log(data)
        let url = '/mealClass/apply?memberId='+data.memberId+'&classId='+data.classId+'&mealId='+data.mealId+'&type=1'
         self.$http.post(url).then(function (res) {
         if(res.result==1){
         self.$messagebox.alert('预约成功')
         }else {
           self.$messagebox.alert(res.error.message)
         }
         })
      }
    },
    created:function () {
      this.init()
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter
    }
  }
</script>

