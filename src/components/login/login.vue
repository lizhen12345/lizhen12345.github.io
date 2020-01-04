<template>
<div class="login-wrapper">
    <div class="main">
        <h1 class="text">后台管理系统</h1>
        <el-form :model="param" :rules="rules" ref="login" class="input"  label-width="0px">
            <el-form-item prop="username">
                <el-input v-model="param.username" placeholder="请输入用户名">
                  
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
            <p class="tips">用户名和密码随便输入</p>
        </el-form>
    </div>
</div>

</template>

<script type='text/ecmascript-6'>
export default{
    data(){
        
            return {
                param:{
                    username :'林振',
                    password :111111
                },
                rules:{//表单的校验
                    username: [{required: true,message: '请输入用户名',trigger: 'blur'}],
                    password: [{required: true,message: '请输入密码',trigger: 'blur'}]
                },
                visible:false
                
            }
        
    },
    methods:{
        submit() {//控制路由跳转
            this.$refs.login.validate((valid) => {
                if (valid){
                    this.$message({type:'success',message:'登录成功'})
                    localStorage.setItem('ms_username', this.param.username)
                    this.$router.push('/')
                }else{
                    this.$message.error('请输入账号和密码')
                    return false
                }
            })
        },
        showPwd(valid){//控制密码的显示，在dom中用了v-if和v-else
            this.visible = !(valid === 'show')
        }
       
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
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
            }
        }
    }
}
</style>