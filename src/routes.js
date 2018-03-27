import Home from './components/Home.vue'
import Templates from './components/template/Templates.vue'
import Resources from './components/resource/Resources.vue'
import About from './components/info/About.vue'
import WebsiteDetails from './components/website/WebsiteDetails.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/templates', component: Templates},
  {path: '/resources', component: Resources},
  {path: '/about', component: About},
  {path: '/website/:websiteTitle', component: WebsiteDetails},
  {path: '*', redirect: '/'}
];
