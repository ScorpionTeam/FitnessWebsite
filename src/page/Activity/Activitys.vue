<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <div class="banner">
        <Carousel  v-model="currentPic" autoplay
                   :height="100" arrow="never">
          <Carousel-item>
            <div class="pic">
              <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="">
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="pic">
              <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="">
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="pic">
              <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="">
            </div>
          </Carousel-item>
        </Carousel>
      </div>
      <div class="tab">
        <Tabs v-model="tabName" >
          <Tab-pane label="最新活动" name="new">
            <p style="text-align: center" v-if="newNone">暂无活动！</p>
            <div class="newActivity" v-for='newAct in newActList' @click="joinActivity(newAct.id)">
              <a class="item">
                <div class="cover">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" >
                </div>
                <div class="cont">
                  <div class="fl sub">New</div>
                  <div class="fr sub">Hot</div>
                  <div class="mid" style="color:#000">{{newAct.name}}</div>
                  <div class="deadline">报名截止时间：{{newAct.endDate.substring(-1,16)}}</div>
                  <div class="info">
                    <div class="fl">阅读数: {{newAct.visitTotal}}</div>
                    <div class="fr">报名数: {{newAct.applyTotal}}</div>
                  </div>
                </div>
              </a>
            </div>
          </Tab-pane>
          <Tab-pane label="我的活动" name="my" >
            <p style="text-align: center">暂无活动！</p>
            <div class="myActivity">
              <div class="item" v-for="myAct in myActList" @click="openDetail(myAct.id)">
                <a class="inner">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" class="img">
                  <div class="mask"></div>
                  <div class="info">
                    <p>{{myAct.endDate.substring(5,10)}}</p>
                    <p class="act_name">{{myAct.name}}</p>
                    <p>( 已结束 )</p>
                  </div>
                </a>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="往期活动" name="pass">
            <p style="text-align: center" v-if="pastNone">暂无活动！</p>
            <div class="newActivity" v-for='pastAct in pastActList' @click="openDetail(pastAct.id)">
              <a class="item">
                <div class="cover">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" >
                </div>
                <div class="cont">
                  <div class="mid" style="color:#000;font-size: 1.6rem">{{pastAct.name}}</div>
                  <div class="deadline">报名截止时间：{{pastAct.endDate.substring(-1,16)}}</div>
                  <div class="info">
                    <div class="fl">阅读数: {{pastAct.visitTotal}}</div>
                    <div class="fr">报名数: {{pastAct.applyTotal}}</div>
                  </div>
                </div>
              </a>
            </div>
          </Tab-pane>
        </Tabs>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  export default{
    data(){
      return{
        currentPic:0,
        tabName:'new',
        newActList:[],
        pastActList:[],
        myActList:[],
        /*无活动标志*/
        newNone:false,
        myNone:false,
        pastNone:false
      }
    },
    methods:{
      /*打开活动详情*/
      openDetail(id){
        this.$router.push({ name: '活动详情', params:{ id: id }})
      },
      /*参加活动*/
      joinActivity(id){
        this.$router.push({ name: '参加活动', params:{ id: id }})
      },
      newActivity(){
        let self = this;
        let url ='/activity/newActivity?pageNo=1&pageSize=5&stadiumId='+localStorage.getItem('stadiumId')
        self.$http.get(url).then(function(res){
          console.log(res)
          if(res.result==1){
            self.newNone= res.data == undefined?true:false
            self.newActList =res.data
          }
        })
      },
      myActivity(){
        let self = this;
        let url ='/activity/myActivity?pageNo=1&pageSize=5&memberId='+localStorage.getItem('fitId')
        self.$http.get(url).then(function(res){
          if(res.result==1){
            self.myNone= res.data == undefined?true:false
            self.myActList = res.data
          }
        })
      },
      pastActivity(){
        let self = this;
        let url ='/activity/pastActivity?pageNo=1&pageSize=5&stadiumId='+localStorage.getItem('stadiumId')
        self.$http.get(url).then(function(res){
          if(res.result==1){
            self.pastNone= res.data == undefined?true:false
            self.pastActList= res.data
          }
        })
      },
      init(){
        this.newActivity()
        this.myActivity()
        this.pastActivity()
      }
    },
    created:function () {
      this.init();
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .content{
    .banner{
      height:10rem;
      .pic{
        height: 100%;
        img{
          width: 100%;
          height:100%;
          object-fit: cover;
        }
      }
    }
    .img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .tab{
      .newActivity{
        .item{
          display: block;
          padding:  1.5rem;
          overflow: hidden;
          border-bottom: 1px solid #eee;
          .cover{
            float: left;
            width: 11rem;
            height: 8rem;
            margin-right: 1rem;
          }
          .cont{
            position: relative;
            min-height: 8rem;
            overflow: hidden;
            .fl{
              margin-right: 0.5rem;
            }
            .fr{
              margin-left: 0.5rem;
            }
            .sub{
              line-height: 1;
              color: #f00!important;
              font-size: 1.2rem;
            }
            .mid{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 1.6rem;
            }
            .deadline{
              margin-top: 0.6rem;
              color: #868686;
            }
            .info{
              position: absolute;
              right: 0;
              bottom: 0;
              left: 0;
              padding-top: 1rem;
              overflow: hidden;
              color: #999;
              font-size: 1.2rem;
            }
          }
          img{
            width: 100%;
            height: 100%;
            vertical-align: top;
            object-fit: cover;
          }
        }
      }
      .myActivity{
        padding-left: 0.5rem;
        padding-right: 1.5rem;
        .item{
          float: left;
          width: 33.33%;
          margin-top: 1rem;
          padding-left: 1rem;
          .inner{
            display: block;
            position: relative;
            height: 8rem;
            overflow: hidden;
            .info{
              position: absolute;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
              padding-bottom: 0.3rem;
              line-height: 1.5;
              text-align: center;
              color: #fff;
              font-size: 1.2rem;
            }
            .mask{
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: rgba(0,0,0,0.5);
            }
          }

        }
      }
    }
  }
  .act_name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
