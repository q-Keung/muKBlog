import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";
// import '@/utils/winReSize'
import vueAxios from 'vue-axios';
import 'typeface-roboto'
// import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
// import 'muse-ui/lib/styles/base.less';
// import 'muse-ui/lib/styles/theme.less';
import {
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,
  BottomSheet,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  LoadMore,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Stepper,
  SubHeader,
  Switch,
  Tabs,
  TextField,
  Tooltip,
  theme
} from 'muse-ui';
// Vue.prototype.$axios = axios;
theme.use('dark');
Vue.use(vueAxios, axios);
Vue.use(Alert).use(AppBar).use(AutoComplete).use(Avatar).use(Badge).use(BottomNav).use(BottomSheet).use(Breadcrumbs).use(Button).use(Card).use(Checkbox).use(Chip).use(DateInput).use(DataTable).use(Dialog).use(Divider).use(Drawer).use(ExpansionPanel).use(Form).use(Grid).use(GridList).use(Helpers).use(Icon).use(List).use(LoadMore).use(Menu).use(Pagination).use(Paper).use(Picker).use(Popover).use(Progress).use(Radio).use(Select).use(SlidePicker).use(Slider).use(Snackbar).use(Stepper).use(SubHeader).use(Switch).use(Tabs).use(TextField).use(Tooltip);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");