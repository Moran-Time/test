import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/leader",
    children: [{
        path: "/leader",
        name: "Leader",
        component: () => import("../components/leader/Leader.vue"),
        redirect: '/leader/echarts',
        children: [{
            path: 'photo',
            name: "Photo",
            component: () => import("../components/children/photo.vue"),
            meta: {
              item: "相册管理"
            }
          },
          {
            path: 'list',
            name: "List",
            component: () => import("../components/children/list.vue"),
            meta: {
              item: "商品列表"
            }
          }, {
            path: "echarts",
            name: "Echarts",
            component: () => import("../components/echarts/echarts.vue"),
            meta: {
              item: "后台首页"
            }
          }
        ]
      },
      {
        path: "/commodity",
        name: "Commodity",
        component: () => import("../components/commodity/Commodity.vue"),
        redirect: "/commodity/list",
        children: [{
            path: "classify",
            name: "Classify",
            component: () => import("../components/children/Classify.vue"),
            meta: {
              item: "商品分类"
            }
          },
          {
            path: "list",
            name: "List",
            component: () => import("../components/children/list.vue"),
            meta: {
              item: "商品列表"
            }
          },
          {
            path: "critic",
            name: "Critic",
            component: () => import("../components/children/Critic.vue"),
            meta: {
              item: "商品评论"
            }
          },
          {
            path: "type",
            name: "Type",
            component: () => import("../components/children/Type.vue"),
            meta: {
              item: "商品类型"
            }
          },
          {
            path: "specification",
            name: "Specification",
            component: () => import("../components/children/Specification.vue"),
            meta: {
              item: "商品规格"
            }
          }
        ]
      }, {
        path: "/order",
        name: "Order",
        component: () => import("../components/commodity/Order.vue"),
        redirect: "/order/order",
        children: [{
            path: "order",
            name: "Order",
            component: () => import("../components/children/Order.vue"),
            meta: {
              item: "订单管理"
            }
          },
          {
            path: "after",
            name: "After",
            component: () => import("../components/children/after.vue"),
            meta: {
              item: "售后服务"
            }
          }, {
            path: "invoiec",
            name: "Invoiec",
            component: () => import("../components/children/invoice.vue"),
            meta: {
              item: "发票管理"
            }
          }
        ]
      }, {
        path: "/svip",
        name: "Svip",
        component: () => import("../components/commodity/Svip.vue"),
        redirect: "/svip/sviplist",
        children: [{
            path: "class",
            name: "Class",
            component: () => import("../components/children/class.vue"),
            meta: {
              item: "会员等级"
            }
          },
          {
            path: "sviplist",
            name: "Sviplist",
            component: () => import("../components/children/Sviplist.vue"),
            meta: {
              item: "会员列表"
            }
          }
        ]
      }, {
        path: "/set",
        name: "Set",
        component: () => import("../components/commodity/Set.vue"),
        redirect: "/set/basics",
        children: [{
            path: "administrator",
            name: "Administrator",
            component: () => import("../components/children/Administrator.vue"),
            meta: {
              item: "管理员设置"
            }
          },
          {
            path: "basics",
            name: "Basics",
            component: () => import("../components/children/basics.vue"),
            meta: {
              item: "基础管理"
            }
          }, {
            path: "deal",
            name: 'Beal',
            component: () => import("../components/children/deal.vue"),
            meta: {
              item: "交易管理"
            }
          },
          {
            path: "logistics",
            name: "Logistics",
            component: () => import("../components/children/logistics.vue"),
            meta: {
              item: "物流设置"
            }
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login/Login.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (localStorage.getItem("token")) {
      next()
    } else {
      if (to.path == "/login") {
        next()
      } else {
        next("/login")
      }
    }
  }

)

export default router