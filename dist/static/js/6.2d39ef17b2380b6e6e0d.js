webpackJsonp([6],{"3jSf":function(e,s){},EV1k:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=r("mvHQ"),a=r.n(t),i={data:function(){return{param:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},visible:!1,zhuceFlag:!1}},methods:{submit:function(){var e=JSON.parse(window.localStorage.getItem("userArr")),s=!1;if(this.param.username&&this.param.password){e||this.$message.warning("请先注册！");for(var r=0;r<e.length;r++)if(e[r].username==this.param.username){s=!0;var t=r}s?e[t].password==this.param.password?(this.$message.success("登录成功"),window.localStorage.setItem("nowName",this.param.username),window.localStorage.setItem("nowPassword",this.param.password),this.$router.push("/")):this.$message.error("密码输入错误"):this.$message.error("不存在该账户")}else this.$message.error("账号和密码都不能为空！")},showPwd:function(e){this.visible=!("show"===e)},quzhuce:function(){this.zhuceFlag=!0},fanhui:function(){this.zhuceFlag=!1},register:function(){if(window.localStorage.userArr)var e=JSON.parse(window.localStorage.userArr);else e=[];var s=document.getElementById("username").value,r=document.getElementById("password").value;if(s&&r){for(var t=0;t<e.length;t++)if(e[t].username==s)return void this.$message.error("账号已经存在");var i={username:s,password:r};e.push(i),window.localStorage.userArr=a()(e),this.$message.success("注册成功"),this.zhuceFlag=!1}else this.$message.error("账户和密码都不能为空")}}},o={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"login-wrapper"},[r("div",{staticClass:"main"},[r("h1",{staticClass:"text"},[e._v("后台管理系统")]),e._v(" "),e.zhuceFlag?r("div",[r("input",{attrs:{type:"text",id:"username",placeholder:"用户名"}}),r("br"),e._v(" "),r("input",{attrs:{type:"passowrd",id:"password",placeholder:"密码"}}),r("br"),e._v(" "),r("button",{attrs:{id:"regist"},on:{click:e.register}},[e._v("注册")]),e._v(" "),r("button",{attrs:{id:"fanhui"},on:{click:e.fanhui}},[e._v("返回")])]):r("el-form",{ref:"login",staticClass:"input",attrs:{model:e.param,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.param.username,callback:function(s){e.$set(e.param,"username",s)},expression:"param.username"}},[r("el-button",{attrs:{slot:"prepend",icon:"el-icon-user"},slot:"prepend"})],1)],1),e._v(" "),e.visible?r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入密码",type:"text"},model:{value:e.param.password,callback:function(s){e.$set(e.param,"password",s)},expression:"param.password"}},[r("el-button",{attrs:{slot:"prepend",icon:"el-icon-lock"},slot:"prepend"}),e._v(" "),r("i",{staticClass:"el-icon-view",attrs:{slot:"suffix"},on:{click:function(s){return e.showPwd("show")}},slot:"suffix"})],1)],1):r("el-form-item",{staticClass:"gaoliang",attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.param.password,callback:function(s){e.$set(e.param,"password",s)},expression:"param.password"}},[r("el-button",{attrs:{slot:"prepend",icon:"el-icon-lock"},slot:"prepend"}),e._v(" "),r("i",{staticClass:"el-icon-view",attrs:{slot:"suffix"},on:{click:function(s){return e.showPwd("hide")}},slot:"suffix"})],1)],1),e._v(" "),r("div",{staticClass:"button-wrapper"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("登录")])],1),e._v(" "),r("p",{staticClass:"tips",on:{click:e.quzhuce}},[e._v("没有账户？去注册")])],1)],1)])},staticRenderFns:[]};var n=r("VU/8")(i,o,!1,function(e){r("3jSf")},null,null);s.default=n.exports},mvHQ:function(e,s,r){e.exports={default:r("qkKv"),__esModule:!0}},qkKv:function(e,s,r){var t=r("FeBl"),a=t.JSON||(t.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});
//# sourceMappingURL=6.2d39ef17b2380b6e6e0d.js.map