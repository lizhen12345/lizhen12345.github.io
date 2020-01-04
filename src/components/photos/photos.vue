<template>
  <div class="photos-wrapper" >
      <div class="small">
        <el-row class="row" :gutter="20" v-for="(item,index) in rowCompute" :key="index" >
            <el-col class="col" :span="8">
                <div class="img-wrapper">
                    <img :src="photoIndex[3*index].url" class="photo">
                </div>
                <div class="detail">
                    <p class="date">拍摄日期：{{photoIndex[3*index].date}}</p>
                    <p class="date">拍摄地点：{{photoIndex[3*index].place}}</p>
                    <p class="date">拍摄内容：{{photoIndex[3*index].info}}</p>
                
                        <span class="big" @click="look(photoIndex[3*index].url)"><span class="el-icon-zoom-in"></span>查看大图</span>  
                        <favorite class="favorite"></favorite>
                    
                </div>
            </el-col>
            <el-col class="col" :span="8">
                <div class="img-wrapper">
                    <img :src="photoIndex[3*index+1].url"  class="photo">
                </div>
                <div class="detail">
                    <p class="date">拍摄日期：{{photoIndex[3*index+1].date}}</p>
                    <p class="date">拍摄地点：{{photoIndex[3*index+1].place}}</p>
                    <p class="date">拍摄内容：{{photoIndex[3*index+1].info}}</p>
                        <span class="big" @click="look(photoIndex[3*index+1].url)"><span class="el-icon-zoom-in"></span>查看大图</span>  
                        <favorite class="favorite"></favorite> 
                </div>
            </el-col>
            <el-col class="col" :span="8">
                <div class="img-wrapper">
                    <img :src="photoIndex[3*index+2].url"  class="photo">
                </div>
                <div class="detail">
                    <p class="date">拍摄日期：{{photoIndex[3*index+2].date}}</p>
                    <p class="date">拍摄地点：{{photoIndex[3*index+2].place}}</p>
                    <p class="date">拍摄内容：{{photoIndex[3*index+2].info}}</p>
                    
                        <span class="big" @click="look(photoIndex[3*index+2].url)"><span class="el-icon-zoom-in"></span>查看大图</span>  
                        <favorite class="favorite"></favorite> 
                    
                </div>
            </el-col>
        </el-row>

      </div>
      <div class="back" v-show="show">
          <div class="back-content">
            <img :src="lookUrl" class="back-img">
          </div>
          <div class="close">
              <span class="el-icon-close" @click="closeBig"></span>
          </div>
      </div>

  </div>
</template>

<script type='text/ecmascript-6'>
import favorite from './favorite'
export default {
  data() {
    return {
      photoIndex: [
        { url: "../../static/img/01.jpg",date:"2018-10-04",place :'南京',info :'南京玄武湖' },
        { url: "../../static/img/02.jpg" ,date:"2018-10-02",place :'苏州',info :'苏州树山'},
        { url: "../../static/img/03.jpg" ,date:"2018-10-05",place :'南京',info :'南京明城墙俯瞰玄武湖'},
        { url: "../../static/img/04.jpg" ,date:"2018-09-09",place :'上海',info :'上海海湾海边'},
        { url: "../../static/img/05.jpg" ,date:"2018-10-02",place :'苏州',info :'苏州树山'},
        { url: "../../static/img/06.jpg" ,date:"2018-08-31",place :'临沂',info :'老家晨雾'},
        { url: "../../static/img/07.jpg" ,date:"2019-02-05",place :'临沂',info :'老家石头山'},
        { url: "../../static/img/08.jpg" ,date:"2018-09-04",place :'临沂',info :'老家东山'},
        { url: "../../static/img/09.jpg" ,date:"2018-09-08",place :'上海',info :'华东理工大学夕阳'},
      ],
      lookUrl :'',
      show :false,
      type :false//控制点赞的样式
    };
  },
  computed:{
      rowCompute(){
        let rowSum = Math.ceil(this.photoIndex.length / 3);
        let a = [];
        for (let i = 1; i <= rowSum; i++) {
            a.push(i);
        }
        return a;

      }
  },
  methods:{
      look(target){
          debugger
          console.log(target)
          this.lookUrl = target
          this.show = true
      },
      closeBig(){
          this.show = false
      },
      love(){
          debugger
          this.type = !this.type
      }
  },
  components:{
      favorite
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.photos-wrapper{
    padding :20px
    .row{
      .col{
          background :#fff
        .img-wrapper{
            padding-top :10px
            width :100%
            height :250px
            display flex
            align-items center
            justify-content :center
            .photo{
                max-height :250px
                max-width :100%
            }
        }
        .detail{
            margin-top :5px
            position relative
            padding-left :10px
            .date,.info.place{
                margin :0
                font-size 14px
                color :#77909d
            }
            .big{
                position :absolute
                top :0
                right :10px
                font-size :16px
                color :#77909d
            }
            .favorite{
                position absolute
                bottom :10px
                right :30px                
            }
        }
      }
    }
    .back{
            position :fixed
            top :0
            left :0
            z-index :40
            width :100%
            height :100%
            backdrop-filter :blur(10px)
            background: rgba(7, 17, 27, 0.8)
            .back-content{
                display flex
                align-items center
                justify-content :center
                .back-img{
                    margin-top :20px
                    max-width 100%
                    max-height :600px
                }
            }
            .close{
                margin-top :10px
                text-align :center
                .el-icon-close{
                    font-size :32px
                    color :#fff
                }
            }
    }
}
    
</style>