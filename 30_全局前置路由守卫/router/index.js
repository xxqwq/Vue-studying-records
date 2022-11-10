//改文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"
//创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      children: [
        {
          name: "xinwen",
          path: "news",//不用加/
          component: News,
          meta: {
            isAuth: true
          },
        },
        {
          name: "xiaoxi",
          path: "message",//不用加/
          component: Message,
          meta: {
            isAuth: true
          },
          children: [
            {
              name: "xiangqing",
              path: "detail/:id/:title",
              component: Detail,

              //props的第一种写法：值为对象，该对象中的所有key-value都会以props的形式传给Detail组件,但是数据写死了
              // props:{a:1,b:2}

              //props的第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数以props的形式传给Detail组件,但是query不行
              // props:true

              //props的第三种写法：值为函数，
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title
                }
              }
            }
          ]
        },
      ]
    },
  ]
})
//全局前置路由守卫--初始化的时候、每次路由切换之前调用
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {//判断是否需要权限
    if (localStorage.getItem('school') === 'atguigu') {
      next()
    }
    else {
      alert('学校名不对，无权查看')
    }
  }
  else {
    next()
  }
})
export default router