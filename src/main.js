import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from './router'

// App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// Add PrimeFlex
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
// Add Components
import Card from "primevue/card";
import Checkbox from 'primevue/checkbox';
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import TieredMenu from 'primevue/tieredmenu';
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import PanelMenu from 'primevue/panelmenu';
import Breadcrumb from 'primevue/breadcrumb';
import Divider from 'primevue/divider';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import './assets/main.css'

const app = createApp(App)
.use(PrimeVue, { ripple: true })
.component('pv-card', Card)
.component('pv-button', Button)
.component('pv-select-button', SelectButton)
.component('pv-sidebar', Sidebar)
.component('pv-avatar', Avatar)
.component('pv-menu', Menu)
.component('pv-menubar', Menubar)
.component('pv-toolbar', Toolbar)
.component('pv-tiered-menu', TieredMenu)
.component('pv-input-text', InputText)
.component('pv-badge', Badge)
.component('pv-panel-menu', PanelMenu)
.component('pv-breadcrumb', Breadcrumb)
.component('pv-divider', Divider)
.component('pv-accordion', Accordion)
.component('pv-accordiontab', AccordionTab)
.component('pv-checkbox', Checkbox)

app.use(router)

app.mount('#app')
