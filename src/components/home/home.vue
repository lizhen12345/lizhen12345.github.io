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
</div>

</template>

<script type='text/ecmascript-6'>
import header from '../header/header'
import side from '../side/side'
const ERR_OK = 0
export default{
    data(){
        return{
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
        }
    },
    components:{
        vheader:header,
        side
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
html,body,#app{
    position relative
    width :100%
    height :100%
    
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
}
}
</style>