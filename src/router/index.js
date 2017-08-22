import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path: '/home',
      name: 'home',
      component: require('../components/home/home.vue'),
      children:[{
        path:'/home/nbanews',
        component:require("../components/news/news.vue")
      },{
        path:'/home/music',
        component:require("../components/music/music.vue")
      },{
        path:'/home/chat',
        component:require("../components/chat/chat.vue")
      }]
    },{
      path: '/video',
      name: 'video',
      component: require('../components/video/video.vue')
    },{
      path: '/news',
      name: 'news',
      component: require('../components/mainNews/mainNews.vue')
    },{
      path: '/chat',
      name: 'chat',
      component: require('../components/chat/chat.vue')
    },{
      path: '/number',
      name: 'number',
      component: require('../components/number/number.vue')
    },
  ]
})
