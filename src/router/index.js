import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      
      redirect:'/shouye'
    },
    {
      path: '/login',
      component :() => import('../components/login/login.vue')
    },
    {
      path :'/',
      component :() => import('../components/home/home'),
      children:[
        {
          path:'/shouye',
          component :() => import('../components/shouye/shouye')
        },
        {
          path:'/message',
          component :() => import('../components/qita/message')
        },
        {
          path:'/score',
          component :() => import('../components/qita/score')
        },
        {
          path:'/passwordChange',
          component :() => import('../components/passwordChange/passwordChange')
        },
        {
          path:'/photos',
          component :() => import('../components/photos/photos')
        },
        {
          path:'/movie',
          component :() => import('../components/movie/movie')
        },
        {
          path:'/textCollection',
          component :() => import('../components/textCollection/textCollection')
        },
        {
          path:'/comment',
          component :() => import('../components/comment/comment')
        },
      ]
    }
  ]
})
