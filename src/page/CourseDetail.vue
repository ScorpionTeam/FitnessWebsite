<template>
    <div>
        <Vheader></Vheader>
        <div class="banner">
        <Carousel  v-model="currentPic" autoplay
                   :height="280" arrow="never">
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
        <div class="course-detail">
          <div class="hd">
            <p class="h1">一对一私教课程</p>
            <div class="info">
              <span class="item">
                <i class="icon i-time"></i>
                60min
              </span>
              <span class="item">
                <i class="icon i-shop"></i>
                望京店
              </span>
            </div>
          </div>
          <div class="bd">
            <div class="evaluation">
                <div class="item">
                  <p>教练评分</p>
                  <p class="score">5.0</p>
                  <Rate disabled v-model="valueDisabled"></Rate>
                </div>
                <div class="item">
                  <p>课程评分</p>
                  <p class="score">5.0</p>
                  <Rate disabled v-model="valueDisabled"></Rate>
                </div>
                <div class="item">
                  <p>服务评分</p>
                  <p class="score">5.0</p>
                  <Rate disabled v-model="valueDisabled"></Rate>
                </div>
            </div>
            <div class="impressions ">
              <div class="hd">印象</div>
              <div class="bd">
                <Tag type="border"  color="yellow" class="tag">赞老师专业和耐心的指导！</Tag>
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
  import Vhedaer from '../components/Header.vue'
  import  Vfooter from'../components/Footer.vue'
  export default{
      data(){
          return{
            currentPic:1,
            valueDisabled:5
          }
      },
      components:{
        'Vheader':Vhedaer,
        'Vfooter':Vfooter,
      }
  }
</script>
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
