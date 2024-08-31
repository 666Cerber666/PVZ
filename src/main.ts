import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Inputmask from 'inputmask'
import App from './App.vue'
import routes from './routes' // Импортируйте ваши маршруты
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faBarcode, faChevronLeft, faBriefcase, faCog, faInfoCircle, faBuilding, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars, faBarcode, faChevronLeft, faBriefcase, faCog, faInfoCircle, faBuilding, faChartLine);

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.component('font-awesome-icon', FontAwesomeIcon);

Inputmask.extendDefaults({
  // настройки inputmask по умолчанию
});

app.use(createPinia())
app.use(router) // Подключите роутер к приложению

app.mount('#app')