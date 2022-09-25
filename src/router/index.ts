import { createRouter,createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import HelloWorldJP from '../components/HelloWorldJP.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/ja', component: HelloWorldJP }
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;
