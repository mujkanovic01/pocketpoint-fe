import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import './main.css';
import "primevue/resources/themes/soho-light/theme.css";
import "primevue/resources/themes/soho-light/theme.css";
import "primevue/resources/primevue.min.css";
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown"
import Calendar from "primevue/calendar";
import Divider from "primevue/divider";
import InputNumber from "primevue/inputnumber";
import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import DataView from "primevue/dataview";
import Knob from "primevue/knob";
import Avatar from "primevue/avatar";
import ConfirmPopup from 'primevue/confirmpopup';
import Toast from "primevue/toast";
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import AutoComplete from "primevue/autocomplete";
import AvatarGroup from "primevue/avatargroup";
import Menu from "primevue/menu";
import Sidebar from 'primevue/sidebar';

import 'stream-browserify';

const app = createApp(App);
app.use(PrimeVue, {ripple: true});
app.use(router); // Use the router
app.use(ConfirmationService);
app.use(ToastService);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('Menubar', Menubar);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('DataView', DataView)
app.component("Knob", Knob);
app.component('Divider', Divider);
app.component('InputNumber', InputNumber);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Avatar', Avatar);
app.component('Toast', Toast);
app.component('ConfirmPopup', ConfirmPopup);
app.component('AutoComplete', AutoComplete);
app.component('AvatarGroup', AvatarGroup);
app.component('Menu', Menu);
app.component('Sidebar', Sidebar);

app.mount('#app');