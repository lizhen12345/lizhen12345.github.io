<template>
  <div class="textCollection-wrapper" ref="wrapper">
      <div class="textCollection-left">
          <div class="text-select">
              <el-radio v-model="radio" label="Down" @change="dateDown">时间正序</el-radio>
              <el-radio v-model="radio" label="Up" @change="dateUp">时间倒序</el-radio>
              <el-select v-model="value" placeholder="选择文章类型" @change="selectItem" clearable @clear='clearItem'>
                <el-option
                  v-for="item in typeCompute"
                  :key="item.value"
                  :label="item.type"
                  :value="item.value">
                  <span style="float: left">{{ item.type }}</span>
                </el-option>
              </el-select>
          </div>
          <ul>
              <li class="oneText-wrapper" :class="{'oneText-active':highlightindex==index}" v-for="(item,index) in textIndexChange" :key="index" @mouseenter="enter(index)" @mouseleave="leave">
                  <div class="oneText">
                      <div class="oneText-titleWrapper">
                          <a class="oneText-title" :href="item.urlContent" target="_blank">{{item.title}}</a>
                          <span class="iconfont icon-type"></span>
                          <span v-for="(item1,index1) in item.type" class="oneText-type" :key="index1">{{item1}}</span>
                      </div>
                      <div class="oneText-content">{{item.content}}</div>
                      <div class="oneText-bottom">
                          <a class="oneText-author" :href="item.urlAuthor" target="_blank">{{item.author}}</a>
                          <span class="oneText-date">发布于{{item.date}}</span>
                      </div>
                  </div>
              </li>
          </ul>
          <div class="textCollection-right">
            <h3 class="tuijian">今日推荐</h3>
            <ul>
              <li class="today-wrapper" v-for="(item,index) in todayTextIndex" :key="index">
                  <div class="today-img">
                    <a :href="item.urlContent" target="_blank"><img :src="item.urlPhoto" width="64px" height="48px"></a>
                  </div>
                  <div class="today-main">
                      <h3 class="today-title"><a :href="item.urlContent" target="_blank" class="today-href">{{item.title}}</a></h3>
                      <p class="today-content">{{item.content}}</p>
                  </div>
                  <div></div>
              </li>
            </ul>
        </div>  
      </div>

  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      value:'',
      radio:'Down',
        highlightindex:-1,
        textIndexChange:[],
      textIndex: [
        {
          title: 'Flex布局教程',
          date: "2015-07-10",
          author: "阮一峰",
          type:['前端','CSS'],
          content: "布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。Flex 是 Flexible Box 的缩写，意为弹性布局，用来为盒状模型提供最大的灵活性",
          urlContent :'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool',
          urlAuthor :'http://www.ruanyifeng.com/home.html'
        },
        {
          title: 'CSS垂直居中的8种方法',
          date: "2018-07-11",
          author: "浮-生",
          type:['前端','CSS'],
          content: "介绍了css中8种垂直居中的办法",
          urlContent :'https://www.cnblogs.com/clj2017/p/9293363.html',
          urlAuthor :'https://www.cnblogs.com/clj2017/'
        },
        {
          title: 'vue中动态添加class类名',
          date: "2017-08-19",
          author: "garyHoH",
          type:['前端','HTML'],
          content: "动态添加class类名，灵活得让你发狂",
          urlContent :'https://blog.csdn.net/qq940853667/article/details/77413323/',
          urlAuthor :'https://me.csdn.net/qq940853667'
        },
                {
          title: 'Vue-resource总结',
          date: "2018-03-21",
          author: "Ertsul",
          type:['前端','JS','vue'],
          content: "Vue 实现 Ajax请求 和跨域请求主要是通过插件vue-resource.js,主要介绍了此插件的使用方法。",
          urlContent :'https://www.jianshu.com/p/44ebbd7cc954',
          urlAuthor :'https://www.jianshu.com/u/0ac790059a62'         
        },
        {
          title: '路由以及什么是动态路由',
          date: "2019-09-28",
          author: "Free_syx",
          type:['前端','vue'],
          content: "我们知道请求头上的内容肯定不是不变的，那如果请求头地址一致改变，路由就要一致更改，会很麻烦，这是有一个解决的方法就是动态路由，就是将路由设置成动态的，更改的时候只需要在脚本中改变，而无需在内容中改变",
          urlContent :'https://www.jianshu.com/p/977f43fd752c',
          urlAuthor :'http://www.ruanyifeng.com/home.html'
        },
        {
          title: 'vue-waterfall-easy 2.x',
          date: "2018-11-29",
          author: "会飞的闰土",
          type:['前端','vue'],
          content: "介绍了一个vue组件，包含瀑布流布局和无限滚动加载,相比其他实现方式，无需在返回的数据中指定图片的宽度和高度,响应式，兼容移动端",
          urlContent :'https://www.jianshu.com/p/eb1c48d28dd9',
          urlAuthor :'https://www.jianshu.com/u/c7245e11139c'
        },
        {
          title: 'vue父组件向子组件动态传值的两种方法',
          date: "2017-11-10",
          author: "Apple",
          type:['前端','vue','JS'],
          content: "介绍了父组件向子组件动态传值",
          urlContent :'https://www.cnblogs.com/beileixinqing/p/7816024.html',
          urlAuthor :'https://www.cnblogs.com/beileixinqing/'
        },
        {
          title: 'vue中使用element-ui进行表单验证',
          date: "2018-06-21",
          author: "dong-v   ",
          type:['前端','vue'],
          content: "介绍了vue中使用element-ui进行表单验证方法",
          urlContent :'https://www.jianshu.com/p/eb1c48d28dd9',
          urlAuthor :'https://www.jianshu.com/u/c7245e11139c'
        },
        {
          title: 'Vue中better-scroll插件的使用',
          date: "2017-03-18",
          author: "年轻正好",
          type:['前端','vue'],
          content: "better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 API 设计基本兼容 iscroll，在 iscroll 的基础上又扩展了一些 feature 以及做了一些性能优化。",
          urlContent :'https://blog.csdn.net/MyFuture_MyDream/article/details/63359463',
          urlAuthor :'https://me.csdn.net/MyFuture_MyDream'
        },
        {
          title: '【Get深一度】自适应波束形成算法 之 算法篇【二】（Adaptive Beamforming Algorithm）',
          date: "2016-05-22",
          author: "Treysure",
          type:['通信','波束成形'],
          content: "自适应阵列信号处理的概念最早由 Van Atta于 20世纪 60年代末提出,本文总结了前30年的研究成果，",
          urlContent :'https://blog.csdn.net/u013346007/article/details/51474151',
          urlAuthor :'https://me.csdn.net/u013346007'
        },
        {
          title: 'CVX介绍——基础篇',
          date: "2017-11-06",
          author: "慢慢积累不怕寂寞",
          type:['MATLAB'],
          content: "CVX是MATLAB中进行解凸优化的工具包，本文介绍了他的使用方法",
          urlContent :'https://blog.csdn.net/qq_21747841/article/details/78456434',
          urlAuthor :'https://me.csdn.net/qq_21747841'
        },
        {
          title: 'Coordinated Hybrid Beamforming for Millimeter Wave Multi-User Massive MIMO Systems',
          date: "2017-02-07",
          author: "Nuan Song, Huan Sun and Tao Yang",
          type:['通信','波束成形'],
          content: "此篇文献主要介绍了利用GLRAM算法来自适应波束成形",
          urlContent :'https://ieeexplore.ieee.org/document/7841700',
          urlAuthor :'https://ieeexplore.ieee.org/author/37086037592'
        },
        {
          title: 'Hybrid Block Diagonalization for Massive Multiuser MIMO Systems',
          date: "2016-11-23",
          author: "Weiheng Ni, Student Member, IEEE, and Xiaodai Dong",
          type:['通信','波束成形'],
          content: "此篇文献主要介绍了使用混合块对角化算法实现了自适应波束成形",
          urlContent :'https://ieeexplore.ieee.org/document/7335586',
          urlAuthor :'https://ieeexplore.ieee.org/author/37085553808'
        },
        {
          title: 'Hybrid beamforming for multi-user MIMO with partially-connected RF architecture',
          date: "2019-07-20",
          author: "Chen Hu ; Yingzhuang Liu ; Limin Liao ; Ruijie Zhang",
          type:['通信','波束成形'],
          content: "文献主要介绍了利用一种复杂的迭代方法来解决单用户和多用户的混合波束成形问题",
          urlContent :'https://ieeexplore.ieee.org/document/8738125',
          urlAuthor :''
        },
        {
          title: 'Overlapped Subarray Based Hybrid Beamforming for Millimeter Wave Multiuser Massive MIMO',
          date: "2017-02-07",
          author: "Nuan Song",
          type:['通信','波束成形'],
          content: "此篇文献主要介绍了利用GLRAM算法来自适应波束成形",
          urlContent :'https://ieeexplore.ieee.org/document/7876786',
          urlAuthor :'https://ieeexplore.ieee.org/author/37086037592'
        },
      ],
      todayTextIndex: [
        {
          title: '算法面试的理想与现实',
          content: "算法面试的理想与现实",
          urlContent :'https://blog.csdn.net/csdnnews/article/details/103942670',
          urlPhoto :'./static/today/today1.jpg'
        },
        {
          title: '千万不要和程序员一起合租！',
          content: "千万不要和程序员一起合租！",
          urlContent :'https://blog.csdn.net/csdnsevenn/article/details/103951654',
          urlPhoto :'./static/today/today2.jpg'
        },
        {
          title: '程序员创业前要做哪些准备？',
          content: "程序员创业前要做哪些准备？",
          urlContent :'https://blog.csdn.net/csdnsevenn/article/details/103590784',
          urlPhoto :'./static/today/today3.jpg'
        },
        {
          title: '来吧！一文彻底搞定哈希表！',
          content: "来吧！一文彻底搞定哈希表！",
          urlContent :'https://blog.csdn.net/sinat_33921105/article/details/103344078',
          urlPhoto :'./static/today/today4.jpg'
        },
        {
          title: '建议看 | 计算机网络核心概念',
          content: "",
          urlContent :'https://blog.csdn.net/FL63Zv9Zou86950w/article/details/103917749',
          urlPhoto :'./static/today/today5.jpg'
        },
      ]
    };
  },
  mounted(){
      let h = this.$refs.wrapper.offsetWidth
     // this.$refs.wrapper.padding-left = ''
      console.log(h)
  },
  created(){
    this.clearItem()//dom创建以后就执行一次
  },
  computed:{
    typeCompute(){
      let arr = []
      for (let i = 0;i<this.textIndex.length;i++){
        for (let j=0;j<this.textIndex[i].type.length;j++){
          if (arr.indexOf(this.textIndex[i].type[j])==-1){
            arr.push(this.textIndex[i].type[j])          
          }
        }
      }
      let obj =[]
      for (let i=0;i<arr.length;i++){
        let oneObj = new Object
        oneObj.value = '选项' + (i+1)
        oneObj.type = arr[i]
        obj.push(oneObj)
      }
      
      return obj
    }
  },
  methods:{
      enter(index){
          this.highlightindex = index
      },
      leave(){
          this.highlight = -1
      },
      selectItem(target){//选择标签相符的文章
        this.textIndexChange = []
        let selectedType =''
        for (let i=0;i<this.typeCompute.length;i++){
          
            if (this.typeCompute[i].value === target){
                selectedType = this.typeCompute[i].type
            }
          
        }

        for (let i=0;i<this.textIndex.length;i++){
          for (let j=0;j<this.textIndex[i].type.length;j++){
            if(this.textIndex[i].type[j] === selectedType){
              this.textIndexChange.push(this.textIndex[i])
            }
          }
        }
      },
      clearItem(){
        this.value =''
        this. textIndexChange = this.textIndex
      },
    dateDown(target){//根据日期正序排列视频
    console.log(target)
      this.textIndexChange.sort(function(a,b){
        let date1 = a.date + ' 00:00:00'
        let date2 = b.date + ' 00:00:00'
        let seconds1 = Date.parse(date1)
        let seconds2 = Date.parse(date2)
        return seconds1 - seconds2
      })
    },
    dateUp(){//根据日期倒序排列视频
      this.textIndexChange.sort(function(a,b){
        let date1 = a.date + ' 00:00:00'
        let date2 = b.date + ' 00:00:00'
        let seconds1 = Date.parse(date1)
        let seconds2 = Date.parse(date2)
        return seconds2 - seconds1
      })
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
p{
    margin :0
}
.textCollection-wrapper{
    overflow hidden
    
    padding :20px
    .textCollection-left{
        position relative
        margin :10px 350px 0 0
        background :#fff
        .text-select{
          padding :10px 0 0 10px
        }
        ul{
            list-style-type :none
            padding :0
            .oneText-wrapper{
                padding :18px 24px 13px 24px
                border-bottom :1px solid #f4f4f4
                &.oneText-active{
                    background :rgb(250,250,250)
                }
                .oneText{
                    .oneText-titleWrapper{
                        
                        .oneText-title{
                            margin-right :10px
                            font-size :18px
                            font-weight bold
                            color :#1053b6
                            &:hover{
                                color :red
                            }
                        }
                        .oneText-type{
                            display :inline-block
                            padding :2px
                            font-size :14px
                            background :rgb(220,220,220)
                            margin-right :5px
                            border-radius :10px
                            border :1px solid rgba(7,17,27,0.1)
                        }
                        .icon-type{
                            font-size :14px
                        }
                    }

                    .oneText-content{
                        margin :5px 0
                        line-height :24px
                        font-size :14px
                        color :#8a8a8a
                    }
                    .oneText-bottom{
                        .oneText-author{
                            text-decoration :none
                            margin-right :5px
                            font-size :14px
                            &:hover{
                                color :red
                                text-decoration :underline
                            }
                        }
                        .oneText-date{
                            font-size :14px
                            color :#555
                        }
                    }
                }
            }
        }
        .textCollection-right{
            position absolute
            top :0px
            right -350px
            
            width :330px
            background :#fff
            .tuijian{
                margin-left :20px
                margin-bottom :0
            }
            ul{
                list-style-type :none
                padding :20px
                .today-wrapper{
                    overflow hidden
                    padding :10px 0
                    .today-img{
                        float left
                        margin-right :20px
                    }
                    .today-main{
                        
                        .today-title{
                            margin :0 0 5px 0
                            font-size :14px
                            color :#3d3d3d
                            line-height :22px
                            .today-href{
                                text-decoration :none
                                &:hover{
                                    color red
                                }
                            }
                            
                        }
                        .today-content{
                            font-size :12px
                            color :#999
                            line-height :18px
                        }
                    }
                }
            }
        } 
    }

}
</style>