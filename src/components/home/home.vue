<template>
<div  class="zhengti">
    <vheader   @password='receivePassword' ref="header"></vheader>
    <side @tagone='receiveTag' ref="side"></side>
    <div class="content-wrapper">
       <div class="content">
           <keep-alive>
               <router-view :base='base' @recTarget='recTarget'></router-view>
           </keep-alive>
       </div>
    </div>
    <transition name="el-zoom-in-left">
    <div class="music-wrapper" v-show='musicFlag'>
        <aplayer :music="videoUpload.music" :list='videoUpload.list' listFolded float></aplayer>
        <span class="close-music el-icon-close" @click="close"></span>
    </div>
    </transition>
    <div class="music-wrapper">
        <span class="el-icon-arrow-right" @click="open"></span>
    </div>
    
</div>

</template>

<script type='text/ecmascript-6'>
import header from '../header/header'
import side from '../side/side'
import aplayer from "vue-aplayer";
const ERR_OK = 0
export default{
    data(){
        return{
            musicFlag :true,
            videoUpload: {
                progress: false,
                progressPercent: 0,
                successPercent: 0,
                music: {
                title: "阿四 - 像我这样的人（Cover：毛不易）",
                author: "",
                url: "./static/song/阿四 - 像我这样的人（Cover：毛不易）.mp3"
                },
                list: [
                {
                    title: "阿四 - 像我这样的人（Cover：毛不易）",
                    author: "",
                    url: "./static/song/阿四 - 像我这样的人（Cover：毛不易）.mp3"
                },
                {
                    title: "王大毛 - 去年夏天",
                    author: "",
                    url: "./static/song/王大毛 - 去年夏天.mp3"
                }
                ]
            },
            tag :'',//将其传递给header显示
            weizhi:'',
            base :[]
        }
    },
    created() {
        this.$router.push({
            path: "/"
        })
    this.$http.get('/api/base').then((response) =>{
      response=response.body
      if(response.errno === ERR_OK){
        this.base = response.data
       console.log(this.base)
      }
    })
  
    },
    methods:{
        tuichu() {
            localStorage.setItem('ms_username','')
            this.$router.push('/login')
        },
        receiveTag(target){
            
            //this.tag = target//令从侧边栏传递过来的我选择了哪一个栏赋值给tag
            this.$refs.header.positionChange(target)
         
        },
        receivePassword(target){//接收从header组件中传过来的数据，并调用side组件中的方法
            // this.weizhi = target

            this.$refs.side.Open(target)
           
        },
        recTarget(target){//接收从首页中传递过来的参数，并调用header组件和side组件中的方法，改变其中的信息

            this.$refs.header.positionChange(target[1])
            this.$refs.side.Open(target[0])
        },
        close(){
            this.musicFlag =false//将音乐播放器关掉
        },
        open(){
            this.musicFlag = true
        }
    },
    components:{
        vheader:header,
        side,
        aplayer
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
html,body,#app{
    position relative
    width :100%
    height :100%
    margin :0
    padding :0
    .zhengti{
        position relative
        width :100%
        height :100%
        min-width :960px
        .content-wrapper{
            position :absolute
            top :61px
            left :201px
            right :0
            bottom :0
            overflow hidden
            .content{
                width :100%
                height :100%
                overflow auto
                background :rgb(244,247,249)
            
            }
        }
        .music-wrapper{
            position absolute
            width :300px
            bottom :50px
            left  :0px
            .close-music{
                position absolute
                font-size :22px
                top :2px
                right :2px
                z-index :40
            }
            .el-icon-arrow-right{
                margin-bottom :20px
                font-size 32px
                font-weight 700
            }
        }
}
}
</style>