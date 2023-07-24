import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import './global.css';
//i18
import { createI18n } from 'vue-i18n';
import messages from '@/utils/locales/messages';
// toast
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const i18n = createI18n({
  locale: 'en',
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  legacy: false,
});

const app = createApp(App);
app.use(createPinia());
app.use(i18n);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.use(router).mount('#app');
