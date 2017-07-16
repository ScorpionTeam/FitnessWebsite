<template>
  <div class="wrapper">
    <div class="header">
      <div class="index-bar">
        <div class="fl">
          当前场馆 :
          <a class="fc1" href="#">
            亚运村店
            <Icon type="ios-arrow-right"></Icon>
          </a>
        </div>
        <div class="fr">
          <a href="" class="btn">
            <Icon type="ios-email-outline" class="i-msg"></Icon>
            <span class="num-info">3</span>
          </a>
        </div>
      </div>
    </div>
    <div class="vip-card">
      <div class="clearfix">
        <div class="fl pic">
          <img src="../assets/1.jpg" alt="">
        </div>
        <div class="fl info">
          <div class="name">{{member.name}}</div>
          <p>会员卡</p>
        </div>
        <div class="fr valid">
          {{memberCard.startDate}} 至 {{memberCard.endDate}} 有效
        </div>
      </div>
      <div class="level">
        <span>VIP</span>{{memberCard.typeName}}
      </div>
      <div class="number">{{memberCard.cardNo}}</div>
    </div>
    <div class="notice">
      <div class="item">
        <div class="fr">2017-06-28</div>
        <div class="mid">
          <sub>New</sub>
          标题标题标题
        </div>
      </div>
      <div class="item">
        <div class="fr">2017-06-28</div>
        <div class="mid">
          <sub>New</sub>
          标题标题标题
        </div>
      </div>
      <div class="item">
        <div class="fr">2017-06-28</div>
        <div class="mid">
          <sub>New</sub>
          标题标题标题
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="item">
        <a class="link" style="background: #fbd51c" @click="skipToPage('introduce')">
          <div class="i-wrap">
            <img src="../assets/order.png" alt="">
          </div>
          <div class="tit">场馆介绍</div>
        </a>
      </div>
      <div class="item">
        <a  class="link" style="background: #63d2f3" @click="openModal">
          <div class="i-wrap">
            <img src="../assets/user.png" alt="">
          </div>
          <div class="tit">约课</div>
        </a>
      </div>
      <div class="item">
        <a class="link" style="background: #f36486" @click="skipToPage('schedule')">
          <div class="i-wrap">
            <img src="../assets/card.png" alt="">
          </div>
          <div class="tit">本月日程</div>
        </a>
      </div>
      <div class="item">
        <a class="link" style="background: #448aca" @click="skipToPage('activitys')">
          <div class="i-wrap">
            <img src="../assets/clock.png" alt="">
          </div>
          <div class="tit">热门活动</div>
        </a>
      </div>
      <div class="item">
        <a class="link" style="background: #c36" @click="skipToPage('question')">
          <div class="i-wrap">
            <img src="../assets/i-wd.png" alt="">
          </div>
          <div class="tit">健康问答</div>
        </a>
      </div>
      <div class="item">
        <a  class="link" style="background: #c66fd0" @click="skipToPage('profile')">
          <div class="i-wrap">
            <img src="../assets/team2.png" alt="">
          </div>
          <div class="tit">个人中心</div>
        </a>
      </div>
    </div>
    <VFooter></VFooter>
    <Modal title="约课选择" v-model="selectSubject"
    >
      <ul class="select-shop">
        <li class="item">
          <a class="link" @click="skipToPage('private-lesson')">
            <div class="fl" style="background-color:#63d2f3;">
              <div class="i-wrap">
                <img src="../assets/user.png" alt="">
              </div>
              <div class="name">私教预约</div>
            </div>
            <div class="txt">私教预约</div>
          </a>
        </li>
        <li class="item">
          <a class="link" @click="skipToPage('group-lesson')">
            <div class="fl" style="background-color:#19bfaf;">
              <div class="i-wrap">
                <img src="../assets/user.png" alt="">
              </div>
              <div class="name">团教预约</div>
            </div>
            <div class="txt">团教预约</div>
          </a>
        </li>
      </ul>
      <!--将关闭图标和底部给去掉-->
      <div slot="close"></div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
  import Footer from '../components/Footer.vue'
  import MessageBox from '../common/component'
  export default{
    data(){
      return {
        /*用户*/
        member:{
          name:'呵呵'
        },
        /*会员卡*/
        memberCard:{
          cardNo:'1234 5678 9012 3456 7890 123',
          startDate:'2017-05-30',
          typeName:'银卡',
          endDate:'2017-06-21'

        },
        /*选课模态*/
        selectSubject:false
      }
    },
    methods:{
      skipToPage(name){
        this.$router.push(name)
      },
      openModal(){
        this.selectSubject = !this.selectSubject;
      },
      init(){
        let self = this;
        /*初始化VIP卡*/
        self.$http.get('/memberCard/memberCardInfo?id='+localStorage.getItem('cardId')).then(function (res) {
          if(res.result==1){
            self.memberCard = res.data
          }else {
            MessageBox.warnAlert(self,res.error.message)
          }
        })
        /*初始化个人信息*/
        self.$http.get('/member/memberInfo?id='+localStorage.getItem('fitId')).then(function (res) {
            console.log(res)
          if(res.result==1){
            self.member = res.data
          }else {
            MessageBox.warnAlert(self,res.error.message)
          }
        })
      }
    },
    components:{
      'VFooter':Footer
    },
    created:function () {
      this.init()
      console.log(this.$http.defaults.baseURL)
    }
  }
</script>
<style  rel='stylesheet/scss' lang='scss'>
  .wrapper{
    max-width: 750px;
    font-size: 1.6rem;
    min-width: 100%;
    color:#000;
    background:#f8f8f8;
    .header{
      background: white;
      height: 4.8rem;
      .index-bar{
        height: 4.8rem;
        padding:0 1.5rem;
        line-height: 4.8rem;
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
    }
    .vip-card{
      font-size: 1.4rem;
      height: 19rem;
      margin: 2rem 1rem;
      padding: 1rem;
      color: #fff;
      border-radius: 1rem;
      background-color: #83412b;
      box-shadow: 2px 2px 6px #999;
      background-image: -webkit-linear-gradient(-90deg, #83412b, #df624e);
      background-image: linear-gradient(180deg, #83412b, #df624e);
      .clearfix{
        zoom:1;
        .pic{
          width:5rem;
          height: 5rem;
          img{
            border-radius: 50%;
            height: 100%;
            width: 100%;
            vertical-align: top;
            object-fit:cover
          }
        }
        .info{
          margin-left: 1rem;
          .name{
            padding: 0.3rem 0;
          }
        }
        .valid{
          line-height: 5rem;
          font-size: 1.2rem;
        }
      }
      .level{
        margin-top:8rem;
        span{
          font-size: 3.6rem;
        }
      }
      .number{
        margin-top: 1rem;
        font-size: 1.6rem;
      }
    }
    .notice{

      padding-bottom: 1rem;
      .item{
        margin: 1rem  1rem;
        padding: 1rem;
        border-bottom: 1px dashed #ddd;
      }
      .fr{
        color: #888;
      }
      .mid{
        padding-right: 1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        sub{
          color:#ff0000;
          padding-right: 0.3rem;
          position: relative;
          top:-0.5em;
        }
      }
    }
    .columns{
      padding: 0  0.8rem 0.8rem 0;
      overflow: hidden;
      .item{
        width: 33.33%;
        float: left;
        padding: .8rem 0 0 .8rem;
        .link{
          display: block;
          height: 10rem;
          text-align: center;
          .i-wrap{
            padding: 1.2rem 0;
            font-size: 0;
            img{
              height: 3.5rem;
            }
          }
          .tit{
            font-size: 1.7rem;
            color:#fff;
          }
        }
      }
    }
  }
</style>
