import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";

import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import offlineExportingInit from "highcharts/modules/offline-exporting";

exportingInit(Highcharts);
offlineExportingInit(Highcharts);

createApp(App).mount("#app");
