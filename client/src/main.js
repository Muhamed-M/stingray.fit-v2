import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import './global.css';
// Table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
//i18
import { createI18n } from 'vue-i18n';
import messages from '@/utils/locales/messages';
// toast
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
// charts
import VueApexCharts from 'vue3-apexcharts';

const i18n = createI18n({
  locale: 'en',
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  legacy: false,
});

const app = createApp(App);
app.use(createPinia());
app.component('DataTable', Vue3EasyDataTable);
app.use(i18n);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.use(VueApexCharts);
app.use(router).mount('#app');
