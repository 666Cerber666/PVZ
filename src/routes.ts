// routes.js
import Home from './pages/Home.vue'
import Settings from './pages/Settings.vue'
import Tasks from './pages/Tasks.vue'
import AccInProj from './pages/AccInProj.vue'
import AccInProjSearch from './pages/AccInProjSearch.vue'
import SearchValues from './pages/SearchValues.vue'

const routes = [
  {
    path: '/',
    name: 'Меню',
    component: Home,
  },
  {
    path: '/Settings',
    name: 'Настройки',
    component: Settings,
  },
  {
    path: '/Tasks',
    name: 'Задачи',
    component: Tasks,
  },
  {
    path: '/AccInProj',
    name: 'Учёт в производстве',
    component: AccInProj,
  },
  {
    path: '/AccInProjSearch',
    name: 'Фильтр ВЗН УП',
    component: AccInProjSearch,
  },
  {
    path: '/SearchValues',
    name: 'ВЗН УП (Расход)',
    component: SearchValues,
  },
]

export default routes