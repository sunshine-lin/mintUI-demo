import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Button from '@/components/Button'
import Form from '@/components/Form'
import JsComponent from '@/components/JsCoponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    },
     {
      path: '/JsComponent',
      name: 'JsComponent',
      component: JsComponent
    }
  ]
})
