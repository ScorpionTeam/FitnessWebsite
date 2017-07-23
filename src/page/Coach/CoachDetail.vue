<style scoped rel='stylesheet/scss' lang='scss'>
  .coach-detail{
    .hd{
      padding-top: 6.6rem;
      background: #0db14b;
      .inner{
        position: relative;
        padding: 1px 2rem 2rem;
        background-color: #fff;
        .avatar {
          width: 8rem;
          height: 8rem;
          margin: -4rem auto 0;
          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            vertical-align: top;
            object-fit: cover;
          }
        }
        .name{
          margin: 1rem 0;
          text-align: center;
          font-size: 1.8rem;
          font-weight: bold;
        }
        .describe{
          text-align: center;
          line-height: 1.6;
        }
        &:after {
          position: absolute;
          right: 0;
          top: 100%;
          left: 0;
          height: 1.3rem;
          background: url(../../assets/border-arrow.png) repeat-x 0 0;
          background-size: auto 100%;
          content: '';
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
        .standard {
          padding: 2.2rem 2.2rem 3.5rem;
          text-align: left;
          font-size: 1.3rem;
          border-left: 1px solid #eee;
          span{
            color: #fea500;
          }
        }
      }
      .specialty {
        padding: 1.2rem 2rem;
        .tag-list {
          margin-top: 1.2rem;
          .tag{
             margin: 0 1.5rem 1rem 0;
           }
        }
      }
      .panel {
        border-top: 1.5rem solid #eee;
        .phd,.pbd{
          padding: 1.5rem  2rem;
        }
        .pbd{
          border-top: 1px solid #ddd;
          .tit{
            display: inline-block;
            width: 8.5rem;
            text-align: right;
          }
          .experience{
            .time {
              margin: 0 -2rem;
              padding: 1rem 2rem;
              color: #0db14b;
              background-color: #ebfafa;
            }
            .info {
              margin-top: 1.5rem;
            }
            .richtxt {
              word-wrap: break-word;
              font-size: 1.4rem;
            }
          }
          .tag{
            margin: 0 1.5rem 1rem 0;
          }
        }
        .c3 {
          color: #0db14b;
        }
      }
    }
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="coach-detail">
      <div class="hd">
        <div class="inner">
          <div class="avatar">
            <img src="../../assets/1.jpg" alt="">
          </div>
          <div class="name">呵呵</div>
          <div class="describe">12321213</div>
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
          <div class="item standard">评价基于<span>5</span>条评论</div>
        </div>
        <div class="specialty">
          <div class="title">擅长（根据课程计划统计）：</div>
          <div class="tag-list">
            <Tag type="border" class="tag">好好好</Tag>
            <Tag type="border" class="tag">好好好</Tag>
            <Tag type="border" class="tag">好好阿萨德啊啊所多好</Tag>
            <Tag type="border" class="tag">好好好</Tag>
            <Tag  type="border" class="tag">阿萨德啊啊大</Tag>
          </div>
        </div>
        <div class="panel">
          <div class="phd c3">
            <i class="icon i-info"></i>
            基本信息
          </div>
          <div class="pbd">
            <i class="icon i-phone"></i>
            电话 18651811111
          </div>
        </div>
        <div class="panel">
          <div class="phd c3">
            <i class="icon i-auth"></i>
            资质认证
          </div>
          <div class="pbd">
            <p><span class="tit">发证机构：</span>赛普健身学院</p>
            <p><span class="tit">发证日期：</span>2015-09-18</p>
            <p><span class="tit">有效期：</span>2015-09-18</p>
          </div>
        </div>
        <div class="panel">
          <div class="phd c3">
            <i class="icon i-bag"></i>
            工作经历
          </div>
          <div class="pbd">
            <div class="experience">
              <div class="time">2016.12.13-至今</div>
              <div class="info richtxt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              </div>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="phd c3">
            <i class="icon i-message"></i>
            学员评价
          </div>
          <div class="pbd">
            <Tag class="tag" type="border">么么么</Tag>
            <Tag class="tag" type="border">666666</Tag>
            <Tag class="tag" type="border">好好好</Tag>
          </div>
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
        valueDisabled:5
      }
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter,
    }
  }
</script>

