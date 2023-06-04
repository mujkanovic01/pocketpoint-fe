import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import './main.css';
import "primevue/resources/themes/soho-dark/theme.css";
import "primevue/resources/themes/soho-dark/theme.css";
import "primevue/resources/primevue.min.css";
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown"
import Calendar from "primevue/calendar";

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(router); // Use the router
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('Menubar', Menubar);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);

app.mount('#app');