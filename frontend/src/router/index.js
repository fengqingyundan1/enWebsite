import Vue from 'vue'
import Router from 'vue-router'
import Index from  '@/page/index'
import MIndex from  '@/page/MIndex'
import SkatingDetails from  '@/page/SkatingDetails'
import MSkatingDetails from  '@/page/MSkatingDetails'
import ClimbingDetails from  '@/page/ClimbingDetails'
import MClimbingDetails from  '@/page/MClimbingDetails'
import OutgoingDetails from  '@/page/OutgoingDetails'
import MOutgoingDetails from  '@/page/MOutgoingDetails'
import Selected from  '@/page/Selected'
import MSelected from  '@/page/MSelected'
//import AboutMe from  '@/page/AboutMe'
import BrandStory from  '@/page/BrandStory'
import MBrandStory from  '@/page/MBrandStory'
import Technology from  '@/page/Technology'
import MTechnology from  '@/page/MTechnology'
import Responsibility from  '@/page/Responsibility'
import MResponsibility from  '@/page/MResponsibility'
import ContactUs from  '@/page/ContactUs'
import MContactUs from  '@/page/MContactUs'
import Group from  '@/page/Group'
import MGroup from  '@/page/MGroup'
import MTief from  '@/page/MTief'
import MSafree from  '@/page/MSafree'



Vue.use(Router)

export default new Router({
   mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',// pc端首页
      name: 'Index',
      component: Index
    },
    {
      path: '/MIndex', // 手机端首页
      name: MIndex,
      component: MIndex
    },
    {
      path: '/SkatingDetails',
      name: 'SkatingDetails',
      component: SkatingDetails
    },
    {
      path: '/MSkatingDetails',
      name: 'MSkatingDetails',
      component: MSkatingDetails
    },
    {
      path: '/Selected',
      name: 'Selected',
      component: Selected
    },
    {
      path: '/MSelected',
      name: 'MSelected',
      component: MSelected
    },
    {
      path: '/ClimbingDetails',
      name: 'ClimbingDetails',
      component: ClimbingDetails
    },
    {
      path: '/MClimbingDetails',
      name: 'MClimbingDetails',
      component: MClimbingDetails
    },
    {
      path: '/OutgoingDetails',
      name: 'OutgoingDetails',
      component: OutgoingDetails
    },
    {
      path: '/MOutgoingDetails',
      name: 'MOutgoingDetails',
      component: MOutgoingDetails
    },
    {
      path: '/BrandStory',
      name: 'BrandStory',
      component: BrandStory
    },
    {
      path: '/MBrandStory',
      name: 'MBrandStory',
      component: MBrandStory
    },
    {
      path: '/Technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/MTechnology',
      name: 'MTechnology',
      component: MTechnology
    },
    {
      path: '/MTief',
      name: 'MTief',
      component: MTief
    },
    {
      path: '/MSafree',
      name: 'MSafree',
      component: MSafree
    },
    {
      path: '/Responsibility',
      name: 'Responsibility',
      component: Responsibility
    },
    {
      path: '/MResponsibility',
      name: 'MResponsibility',
      component: MResponsibility
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/MContactUs',
      name: 'MContactUs',
      component: MContactUs
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/MGroup',
      name: 'MGroup',
      component: MGroup
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if(savedPosition){
      return savedPosition;
    }
    return { x: 0, y: 0 }
  }
})
