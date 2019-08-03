import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorldJP from '@/components/HelloWorldJP'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ja',
      name: 'HelloWorldJP',
      component: HelloWorldJP
    }
  ]
})
