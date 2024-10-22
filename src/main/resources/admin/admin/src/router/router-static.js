import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import beiwanglu from '@/views/modules/beiwanglu/list'
    import tongjifenxi from '@/views/modules/tongjifenxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import licaijihua from '@/views/modules/licaijihua/list'
    import zhangdanleixing from '@/views/modules/zhangdanleixing/list'
    import zhichuzhangdan from '@/views/modules/zhichuzhangdan/list'
    import shouruzhangdan from '@/views/modules/shouruzhangdan/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/beiwanglu',
        name: '备忘录',
        component: beiwanglu
      }
      ,{
	path: '/tongjifenxi',
        name: '统计分析',
        component: tongjifenxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/licaijihua',
        name: '理财计划',
        component: licaijihua
      }
      ,{
	path: '/zhangdanleixing',
        name: '账单类型',
        component: zhangdanleixing
      }
      ,{
	path: '/zhichuzhangdan',
        name: '支出账单',
        component: zhichuzhangdan
      }
      ,{
	path: '/shouruzhangdan',
        name: '收入账单',
        component: shouruzhangdan
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
