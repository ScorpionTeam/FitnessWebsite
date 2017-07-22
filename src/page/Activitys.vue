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
            <div class="newActivity" @click="openDetail(2)">
              <a class="item">
                <div class="cover">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" >
                </div>
                <div class="cont">
                  <div class="fl sub">New</div>
                  <div class="fr sub">Hot</div>
                  <div class="mid" style="color:#000">活动标题活动标题活动标题</div>
                  <div class="deadline">报名截止时间：2017-6-18 16:48</div>
                  <div class="info">
                    <div class="fl">阅读数: 100</div>
                    <div class="fr">报名数: 100</div>
                  </div>
                </div>
              </a>
            </div>
            <div class="newActivity">
              <a class="item">
                <div class="cover">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" >
                </div>
                <div class="cont">
                  <div class="fl sub">New</div>
                  <div class="fr sub">Hot</div>
                  <div class="mid" style="color:#000">活动标题活动标题活动标题</div>
                  <div class="deadline">报名截止时间：2017-6-18 16:48</div>
                  <div class="info">
                    <div class="fl">阅读数: 100</div>
                    <div class="fr">报名数: 100</div>
                  </div>
                </div>
              </a>
            </div>
          </Tab-pane>
          <Tab-pane label="我的活动" name="my">
            <div class="myActivity">
              <div class="item">
                <a class="inner">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" class="img">
                  <div class="mask"></div>
                  <div class="info">
                    <p>3月15日</p>
                    <p>香山徒步活动</p>
                    <p>( 已结束 )</p>
                  </div>
                </a>
              </div>
              <div class="item">
                <a class="inner">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" class="img">
                  <div class="mask"></div>
                  <div class="info">
                    <p>3月15日</p>
                    <p>香山徒步活动</p>
                    <p>( 已结束 )</p>
                  </div>
                </a>
              </div>
              <div class="item">
                <a class="inner">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" class="img">
                  <div class="mask"></div>
                  <div class="info">
                    <p>3月15日</p>
                    <p>香山徒步活动</p>
                    <p>( 已结束 )</p>
                  </div>
                </a>
              </div>
              <div class="item">
                <a class="inner">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" class="img">
                  <div class="mask"></div>
                  <div class="info">
                    <p>3月15日</p>
                    <p>香山徒步活动</p>
                    <p>( 已结束 )</p>
                  </div>
                </a>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="往期活动" name="pass">
            <div class="newActivity">
              <a class="item">
                <div class="cover">
                  <img src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="" >
                </div>
                <div class="cont">
                  <div class="mid" style="color:#000;font-size: 1.4rem">活动标题活动标题活动标题</div>
                  <div class="deadline">报名截止时间：2017-6-18 16:48</div>
                  <div class="info">
                    <div class="fl">阅读数: 100</div>
                    <div class="fr">报名数: 100</div>
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
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  export default{
    data(){
      return{
        currentPic:0,
        tabName:'new'
      }
    },
    methods:{
      /*打开活动详情*/
      openDetail(id){
          this.$router.push({ name: '活动详情', params:{ id: id }})
      },
      newActivity(){
        let self = this;
        let url ='/activity/newActivity?pageNo=1&pageSize=5&stadiumId='+localStorage.getItem('stadiumId')
        self.$http.get(url).then(function(res){
          console.log(res)
        })
      },
      myActivity(){
        let self = this;
        let url ='/activity/myActivity?pageNo=1&pageSize=5&memberId='+localStorage.getItem('fitId')
        self.$http.get(url).then(function(res){
          console.log(res)
        })
      },
      pastActivity(){
        let self = this;
        let url ='/activity/pastActivity?pageNo=1&pageSize=5&stadiumId='+localStorage.getItem('stadiumId')
        self.$http.get(url).then(function(res){
          console.log(res)
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
</style>
