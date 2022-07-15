import Highcharts, { SeriesSplineOptions } from "highcharts";

export const seriesIsValid = (data: any) =>
  Array.isArray(data) &&
  data.some((value) => typeof value === "number" && !isNaN(value));

export const chartIsValid = (options: Highcharts.Options) =>
  (options.series as SeriesSplineOptions[])?.some((s) => seriesIsValid(s.data));
