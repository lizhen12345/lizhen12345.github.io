<template>
  <div class="movie-wrapper">
    <div class="nei">
      <div class="select-wrapper">
          <el-radio v-model="radio" label="Down" @change="dateDown">时间正序</el-radio>
          <el-radio v-model="radio" label="Up" @change="dateUp">时间倒序</el-radio>
          <el-select v-model="value" placeholder="选择视频拍摄地" @change="selectItem" clearable >
            <el-option
              v-for="item in computeCites"
              :key="item.value"
              :label="item.city"
              :value="item.value">
              <span style="float: left">{{ item.city }}</span>
            </el-option>
          </el-select>
      </div>
      <el-row class="row" :gutter="20" v-for="(item,index) in rowCompute" :key="index">
        <el-col :span="6" class="col" v-for="(item1,index1) in colCompute(index)" :key='index1'>
            <imgWrapper :oneMovie='item1' @openMovie='openMovie'></imgWrapper>
        </el-col>
      </el-row>
      <el-row class="row" :gutter="20" v-if='lastrowCompute'>
        <el-col :span="6" class="col" v-for="(item3,index3) in lastrowCompute" :key='index3'>
            <imgWrapper :oneMovie='item3' @openMovie='openMovie'></imgWrapper>
        </el-col>
      </el-row>
    </div>
    <div class="back" v-show="showBack">
        <div class="back-main">
                <div class="video-father">
                    <video-player  class="video-player vjs-custom-skin video"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                    ></video-player>
                </div>
        </div>
        <div class="close">
              <span class="el-icon-close" @click="closeBig"></span>
        </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import imgWrapper from './img-wrapper'
export default {
  data() {
    return {
      value :'',//选择器默认的选择为空
      
      showFlag: false,//鼠标移到视频上出画面
      showBack: false,//是否观看视频
      movieIndexChange :[],//动态电影数组 
      radio :'',
      movieIndex: [
        {
          url: "/static/fm/fengmian1.png",
          src: "/static/video/01.mp4",
          date: "2018-08-28",
          place: "临沂",
          info: "老家清晨天空",
          time: '00:15'
        },
        {
          url: "./static/fm/fengmian2.png",
          src: "./static/video/02.mp4",
          date: "2018-09-04",
          place: "临沂",
          info: "老家水库风景",
          time: '00:06'
        },
        {
          url: "./static/fm/fengmian3.png",
          src: "./static/video/03.mp4",
          date: "2019-07-08",
          place: "南京",
          info: "个人创意抖音视频",
          time: '00:09'
        },
        {
          url: "./static/fm/fengmian4.png",
          src: "./static/video/04.mp4",
          date: "2019-10-19",
          place: "上海",
          info: "上海外滩夜景",
          time: '00:15'
        },
         {
          url: "./static/fm/fengmian5.png",
          src: "./static/video/05.mp4",
          date: "2019-05-18",
          place: "上海",
          info: "羽毛球锻炼",
          time: '00:25'
        },
        {
          url: "./static/fm/fengmian6.png",
          src: "./static/video/06.mp4",
          date: "2019-09-02",
          place: "上海",
          info: "上海雨景",
          time: '00:17'
        },
        {
          url: "./static/fm/fengmian7.png",
          src: "./static/video/07.mp4",
          date: "2019-07-06",
          place: "南京",
          info: "南京玄武湖大雨",
          time: '00:11'
        },
        {
          url: "./static/fm/fengmian8.png",
          src: "./static/video/08.mp4",
          date: "2019-08-07",
          place: "上海",
          info: "上海火车",
          time: '00:15'
        },
        {
          url: "./static/fm/fengmian9.png",
          src: "./static/video/09.mp4",
          date: "2019-08-29",
          place: "上海",
          info: "上海清晨彩虹",
          time: '00:10'
        },
        {
          url: "./static/fm/fengmian10.png",
          src: "./static/video/10.mp4",
          date: "2019-09-08",
          place: "上海",
          info: "实验室楼下小猫",
          time: '00:14'
        }
      ],
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: '',  // 路径
          type: 'video/mp4'  // 类型
        }],
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    }

    };
  },
  created(){
    this.selectItem('')//这个是无奈之举，为了让我一开始创建页面的时候调用一次函数，使我的动态的moviindexchange为全部视频，
  },

  computed: {
      rowCompute(){//计算总共有多少整行，即每个行都有四个
      
        let rowSum = Math.ceil(this.movieIndexChange.length / 4);
        let a = [];
        for (let i = 0; i < rowSum; i++) {
            a.push(i);
        }
      
        return a;

      },
      lastrowCompute(){//计算是否最后一行不满4个 并返回movie数据
        let  zhengshu = Math.ceil(this.movieIndexChange.length / 4);
        let yushu =this.movieIndexChange.length % 4 
        let a=[]
        if(yushu!=0){
            a = this.movieIndexChange.slice(4*zhengshu)
            
        }else{
          
        }
       
        return a
      },
      player() {
        return this.$refs.videoPlayer.player
      },
      computeCites(){//返回视频中包含哪几个视频拍摄地
      
        let arr = []
        for (let i= 0;i<this.movieIndex.length;i++){
          if (arr.indexOf(this.movieIndex[i].place)==-1){
            arr.push(this.movieIndex[i].place)
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
  methods: {

    colCompute(index){//计算每一行中的元素
        let arr = []
        arr = this.movieIndexChange.slice(4*index,4*index+4)
        
        return arr
    },
    openMovie(target){//接收我子组件img-wrapper中的点击事件，调出视频播放页
        this.showBack =true
        
        this.playerOptions.sources[0].src=target
       
    },
    closeBig(){
          this.showBack = false
          this.playerOptions.sources[0].src=''
    },
    selectItem(target){
      
      if (target.length === 0){//判断传进来的value是否有值，如果无值，就让动态电影数组等于全部电影数组
      debugger
      console.log("h",typeof(target))
        this.movieIndexChange = this.movieIndex
      }else{//否则根据传进来的选择选项
        this.movieIndexChange = []
        let selectedCity = ''
        for (let i=0;i<this.computeCites.length;i++){
          if (this.computeCites[i].value === target){
            selectedCity = this.computeCites[i].city
          }
        }
        
        for (let j=0;j<this.movieIndex.length;j++){
          if (this.movieIndex[j].place === selectedCity){
            this.movieIndexChange.push(this.movieIndex[j])
          }
        }
      }

     
    },
    dateDown(target){//根据日期正序排列视频
      this.movieIndexChange.sort(function(a,b){
        let date1 = a.date + ' 00:00:00'
        let date2 = b.date + ' 00:00:00'
        let seconds1 = Date.parse(date1)
        let seconds2 = Date.parse(date2)
        return seconds1 - seconds2
      })
    },
    dateUp(){//根据日期倒序排列视频
      this.movieIndexChange.sort(function(a,b){
        let date1 = a.date + ' 00:00:00'
        let date2 = b.date + ' 00:00:00'
        let seconds1 = Date.parse(date1)
        let seconds2 = Date.parse(date2)
        return seconds2 - seconds1
      })
    }
  },
  components:{
    imgWrapper
  }
};</script>

<style lang='stylus' rel='stylesheet/stylus'>
.movie-wrapper {
  padding: 20px;

  .nei {
    background: #fff;
    padding: 10px;

    .row {
      margin-top :10px
      .col {}
    }
    .movie-bottom{
      padding :5px
      text-align :center
      background :rgb(149,149,149)
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
            margin :0 auto
            .video{
                margin :10px auto
                width :75%
                height :75%
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