<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import { Grouping, useState } from "../state/state";
import { Shock } from "../state/shock";
import Grid from "./Grid.vue";
import FullScreenButton from "./FullScreenButton.vue";
import DownloadButton from "./DownloadButton.vue";

type Charts = Highcharts.Options[];

interface Section {
  title: string;
  charts: Charts;
}

Highcharts.setOptions({
  chart: {
    backgroundColor: "transparent",
    height: 300,
    marginLeft: 70,
    marginRight: 20,
  },
  xAxis: {
    title: {
      text: "Time",
      style: {
        fontSize: "10px",
      },
    },
  },
  pane: {
    background: [{ backgroundColor: "transparent" }],
  },
  plotOptions: {
    series: {
      lineWidth: 4,
      animation: false,
      marker: {
        enabled: false,
      },
    },
  },
  // credits: { enabled: false },
  legend: { enabled: false },
  exporting: {
    libURL: "/vendor/",
    buttons: {
      contextButton: {
        menuItems: [
          "downloadPNG",
          "downloadJPEG",
          "downloadPDF",
          "downloadSVG",
        ],
      },
    },
    chartOptions: {
      legend: {
        enabled: true,
      },
    },
  },
});

const {
  getData,
  grouping,
  selectedVariables,
  selectedModels,
  selectedShocks,
  maxColumns,
} = useState();

const makeCharts = (shock: Shock): Charts => {
  const TITLE_OPTIONS = {
    reserveSpace: true,
    style: {
      fontSize: "10px",
      whiteSpace: "nowrap",
    },
    margin: 12,
  };

  const TITLE1 = "% deviation from Steady State";
  const TITLE2 = "% of population";

  switch (grouping.value) {
    case Grouping.Variable:
      return selectedVariables.value.map((v) => {
        const yTitle = ["Consumption", "Labour", "Output"].includes(v.name)
          ? TITLE1
          : TITLE2;

        return {
          yAxis: [
            {
              title: {
                ...TITLE_OPTIONS,
                text: yTitle,
              },
            },
          ],
          title: { text: v.name },
          series: selectedModels.value.map((m, i) => {
            return {
              yAxis: 0,
              type: "spline",
              colorIndex: i,
              name: m.name,
              data: getData(m.name, shock.name, v.name),
            };
          }),
        };
      });

    case Grouping.Model:
      return selectedModels.value.map((m) => {
        return {
          yAxis: [
            {
              title: {
                ...TITLE_OPTIONS,
                text: TITLE1,
              },
            },
            {
              title: {
                ...TITLE_OPTIONS,
                text: TITLE2,
              },
              opposite: true,
            },
          ],
          title: { text: m.name },
          series: selectedVariables.value.map((v, i) => {
            return {
              yAxis: 0,
              type: "spline",
              colorIndex: i,
              name: v.name,
              data: getData(m.name, shock.name, v.name),
            };
          }),
        };
      });
    default:
      throw new Error(`Unknown grouping: ${grouping.value}`);
  }
};

const makeSections = (): Section[] => {
  return selectedShocks.value.map((shock) => {
    const title = shock.name;
    const charts = makeCharts(shock);

    return { title, charts };
  });
};

const sections = computed(() => {
  return makeSections();
});

const toggleSeries = (name?: string) => {
  Highcharts.charts
    .flatMap((c) => c?.series ?? [])
    .forEach((s) => {
      if (s.name === name) {
        if (s.visible) {
          s.hide();
        } else {
          s.show();
        }
      }
    });
};

const legendOptions = computed(() => {
  const options = sections?.value?.[0]?.charts?.[0];

  if (!options) {
    return null;
  }

  const series = options.series?.map((s) => ({
    ...s,
    data: [],
    events: {
      legendItemClick: () => {
        toggleSeries(s.name);

        return false;
      },
    },
  }));

  return {
    series,

    credits: { enabled: false },
    chart: { height: 50 },
    exporting: { enabled: false },
    title: {
      floating: true,
      text: "",
    },
    yAxis: {
      visible: false,
    },
    xAxis: {
      visible: false,
    },
    legend: {
      margin: 0,
      padding: 0,
      verticalAlign: "middle",
      align: "center",
      enabled: true,
    },
  } as Highcharts.Options;
});

const reflow = () => Highcharts.charts.forEach((c) => c?.reflow());

watch(sections, () => nextTick(reflow));
watch(maxColumns, () => nextTick(reflow));

const container = ref();
</script>
<template>
  <div
    ref="container"
    class="flex-1 relative overflow-auto flex flex-col pt-4 bg-white rounded-lg"
  >
    <div class="absolute top-4 right-4 z-50 flex items-center gap-2">
      <DownloadButton/>
      <FullScreenButton v-if="container" :element="container"></FullScreenButton>
    </div>

    <div
      v-if="legendOptions"
      class="px-4 sticky overflow-hidden rounded-lg top-0 z-10"
    >
      <Chart :options="legendOptions"></Chart>
    </div>
    <div
      class="flex-1 overflow-auto pl-6 pr-3 mx-1 space-y-8 scrolling-shadows pb-8"
    >
      <div v-for="section of sections">
        <div class="text-lg">{{ section.title }}</div>
        <hr class="mb-4" />
        <div
          class="grid grid-cols-4"
          style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))"
        ></div>

        <Grid
          class="gap-x-4"
          :cols="section.charts.length"
          :maxCols="maxColumns"
        >
          <Chart v-for="options of section.charts" :options="options"></Chart>
        </Grid>
      </div>
    </div>
  </div>
</template>
<style>
.highcharts-button-box {
  fill-opacity: 0;
}
</style>
