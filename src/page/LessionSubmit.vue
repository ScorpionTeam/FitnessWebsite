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
            <div class="h3">一对一私教课</div>
          </div>
          <div class="time">
            <span style="color:#00bfbf;">望江店</span>
            <i class="fr icon i-arrow-right1"></i>
          </div>
          <div class="time">
            <i class="i-time icon"></i>
            60min
          </div>
        </div>
      </div>
    </div>
    <div class="lesson-submit">
      <div class="row mt">
        <div class="lf">课程时间</div>
        <div class="rt">2017年6月17日23:20</div>
      </div>
      <div class="row">
        <div class="lf">教练</div>
        <div class="rt">
          <div class="coach-info">
            <div class="pic">
              <img src="../assets/1.jpg" alt="">
            </div>
            <div class="info">
              <div class="name">匡威</div>
              <Rate disabled v-model="valueDisabled"></Rate>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt">
        <div class="lf">备注</div>
        <div class="rt">
          <Input placeholder="请填写备注"></Input>
        </div>
      </div>
    </div>
    <Button class="btn-submit">确定预约</Button>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vhedaer from '../components/Header.vue'
  import  Vfooter from'../components/Footer.vue'
  export default{
    data(){
      return{
        valueDisabled:5
      }
    },
    methods:{
        test(){
            console.log(1)
        }
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter
    }
  }
</script>
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
</style>
