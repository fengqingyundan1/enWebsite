// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './router/index.js'
import axios from 'axios'
import QS from 'qs'

//配置 默认的ajax 请求
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.transformRequest = [function(data) {
  let ret = '';
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}];

Vue.use(ElementUI)
Vue.prototype.$http=axios
Vue.prototype.qs=QS

//var CancelToken = axios.CancelToken;

//axios.interceptors.request.use((config) => {//在请求拦截器中为每一个请求添加cancelToken，并将cancel方法存入全局数组中保存
//  window.axiosCancel = []  // 全局定义一个存放取消请求的标识
//  config.cancelToken = new axios.CancelToken(cancel => {
//    window.axiosCancel.push({cancel});
//  });
//  return config;
//}, (error) => {
//  return Promise.reject(error);
//});


//判断 开发环境 生产环境
if (process.env.NODE_ENV !== 'development') {
  Vue.prototype.URL_API = 'http://'+window.location.host+'/';
} else {
  Vue.prototype.URL_API = 'api/'
}
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
