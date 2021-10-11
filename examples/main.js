import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCodeMirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';

const app = createApp(App);

app.use(router);
app.use(VueCodeMirror);
app.mount('#app');
