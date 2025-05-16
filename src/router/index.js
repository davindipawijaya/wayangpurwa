// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import IndividualDetail from '../views/IndividualDetail.vue'
import IndividualList from '../components/IndividualList.vue'
import TempatAsal from '../components/TempatAsal.vue'
import PusakaList from '../components/PusakaList.vue'
import KesaktianList from '../components/KesaktianList.vue'
import VisualisasiWayang from '@/views/VisualisasiWayang.vue'
import VisualisasiFuseki from '@/views/VisualisasiFuseki.vue'
import TentangKami from '@/views/TentangKami.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/detail/:nama',
    name: 'IndividualDetail',
    component: IndividualDetail
  },
  {
    path: '/tokoh',
    name: 'Tokoh',
    component: IndividualList
  },
  { 
    path: '/tempat-asal', 
    name: 'TempatAsal', 
    component: TempatAsal 
  },
  { 
    path: '/pusaka', 
    name: 'PusakaList', 
    component: PusakaList 
  },
  { 
    path: '/kesaktian', 
    name: 'KesaktianList', 
    component: KesaktianList 
  },
  {
    path: '/visualisasi',
    name: 'Visualisasi',
    component: VisualisasiWayang
  },
  {
    path: '/visualisasi-fuseki',
    name: 'VisualisasiFuseki',
    component: VisualisasiFuseki
  },
  {
    path: '/tentang-kami',
    name: 'TentangKami',
    component: TentangKami
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
