<template>
  <div class="photos-wrapper" >
      <div class="small">
          <el-radio v-model="radio" label="Down" @change="dateDown">时间正序</el-radio>
          <el-radio v-model="radio" label="Up" @change="dateUp">时间倒序</el-radio>
          <el-select v-model="value" placeholder="选择视频拍摄地" @change="selectItem" @clear='clearItem' clearable >
            <el-option
              v-for="item in computeCites"
              :key="item.value"
              :label="item.city"
              :value="item.value">
              <span style="float: left">{{ item.city }}</span>
            </el-option>
          </el-select>
        <el-row class="row" :gutter="20" v-for="(item,index) in rowCompute" :key="index" >
            <el-col class="col" :span="8" v-for="(item1,index1) in colCompute(index)" :key="index1">
                <div class="img-wrapper">
                    <img :src="item1.url" class="photo">
                </div>
                <div class="detail">
                    <p class="date">拍摄日期：{{item1.date}}</p>
                    <p class="date">拍摄地点：{{item1.place}}</p>
                    <p class="date">拍摄内容：{{item1.info}}</p>
                
                        <span class="big" @click="look(item1.url)"><span class="el-icon-zoom-in"></span>查看大图</span>  
                        <favorite class="favorite"></favorite>
                    
                </div>
            </el-col>
        </el-row>
        <el-row class="row" :gutter="20" v-if='lastrowCompute'>
            <el-col :span="6" class="col" v-for="(item3,index3) in lastrowCompute" :key='index3'>
                <div class="img-wrapper">
                    <img :src="item3.url" class="photo">
                </div>
                <div class="detail">
                    <p class="date">拍摄日期：{{item3.date}}</p>
                    <p class="date">拍摄地点：{{item3.place}}</p>
                    <p class="date">拍摄内容：{{item3.info}}</p>
                
                        <span class="big" @click="look(item3.url)"><span class="el-icon-zoom-in"></span>查看大图</span>  
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
      radio :'',
      value :'',
      photoIndexChange :[],
      photoIndex: [
        { url: "./static/img/01.jpg",date:"2018-10-04",place :'南京',info :'南京玄武湖' },
        { url: "./static/img/02.jpg" ,date:"2018-10-02",place :'苏州',info :'苏州树山'},
        { url: "./static/img/03.jpg" ,date:"2018-10-05",place :'南京',info :'南京明城墙俯瞰玄武湖'},
        { url: "./static/img/04.jpg" ,date:"2018-09-09",place :'上海',info :'上海海湾海边'},
        { url: "./static/img/05.jpg" ,date:"2018-10-02",place :'苏州',info :'苏州树山'},
        { url: "./static/img/06.jpg" ,date:"2018-08-31",place :'临沂',info :'老家晨雾'},
        { url: "./static/img/07.jpg" ,date:"2019-02-05",place :'临沂',info :'老家石头山'},
        
        { url: "./static/img/09.jpg" ,date:"2018-09-08",place :'上海',info :'华东理工大学夕阳'},
      ],
      lookUrl :'',
      show :false,
      type :false//控制点赞的样式
    };
  },
  created(){
      this.clearItem()//开始执行一次clearItem，保证渲染dom时有数据
  },
  computed:{
      rowCompute(){
        let rowSum = Math.ceil(this.photoIndexChange.length / 3);
        let a = [];
        for (let i = 0; i < rowSum; i++) {
            a.push(i);
        }
        return a;

      },
      lastrowCompute(){//计算是否最后一行不满3个 并返回剩下的photos数据
        let  zhengshu = Math.ceil(this.photoIndexChange.length / 3);
        let yushu =this.photoIndexChange.length % 3 
        let a=[]
        if(yushu!=0){
            a = this.photoIndexChange.slice(3*zhengshu)
            
        }else{
          
        }
       
        return a
      },
    computeCites(){//返回视频中包含哪几个视频拍摄地
      
        let arr = []
        for (let i= 0;i<this.photoIndex.length;i++){
          if (arr.indexOf(this.photoIndex[i].place)==-1){
            arr.push(this.photoIndex[i].place)
          }
        }
        let obj =[]
        
        for (let i =0;i<arr.length;i++){
          let oneObj = new Object()//每次新建一个对象，才能避免向数组中push对象被覆盖问题
          oneObj.value = '选项'+(i+1)
          oneObj.city = arr[i]
          
          obj.push(oneObj)
         
        }
        console.log(obj)
        return obj
      }
  },
  methods:{
    colCompute(index){//计算每一行中的元素
        let arr = []
        arr = this.photoIndexChange.slice(3*index,3*index+3)
        
        return arr
    },
      look(target){//查看大图
          debugger
          console.log(target)
          this.lookUrl = target
          this.show = true
      },
      closeBig(){//关闭大图
          this.show = false
      },
      love(){
          debugger
          this.type = !this.type
      },
      dateDown(){
          this.photoIndexChange.sort(function(a,b){
                let date1 = a.date + ' 00:00:00'
                let date2 = b.date + ' 00:00:00'
                let seconds1 = Date.parse(date1)
                let seconds2 = Date.parse(date2)
                return seconds1 - seconds2
          })
      },
      dateUp(){
          this.photoIndexChange.sort(function(a,b){
                let date1 = a.date + ' 00:00:00'
                let date2 = b.date + ' 00:00:00'
                let seconds1 = Date.parse(date1)
                let seconds2 = Date.parse(date2)
                return seconds2 - seconds1
          })
      },
      
      selectItem(target){
          console.log(target)
          let selectedCity =''
          this.photoIndexChange = []
          for (let i=0;i<this.computeCites.length;i++){
              if (this.computeCites[i].value ===target){
                   selectedCity = this.computeCites[i].city
                  console.log(selectedCity)
              }
          }
          for (let j=0;j<this.photoIndex.length;j++){
              if (this.photoIndex[j].place === selectedCity){
                  this.photoIndexChange.push(this.photoIndex[j])
              }
          }
          console.log(this.photoIndexChange)
      },
      clearItem(){  //      清空选择的视频拍摄地时触发的函数
            this.value = ''
            this.photoIndexChange = this.photoIndex
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
    .small{
        padding :10px
        background :#fff
    }
    .row{
        margin-top :10px
      .col{
          
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