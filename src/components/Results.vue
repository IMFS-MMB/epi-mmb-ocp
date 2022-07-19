<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import { Grouping, useState } from "../state/state";
import { Shock } from "../state/shock";
import Grid from "./Grid.vue";
import FullScreenButton from "./FullScreenButton.vue";
import DownloadButton from "./DownloadButton.vue";
import { chartIsValid, seriesIsValid } from "../state/util";

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
  plotOptions: {
    series: {
      lineWidth: 4,
      animation: false,
      marker: {
        enabled: false,
      },
    },
  },
  credits: { enabled: false },
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
      chart: { backgroundColor: "white" },
      legend: {
        enabled: true,
      },
      credits: {
        enabled: true,
        text: "Source: epi-mmb.com",
      },
    },
  },
});

const {
  getData,
  grouping,
  getModelTitle,
  selectedVariables,
  selectedModels,
  selectedShocks,
  maxColumns,
  adjustedVariables,
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
  const CHART_HEIGHT = 300;
  const LEGEND_ITEM_HEIGHT = 15;

  switch (grouping.value) {
    case Grouping.Variable:
      return selectedVariables.value.map((v) => {
        const yTitle = ["Consumption", "Labour", "Output", "Interest" , "Inflation", "Investment"].includes(v.name)
          ? TITLE1
          : TITLE2;

        return {
          exporting: {
            chartOptions: {
              chart: {
                height:
                  CHART_HEIGHT +
                  LEGEND_ITEM_HEIGHT * selectedModels.value.length,
              },
            },
          },
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
              name: getModelTitle.value(m),
              data: getData(m.name, shock.name, v.name),
            };
          }),
        };
      });

    case Grouping.Model:
      return selectedModels.value.map((m) => {
        return {
          exporting: {
            chartOptions: {
              chart: {
                height:
                  CHART_HEIGHT +
                  LEGEND_ITEM_HEIGHT * selectedVariables.value.length,
              },
            },
          },
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
          title: { text: getModelTitle.value(m) },
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

const hasMissingVariables = computed(() => {
  const models = selectedModels.value;
  const variables = selectedVariables.value;
  const shocks = selectedShocks.value;

  for (const model of models) {
    for (const shock of shocks) {
      for (const variable of variables) {
        const data = getData(model.name, shock.name, variable.name);

        if (data !== null && !seriesIsValid(data)) {
          return true;
        }
      }
    }
  }

  return false;
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

Highcharts.addEvent(Highcharts.Legend, "afterRender", function (e) {
  const PADDING = 10;
  const MIN_HEIGHT = 40;

  const legendEl = e?.target.group.element;

  if (!legendEl) {
    return;
  }

  if (!document.querySelector(".ocp-legend-container")?.contains(legendEl)) {
    return;
  }

  const targetHeight = Math.max(
    Math.ceil(legendEl?.getBoundingClientRect?.().height ?? 0) + PADDING,
    MIN_HEIGHT
  );
  const actualHeight = legendChartHeight.value;

  if (targetHeight && targetHeight !== actualHeight) {
    legendChartHeight.value = targetHeight;
  }
});

const legendChartHeight = ref(50);
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
    chart: { height: legendChartHeight.value },
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
      navigation: { enabled: false },
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
    class="flex-grow relative overflow-auto flex flex-col pt-4 bg-white rounded-lg"
  >
    <div
      v-if="legendOptions"
      class="px-4 pl-24 sticky rounded-lg top-0 z-10 flex gap-2 items-start"
    >
      <Chart
        class="flex-grow ocp-legend-container"
        :options="legendOptions"
      ></Chart>
      <DownloadButton />
      <FullScreenButton
        v-if="container"
        :element="container"
      ></FullScreenButton>
    </div>

    <div
      v-if="adjustedVariables.length || hasMissingVariables"
      class="mx-6 mt-2 mb-4 p-4 bg-yellow-100 rounded border border-yellow-200 text-sm space-y-2"
    >
      <div v-if="hasMissingVariables">
        Blank entries in graphs indicate that the model does not include this
        variable.
      </div>
      <div v-if="adjustedVariables.length">
        The Epi-MMB team adjusted some calculations to standardize variable
        definitions:

        <div class="flex flex-col mt-2">
          <span v-for="a of adjustedVariables">
            {{ a.model }}: {{ a.variables.join(", ") }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex-1 overflow-auto pl-6 pr-3 mx-1 space-y-8 scrolling-shadows pb-8"
    >
      <div v-for="section of sections" :key="section.title">
        <div class="text-lg">{{ section.title }}</div>
        <hr class="mb-4" />
        <div
          class="grid grid-cols-4"
          style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))"
        ></div>

        <Grid
          class="gap-x-4"
          :cols="section.charts.filter(c => chartIsValid(c)).length"
          :maxCols="maxColumns"
        >
          <template v-for="options of section.charts">
            <Chart v-if="chartIsValid(options)" :options="options"></Chart>
          </template>
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
