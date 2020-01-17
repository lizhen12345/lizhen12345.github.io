<template>
  <div class="side-wrapper">
    <div class="top-wrapper">
      <img src="./u=3012947088,893937169&fm=26&gp=0.jpg" height="60px" width="150px" />
    </div>
    <el-menu class="side" :default-active="nowOpen" unique-opened router @select="handleSelect">
      <template v-for="(item,index) in danghang">
        <template v-if="item.content">
          <el-submenu :key="index" :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
            <template v-for="(item1,index1) in item.content">
              <el-menu-item :key="index1" :index="item1.index">
                <span slot="title">{{item1.name}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="index" :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  // props:{
  //     weizhi:{
  //         type:String,
  //         default:'shouye'
  //     }
  // },
  data() {
    return {
      danghang: [
        { name: "首页", icon: "el-icon-s-home", index: "shouye",haveNext:false},
        {
          name: "个人管理",
          icon: "el-icon-user",
          index: "2",
          haveNext:true,
          content: [
            { name: "个人简介", index: "message" },
            { name: "密码修改", index: "passwordChange" }
          ]
        },
        {
          name: "培养管理",
          icon: "el-icon-tickets",
          index: "3",
          haveNext:true,
          content: [
            { name: "课程成绩", index: "score" },
            { name: "文章收藏", index: "textCollection" }
          ]
        },
        {
          name: "其他",
          icon: "el-icon-medal",
          index: "4",
          haveNext:true,
          content: [
            { name: "个人相册", index: "photos" },
            { name: "个人视频", index: "movie" }
          ]
        },
        {
          name: "留言",
          icon: "el-icon-reading",
          index: "comment",
          haveNext:false
        },
      ],
      tag: "", //标签页上显示什么
      nowOpen: "shouye" //现在具体打开的是第几个侧边栏
    };
  },
  mounted() {
    this.handleSelect();
  },
  //   watch:{
  //       'weizhi'(){
  //           this.nowOpen = this.weizhi
  //       }
  //   },
  methods: {
    handleSelect(key, keyPath) {
      //找出我目前所在的位置
      let sign = true
      let i=0
      while (sign){
        let a = this.danghang[i];
        if (a.haveNext===true){
          if (a.index === keyPath[0]) {
            for (let j = 0; j < a.content.length; j++) {
              if (a.content[j].index === key) {
               
                this.tag =
                  "当前您的位置在：" + a.name + ">" + a.content[j].name;
                  sign =false
              }
            }
          }
        }else{
          if (a.index === keyPath[0]){
           
            this.tag ="当前您的位置在：" + a.name ;
            sign=false
          }
          
          
        }
        i++
      }
          console.log(this.tag)
        this.$emit("tagone", this.tag);
    },
    Open(target) {
      //控制我的nowOpen为多少，主要是父组件home中调用，还控制
      
      this.nowOpen = target;
      console.log(this.nowOpen)
     
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.side-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  z-index: 0;
  border-right: solid 1px rgba(229, 229, 229, 1);

  .top-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .side {
    border: none;
  }
}
</style>