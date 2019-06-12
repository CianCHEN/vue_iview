import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import LeftBar from '@/components/LeftBar'
import TablePage from '@/components/TablePage'
import Layout from '@/components/Layout'
import Home from '@/components/Home'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
//    {
//      path: '/',
//      name: 'HelloWorld',
//      component: HelloWorld
//    },
    {
      path: '/login',
      name: 'Login-iview',
      component: Login
    },
    {
     path: '/bar',
     name: 'Left-bar-iview',
     component: LeftBar
    },
    {
     path: '/table',
     name: 'TablePage',
     component: TablePage
    },
//    {
//     path: '/root',
//     name: 'Layout',
//     component: Layout
//    },

    {
        path: '/components',
        component: Layout,
        //redirect: '/example/table',
        name: 'Example',
        children: [
          {
            path: 'table',
            name: 'Table',
            //component: () => import('@/views/table/index'),
            component: TablePage
          },
          {
            path: 'form',
            name: 'form',
            //component: () => import('@/views/table/index'),
            component: Form
          },
          {
           path: 'modal',
           name: 'modal',
           component: () => import('@/components/Modal')
          }
        ]
     },

    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
          {
            path: 'home',
            name: 'home',
            //component: () => import('@/views/table/index'),
            component: Home
          },
          //{
          //  path: 'form',
          //  name: 'form',
          //  //component: () => import('@/views/table/index'),
          //  component: Form
          //},
        ]
    },
  ] 
})
