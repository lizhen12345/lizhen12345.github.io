// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

import './common/stylus/iconfont.styl'//引入点赞的图标

import VideoPlayer from 'vue-video-player'
import vueAplayer from 'vue-aplayer'
 
Vue.use(vueAplayer)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')  
Vue.use(VideoPlayer)//引入播放器插件 vue-video-player

Vue.use(ElementUI) //使用elementUI
Vue.use(VueResource)
Vue.config.productionTip = false

router.beforeEach((to,from,next) => {//路由跳转的钩子函数

  const role = localStorage.getItem('ms_username')

  // console.log(role)
  if (!role && to.path !== '/login'){
    
    console.log('a',to.path)
    next('/login')
  }else{
    next()
  }
}) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
