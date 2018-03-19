import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'
import Sort from '@/components/Sort'
import Time from '@/components/Time'
import Shopcar from '@/components/Shopcar'
import User from '@/components/User'
import Index from '@/components/Index'
import Classify from '@/components/Classify'
<<<<<<< HEAD
import shopcarList from '@/components/shopcar/shopcarList'
import unloginEmptyShopcar from '@/components/shopcar/unloginEmptyShopcar'
=======
import Signin from '@/components/Signin'
import Signup from '@/components/signup'
>>>>>>> 项目初体验

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Index,
      redirect:'/home',//把要跳转的地址作为参数传到下一步
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'sort',
          name: 'sort',
          component: Sort
        },
        {
          path: 'time',
          name: 'time',
          component: Time
        },
        {
          path: 'shopcar',
          name: 'shopcar',
<<<<<<< HEAD
          component: Shopcar,
          children:[
            {
              path: 'shopcarList',
              name: 'shopcarList',
              component: shopcarList
            },
            {
              path:"unloginEmptyShopcar",
              name:"unloginEmptyShopcar",
              component:unloginEmptyShopcar
            }
          ]
=======
          component: Shopcar
>>>>>>> 项目初体验
        },
        {
          path: 'user',
          name: 'user',
          component: User
        }
      ]
    },
    {
      path: '/classify',
      name: '/classify',
      component: Classify
<<<<<<< HEAD
    }  
=======
    },
    {
      path:'/signin',
      name:'/signin',
      component: Signin
    },
    {
      path:'/signup',
      name:'/signup',
      component: Signup
    }   
>>>>>>> 项目初体验
  ]
})
