import { createApp } from 'vue';
import App from './App.vue';
import FeatherIcon from './components/FeatherIcon.vue';
import './index.css';

const app = createApp(App);
app.component('feather-icon', FeatherIcon)
app.mount('#app');
