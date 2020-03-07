<template>
<div class="login-wrapper">
    <div class="main">
        <h1 class="text">后台管理系统</h1>
        <div v-if="zhuceFlag">
            <input type="text" id="username" placeholder="用户名"><br>
            <input type="passowrd" id="password" placeholder="密码"><br>
            <button id="regist" @click="register">注册</button>
            <button id="fanhui" @click="fanhui">返回</button>
        </div>
        <el-form v-else :model="param" :rules="rules" ref="login" class="input"  label-width="0px">
            <el-form-item prop="username">
                <el-input v-model="param.username"  placeholder="请输入用户名">
                  
                    <el-button slot="prepend" icon="el-icon-user"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item v-if="visible" prop="password">
                <el-input v-model="param.password" placeholder="请输入密码" type="text">
                    <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    <i slot="suffix" class="el-icon-view" @click="showPwd('show')"></i>
                </el-input>
            </el-form-item>
            <el-form-item v-else prop="password" class="gaoliang">
                <el-input v-model="param.password" placeholder="请输入密码" type="password">
                    <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    <i slot="suffix" class="el-icon-view" @click="showPwd('hide')"></i>
                </el-input>
            </el-form-item>
            <div class="button-wrapper">
                <el-button type="primary" @click="submit">登录</el-button>
            </div>
            <p class="tips" @click="quzhuce">没有账户？去注册</p>
        </el-form>
    </div>
</div>

</template>

<script type='text/ecmascript-6'>
export default{
    data(){
        
            return {
                param:{
                    username :'',
                    password :'',
                },
                rules:{//表单的校验
                    username: [{required: true,message: '请输入用户名',trigger: 'blur'}],
                    password: [{required: true,message: '请输入密码',trigger: 'blur'}]
                },
                visible:false,
                zhuceFlag :false
                
            }
        
    },
    methods:{
        submit() {//控制路由跳转
            // this.$refs.login.validate((valid) => {
            //     if (valid){
            //         this.$message({type:'success',message:'登录成功'})
            //         localStorage.setItem('ms_username', this.param.username)
            //         localStorage.setItem('ms_mima',this.param.password)
            //         this.$router.push('/')
            //     }else{
            //         this.$message.error('请输入账号和密码')
                    
            //         return false
            //     }
            // })
           //登录功能  匹配账户和密码
            var array = JSON.parse(window.localStorage.getItem('userArr')) 
           
            var isHave = false
            if(!this.param.username || !this.param.password){
                this.$message.error('账号和密码都不能为空！')
                return
            }
             if(!array){
                 this.$message.warning('请先注册！')
             }
            for(let i=0;i<array.length;i++){
                if(array[i].username == this.param.username){
                    isHave = true
                    var index = i
                }
            }
            if(isHave){
                if(array[index].password == this.param.password){
                    this.$message.success('登录成功')
                    window.localStorage.setItem('nowName',this.param.username)
                    window.localStorage.setItem('nowPassword',this.param.password)

                    this.$router.push('/') 
                }else{
                    this.$message.error('密码输入错误')
                }
            }else{
                this.$message.error('不存在该账户')
            }
            
        },
        showPwd(valid){//控制密码的显示，在dom中用了v-if和v-else
            this.visible = !(valid === 'show')
        },
        quzhuce(){//点击打开注册表单
            this.zhuceFlag = true
        },
        fanhui(){
            this.zhuceFlag = false
        },
        register(){//注册账户
            if(window.localStorage.userArr){
                var array = JSON.parse(window.localStorage.userArr)    
            }else{
                
                array = []
            }
            var username =document.getElementById('username').value 
            var password = document.getElementById('password').value
            if(!username || !password){
                this.$message.error('账户和密码都不能为空')
                return
            }
            for (let i=0;i<array.length;i++){
                
                if(array[i].username == username){
                    this.$message.error('账号已经存在')
                    return
                }
            }
            var obj = {username:username,password:password}
            array.push(obj)
            window.localStorage.userArr = JSON.stringify(array)
            this.$message.success('注册成功')
            this.zhuceFlag = false
        },
       
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#username{
    padding: 5px 10px
    width :60%
    height :20px
    margin-left :60px
}
#password{
    padding :5px 10px
    width :60%
    height :20px
    margin :10px 0 0 60px
}
#regist{
    margin :10px 0 0 90px
    width :60px
    height :30px
}
#fanhui{
    margin :10px 0 0 50px
    width :60px
    height :30px
}
html,body,#app{
    width 100%
    height 100%
    margin :0
    padding :0
}
.login-wrapper{
    width :100%
    height :100%
    padding :0
    margin :0
    display :flex
    align-items :center
    justify-content :center
    background-image :url('./veer-147138934.jpg')
    background-size :100%
    background-repeat :none
    overflow hidden
    .main{
        width :350px
        .text{
            text-align :center
            font-size :20px

        }
        .input{
            .gaoliang{
                .el-icon-view{
                    color :blue
                }
            }
            .el-icon-view{
                margin-right :6px
                line-height :40px
            }
            .button-wrapper{
                text-align :center
                button{
                    width :100%
                }
            }
            .tips{
                font-size :12px
                text-align :center
                color :blue
            }
        }
    }
}
</style>