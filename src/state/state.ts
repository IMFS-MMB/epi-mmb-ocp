import { computed, reactive, ref, watchEffect } from "vue";
import { Model } from "./model";
import { Shock } from "./shock";
import { Variable } from "./variable";
import { fetchData } from "./api";
import { loadResult } from "./results";

const content = ref<string>("");
const modelFeatures = ref<string[]>([]);
const modelTypes = ref<string[]>([]);
const models = ref<Model[]>([]);
const shocks = ref<Shock[]>([]);
const variables = ref<Variable[]>([]);

export enum Grouping {
  Variable,
  Model,
}

export enum Heading {
  Short,
  Reference,
}

const featureFilter = ref([]);
const textFilter = ref("");
const clearFilters = () => {
  featureFilter.value = [];
  textFilter.value = "";
};

const selectedModels = ref<Model[]>([]);
const visibleModels = computed(() => {
  const lowercaseText = textFilter.value.toLowerCase();
  const features = featureFilter.value;

  return models.value
    .filter(
      (model) =>
        !lowercaseText || model.name.toLowerCase().includes(lowercaseText)
    )
    .filter(
      (model) =>
        !features.length || features.every((f) => model.features.includes(f))
    );
});
const visibleModelsByType = computed(() => {
  return modelTypes.value.reduce(
    (acc, type) => ({
      ...acc,
      [type]: visibleModels.value.filter((m) => m.type === type),
    }),
    {} as Record<string, Model[]>
  );
});

const selectedShocks = ref<Shock[]>([]);
const visibleShocks = computed(() => shocks.value);

const selectedVariables = ref<Variable[]>([]);
const visibleVariables = computed(() => variables.value);

const hasSelection = computed(() => {
  return !!(
    selectedVariables.value.length &&
    selectedModels.value.length &&
    selectedShocks.value.length
  );
});

const heading = ref<Heading>(Heading.Reference);
const grouping = ref<Grouping>(Grouping.Variable);
const maxColumns = ref<number>(4);

const loading = ref(true);
const load = async () => {
  try {
    loading.value = true;

    const data = await fetchData();

    content.value = data.content;
    models.value = data.models;
    shocks.value = data.shocks;
    variables.value = data.variables;
    modelTypes.value = data.modelTypes;
    modelFeatures.value = models.value
      .flatMap((m) => m.features)
      .filter((m, i, a) => i === a.indexOf(m))
      .sort((a, b) => a.localeCompare(b));
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    loading.value = false;
  }
};

const results = reactive({} as any);

/**
 * When model/shock selection changes, fetch unavailable data
 */
watchEffect(async () => {
  const models = selectedModels.value;
  const shocks = selectedShocks.value;

  for (const m of models) {
    for (const s of shocks) {
      if (results?.[m.name]?.[s.name] !== undefined) {
        continue;
      }

      const result = await loadResult(m.name, s.name);

      if (result) {
        results[m.name] ??= {};
        results[m.name][s.name] ??= result;
      }
    }
  }
});

const getData = (model: string, shock: string, variable: string) => {
  return results[model]?.[shock]?.[variable] ?? null;
};

const getModelTitle = computed(() =>
  heading.value === Heading.Short
    ? (m: Model) => m.name
    : (m: Model) => `${m.authors} (${m.year})`
);


export function useState() {
  return {
    getData,
    getModelTitle,
    maxColumns,
    grouping,
    heading,
    textFilter,
    featureFilter,
    clearFilters,
    load,
    loading,
    content,
    models,
    modelTypes,
    modelFeatures,
    visibleModels,
    selectedModels,
    visibleModelsByType,

    variables,
    visibleVariables,
    selectedVariables,

    shocks,
    visibleShocks,
    selectedShocks,

    hasSelection,
  };
}
