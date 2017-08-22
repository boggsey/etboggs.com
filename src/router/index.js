import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import about from '@/components/about'
import work from '@/components/work'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: hello },
    { path: '/about', name: 'About', component: about },
    { path: '/work', name: 'Work', component: work }
  ]
})
