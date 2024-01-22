import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

app.use(router);
app.component('base-card', BaseCard);

app.mount('#app');
