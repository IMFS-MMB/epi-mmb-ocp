import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import HighchartsVue from "highcharts-vue";

import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import offlineExportingInit from "highcharts/modules/offline-exporting";

exportingInit(Highcharts);
offlineExportingInit(Highcharts);

createApp(App).use(HighchartsVue).mount("#app");
