import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login';
import Nav from '@/components/nav';

import Home from '@/components/home';
import Skat from '@/components/skat';
import Climb from '@/components/climb';
import About from '@/components/about';
import Tech from '@/components/technology';
import Selected from '@/components/selected';
import Outgoing from '@/components/outgoing';

Vue.use(Router);
var router = new Router({
  routes: [{
    path: '/',
    name: '登录',
    component: Login
  }, {
    path: "*",
    redirect: "/"
  }, {
    path: '/nav',
    name: 'nav',
    component: Nav,
    children: [{
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requireAuth: true }
    }, {
      path: '/skat',
      name: 'skat',
      component: Skat,
      meta: { requireAuth: true }
    }, {
      path: '/climb',
      name: 'climb',
      component: Climb,
      meta: { requireAuth: true }
    }, {
      path: '/outgoing',
      name: 'outgoing',
      component: Outgoing,
      meta: { requireAuth: true }
    }, {
      path: '/selected',
      name: 'selected',
      component: Selected,
      meta: { requireAuth: true }
    }, {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requireAuth: true }
    }]
  }]
});

router.beforeEach(function (to, from, next) {
  //获取缓存的 请求取消标识 数组，取消所有关联的请求
  //let cancelArr = window.axiosCancel;
  //console.log(cancelArr)
  //if(cancelArr){
  //  cancelArr.forEach((ele, index) => {
  //    ele.cancel() // 在失败函数中返回这里自定义的错误信息
  //    delete window.axiosCancel[index]
  //  })
  //  console.log(window.axiosCancel)
  //}
  var login = sessionStorage.getItem("login");
  if (to.matched.some(function (record) {
    return record.meta.requireAuth;
  })) {
    if (!login) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

//# sourceMappingURL=index-compiled.js.map