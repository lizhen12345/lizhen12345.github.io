<template>
  <div class="password-wrapper">
    <div class="password">
      <div class="title">修改密码</div>
      <div class="input">
        <el-form label-width="0px" :model="password" ref='input'>
          <el-form-item prop="oldPassword">
            <el-input
              placeholder="请输入原密码"
              type="password"
              v-model="password.oldPassword"
              show-password
              clearable
            >
              <span slot="prepend">当前密码</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="newPassword1">
            <el-input
              placeholder="请输入新密码"
              type="password"
              v-model="password.newPassword1"
              show-password
              clearable
            >
              <span slot="prepend">重置密码</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="newPassword2">
            <el-input
              placeholder="请再次输入"
              type="password"
              v-model="password.newPassword2"
              show-password
              clearable
            >
              <span slot="prepend">再次确认</span>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="genggai">
        <el-button class="button" @click="change" round>更改密码</el-button>
        <el-button @click="clear" round>重置输入</el-button>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props:{
    base :{
      type :Array
    }
  },
  data() {
    //  var checkold = (rule,value,callback) => {//检查我输入的原密码，value是输入框中的值，callback是回调函数
    //      if(!value){
    //          callback(new Error('请输入原密码'))
    //      }else if(value !== localStorage.getItem('ms_mima')){
    //          callback(new Error('密码输入错误'))
    //      }else{
    //          callback()
    //      }
    //  }
    //  var checknew1 = (rule,value,callback) => {
    //      if(!value){
    //          callback(new Error('请输入新密码'))
    //      }else{
    //          if (this.password.newPassword2!==''){//如果没输入新密码，而确认框输了密码，则对确认框进行局部验证，会进入checknew2
    //              this.$refs.input.validateField('newPassword2')
    //          }
    //          callback()
    //      }
    //  }
    //  var checknew2= (rule,value,callback) => {
    //      if(!value){
    //          callback(new Error('请再次输入密码'))
    //      }else if(this.password.newPassword1!==value){
    //          callback(new Error('两次输入的密码不一致'))
    //      }else{
    //          callback()
    //      }
    //  }
    return {
        password:{
                  oldPassword: "",//要使输入框可以输入数据，必须在输入框加上v-model，双向绑定
                  newPassword1: "",
                  newPassword2: ""
        },
        // rules:{
        //     oldPassword:[{validator:checkold,trigger:'change'}],//validator是自定义验证，trigger是什么时候哦触发验证
        //     newPassword1:[{validator:checknew1,trigger:'change'},{min:5,max:9,message:'输入长度5~9'}],//change 是当数据改变时触发验证，blur是输入框失去焦点时触发验证
        //     newPassword2:[{validator:checknew2,trigger:'change'},{min:5,max:9,message:'输入长度5~9'}]
        // }
    };
  },
  methods:{
      change(){//点击触发这个方法，validate是对整个表单进行验证的方法，返回值valid
          // this.$refs.input.validate((valid) => {
          //     if(valid){
          //         alert('ok')
          //     }else{
          //         return false
          //     }
          // })
          if(!this.password.oldPassword){
            debugger
            this.$message.error('请输入原密码')
            return
          }
          if(this.password.oldPassword !== window.localStorage.getItem('nowPassword')){
            this.$message.error('原密码输入错误')
          }else{
            if(!this.password.newPassword1){
              this.$message.error('请输入新密码')
            }else{
              if(!this.password.newPassword2){
                this.$message.error('请再次输入新密码')
              }else{
                if(this.password.newPassword1 !== this.password.newPassword2){
                  this.$message.error('两次输入密码不一致')
                }else{
                  debugger
                  var array = JSON.parse(window.localStorage.getItem('userArr'))
                  console.log(array)
                  for (let i=0;i<array.length;i++){
                    if(array[i].username == window.localStorage.getItem('nowName')){
                      array[i].password = this.password.newPassword2
                    }
                  }
                  window.localStorage.userArr = JSON.stringify(array)
                  this.$message.success('密码修改成功,请重新登录')
                  
                  this.$router.push('/login')
                  
                }
              }
            }
          }
      },
      clear(){
          this.$refs.input.resetFields()//表单的整个重置，resetField（）element中的一个重置函数
       
      }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.password-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .password {
    position: absolute;
    top: 20px;
    left: 30px;
    width: 400px;
    height: 370px;
    border-radius: 6px;
    background: #fff;

    .title {
      padding: 0 20px;
      height: 64px;
      background: #E7eef0;
      font-size: 16px;
      font-weight: bold;
      line-height: 64px;
    }

    .input {
      padding: 20px;
      border-bottom :1px solid rgba(229,229,229,1)
    }
    .genggai{
        padding :20px
        text-align :center
        
        button{
            background :#00A7F7
            color :#fff
        }
    }
  }
}
</style>