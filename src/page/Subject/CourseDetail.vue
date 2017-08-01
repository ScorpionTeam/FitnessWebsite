<style scoped rel='stylesheet/scss' lang='scss'>
  .banner{
    height:28rem;
    .pic{
      height: 100%;
      img{
        width: 100%;
        height:100%;
        object-fit: cover;
      }
    }
  }
  .course-detail{
    .hd{
      padding: 1.5rem;
      background-color: #fff;
      .info{
        margin-top: 1rem;
        .item{
          display: inline-block;
          margin-right: 2rem;
          color: #888;
          font-size: 1.3rem;
        }
      }
    }
    .bd{
      margin-top: 1rem;
      background-color: #fff;
      .evaluation{
        padding: 1.8rem 0;
        overflow: hidden;
        .item{
          float: left;
          width:33.33%;
          text-align: center;
          .score{
            color: #fea500;
            font-size: 4.2rem;
          }
        }
      }
      .impressions{
        .hd{
          padding: 2rem 2rem 1rem;
          border: 1px solid #eee;
        }
        .bd{
          padding: 0 2rem;
          margin-top: 1rem;
          background-color: #fff;
          .tag{
            margin: 0 1.5rem 1rem 0;
          }
        }
      }
      .introduce{
        padding: 2rem;
        border-top: 1rem solid #f8f8f8;
      }
    }
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="banner">
      <Carousel  v-model="currentPic" autoplay
                 :height="280" arrow="never">
        <Carousel-item v-for="scroll in scrollList" :key="scroll.id">
          <div class="pic">
            <img :src="headerUrl+scroll.url" alt="">
          </div>
        </Carousel-item>
      </Carousel>
    </div>
    <div class="course-detail">
      <div class="hd">
        <p class="h1">{{courseDetail.name}}</p>
        <div class="info">
              <span class="item">
                <i class="icon i-time"></i>
                {{courseDetail.timeTotal}}min
              </span>
          <span class="item">
                <i class="icon i-shop"></i>
                {{courseDetail.stadiumName}}
              </span>
        </div>
      </div>
      <div class="bd">
        <div class="evaluation">
          <div class="item">
            <p>教练评分</p>
            <p class="score">{{coachDetail.grade.coachScore}}</p>
            <Rate disabled v-model="coachDetail.grade.coachScore"></Rate>
          </div>
          <div class="item">
            <p>课程评分</p>
            <p class="score">{{coachDetail.grade.classScore}}</p>
            <Rate disabled v-model="coachDetail.grade.classScore"></Rate>
          </div>
          <div class="item">
            <p>服务评分</p>
            <p class="score">{{coachDetail.grade.serviceScore}}</p>
            <Rate disabled v-model="coachDetail.grade.serviceScore"></Rate>
          </div>
        </div>
        <div class="impressions ">
          <div class="hd">印象</div>
          <div class="bd">
            <Tag type="border"  color="yellow" class="tag" v-for="(impression,index) in coachDetail.impressionList" :key="index">{{impression}}</Tag>
            <Tag type="border"  color="yellow" class="tag">很满意！</Tag>
            <Tag type="border"  color="yellow" class="tag">很满意！</Tag>
          </div>
        </div>
        <div class="introduce">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
        </div>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vhedaer from '../../components/Header.vue'
  import  Vfooter from'../../components/Footer.vue'
  export default{
    data(){
      return{
        currentPic:1,
        valueDisabled:5,
        courseDetail:{
          grade:{
            classScore:0,
            coachScore:0,
            serviceScore:0
          }
        },
        coachDetail:{
          grade:{}
        },
        /*轮播图列表*/
        scrollList:[],
        /*图片静态地址前缀*/
        headerUrl:'http://101.200.48.138/'
      }
    },
    methods:{
      init(){
        this.getCourseDetail()
      },
      /*获取课程详情*/
      getCourseDetail(){
        let self = this;
        self.$http.get('/groupClass/classInfo?id='+this.$route.params.id).then(function (res) {
          if(res.result==1){
            self.courseDetail = res.data
            self.getCoachDetail(res.data.coachId)
            self.scrollList = res.data.imgList
          }

        })
      },
      /*获取教练详情*/
      getCoachDetail(id){
        let self = this;
        self.$http.get('/coach/coachInfo?id='+id).then(function (res) {
          if(res.result==1){
            self.coachDetail = res.data
            console.log(res.data)
          }
        })
      },
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter,
    },
    created:function () {
      this.init()
    }
  }
</script>
