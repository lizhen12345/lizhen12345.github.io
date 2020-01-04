<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="right-wrapper">
        <p class="miaoshu">{{tag}}</p>
      </div>
      <div class="left-wrapper">
        <span class="el-icon-bell"></span>
        <span class="el-icon-lock" @click="passwordOpen()"></span>
        <span class="el-icon-switch-button" @click="close"></span>
      </div>
    </div>
    
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
      position :{
          type:String,
      }
  },
  data(){
      return{
          tag :'当前您的位置在：首页'
      }
  },
// watch:{
//     'position'(){
//         debugger
//             this.tag =this.position

//     }
// },
// computed:{
//     tagCompute(){
//         let tag = '当前学期：2019年秋季学期'
//         this.
//     }
// },
  methods: {
    close() {
        console.log(this.tag)
      this.$confirm("你确定要退出本次登录吗", "提示", {
        confirmButtonText: "退出",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(action => {
          if (action === "confirm") {
            this.$message({ type: "success", message: "退出成功" });
            localStorage.setItem("ms_username", "");
            this.$router.push("/login");
          }
        })
        .catch(action => {
          if (action === "cancel") {
            this.$message({ type: "info", message: "已取消" });
          }
        });
    },
    positionChange(target){
      
        this.tag = target
    },
    passwordOpen(){
        this.$router.push("/passwordChange");
        this.tag = '当前您的位置在：个人管理>密码修改'
        this.$emit('password','passwordChange')
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.header-wrapper {
  position: relative;
  width: 100%;
  height: 60px;
  background: rgb(255, 255, 255);
  border-bottom: solid 1px rgba(229, 229, 229, 1);

  .left-wrapper {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .el-icon-bell, .el-icon-lock, .el-icon-switch-button {
      font-size: 24px;
      color: rgb(119, 144, 157);
      margin-right: 20px;
    }
  }

  .right-wrapper {
    margin-left: 210px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

</style>