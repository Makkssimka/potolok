import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from "../components/IndexComponent ";
import Service from "../components/ServiceComponent";
import MenuPage from "../components/MenuPageComponent";
import Video from "../components/VideoComponent";
import Form from "../components/FormComponent";
import Gallery from "../components/GalleryComponent";
import Potolok from "../components/ServicePage";
import Uslovie from "../components/UslovieComponent";

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    name: 'services',
    path: '/services',
    component: Service
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPage
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/contact',
    name: 'contact',
    component: Index
  },
  {
    path: '/form/:category',
    name: 'form',
    component: Form
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/potolok/:slug',
    name: 'potolok',
    component: Potolok
  },
  {
    path: '/soglashenie',
    name: 'soglashenie',
    component: Uslovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
