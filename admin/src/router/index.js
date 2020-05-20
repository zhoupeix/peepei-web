import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
// import PlayerEdit from '../views/PlayerEdit.vue'
// import PlayerList from '../views/PlayerList.vue'
// import ItemEdit from '../views/ItemEdit.vue'
Vue.use(VueRouter)

const routes = [
  {
  path:'/login',
  name:'login',
  component:()=>import('../views/Login'),meta:{isPublic:true}},
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path: '/category/create',component:()=>import('../views/CategoryEdit')},
      {path: '/category/edit/:id',component:()=>import('../views/CategoryEdit'),props:true},
      {path: '/category/list',component:()=>import('../views/CategoryList')},

      {path: '/item/create',component:()=>import('../views/ItemEdit.vue')},
      {path: '/item/edit/:id',component:()=>import('../views/ItemEdit.vue'),props:true},
      {path: '/item/list',component:()=>import('../views/ItemList.vue')},

      {path: '/hero/create',component:()=>import('../views/HeroEdit.vue')},
      {path: '/hero/edit/:id',component:()=>import('../views/HeroEdit.vue'),props:true},
      {path: '/hero/list',component:()=>import('../views/HeroList.vue')},
      
      {path: '/article/create',component:()=>import('../views/ArticleEdit.vue')},
      {path: '/article/edit/:id',component:()=>import('../views/ArticleEdit.vue'),props:true},
      {path: '/article/list',component:()=>import('../views/ArticleList.vue')},
      
      {path: '/ads/create',component:()=>import('../views/AdsEdit.vue')},
      {path: '/ads/edit/:id',component:()=>import('../views/AdsEdit.vue'),props:true},
      {path: '/ads/list',component:()=>import('../views/AdsList.vue')},
      
      {path: '/admin_user/create',component:()=>import('../views/AdminUserEdit.vue')},
      {path: '/admin_user/edit/:id',component:()=>import('../views/AdminUserEdit.vue'),props:true},
      {path: '/admin_user/list',component:()=>import('../views/AdminUserList.vue')},

      {path: '/custom/create',component:()=>import('../views/CustomEdit.vue')},
      {path: '/custom/edit/:id',component:()=>import('../views/CustomEdit.vue'),props:true},
      {path: '/custom/list',component:()=>import('../views/CustomList.vue')},
      
      {path: '/applicant/create',component:()=>import('../views/ApplicantEdit.vue')},
      {path: '/applicant/edit/:id',component:()=>import('../views/ApplicantEdit.vue'),props:true},
      {path: '/applicant/list',component:()=>import('../views/ApplicantList.vue')},
      
      {path: '/case/create',component:()=>import('../views/CaseEdit.vue')},
      {path: '/case/edit/:id',component:()=>import('../views/CaseEdit.vue'),props:true},
      {path: '/case/list',component:()=>import('../views/CaseList.vue')},


    
    ]

  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to.meta)
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})
export default router
