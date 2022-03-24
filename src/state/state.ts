import { computed, ref } from "vue";
import { Model } from "./model";
import { Shock } from "./shock";
import { Variable } from "./variable";

const featureA = "Feature A";
const featureB = "Feature B";
const featureC = "Feature C";
const modelFeatures = ref([featureA, featureB, featureC]);

const typeA = "TYPE A";
const typeB = "TYPE B";
const typeC = "TYPE C";
const modelTypes = ref([typeA, typeB, typeC]);

const models = ref<Model[]>([
  { id: 1, name: "Model 1", type: typeA, features: [] },
  { id: 2, name: "Model 2", type: typeA, features: [] },

  { id: 3, name: "Model 3", type: typeB, features: [] },
  { id: 4, name: "Model 4", type: typeB, features: [] },
  { id: 5, name: "Model 5", type: typeB, features: [] },
  { id: 6, name: "Model 6", type: typeB, features: [] },

  { id: 7, name: "Model 7", type: typeC, features: [featureA] },
  { id: 8, name: "Model 8", type: typeC, features: [featureB] },
  { id: 9, name: "Model 9", type: typeC, features: [featureC] },
  { id: 10, name: "Model 10", type: typeC, features: [] },
  { id: 11, name: "Model 11", type: typeC, features: [] },
  { id: 12, name: "Model 12", type: typeC, features: [] },
  { id: 13, name: "Model 13", type: typeC, features: [] },
  { id: 14, name: "Model 14", type: typeC, features: [] },
  { id: 15, name: "Model 15", type: typeC, features: [] },
  { id: 16, name: "Model 16", type: typeC, features: [featureA, featureB] },
  { id: 17, name: "Model 17", type: typeC, features: [featureC] },
  { id: 18, name: "Model 18", type: typeC, features: [featureA] },
  { id: 19, name: "Model 19", type: typeC, features: [featureA, featureC] },
  { id: 20, name: "Model 20", type: typeC, features: [featureB] },
  { id: 21, name: "Model 21", type: typeC, features: [featureC] },
  { id: 22, name: "Model 22", type: typeC, features: [featureA] },
  { id: 23, name: "Model 23", type: typeC, features: [featureA] },
  { id: 24, name: "Model 24", type: typeC, features: [featureA] },
  { id: 25, name: "Model 25", type: typeC, features: [featureB] },
  { id: 26, name: "Model 26", type: typeC, features: [featureC] },
  { id: 27, name: "Model 27", type: typeC, features: [featureA] },
  { id: 28, name: "Model 28", type: typeC, features: [featureA] },
  { id: 29, name: "Model 29", type: typeC, features: [featureB] },
  { id: 30, name: "Model 30", type: typeC, features: [featureC] },
  { id: 31, name: "Model 31", type: typeC, features: [featureA] },
  { id: 32, name: "Model 32", type: typeC, features: [featureA] },
  { id: 33, name: "Model 33", type: typeC, features: [featureB] },
  { id: 34, name: "Model 34", type: typeC, features: [featureC] },
]);

const shocks = ref<Shock[]>([
  { id: 1, name: "Shock 1" },
  { id: 2, name: "Shock 2" },
  { id: 3, name: "Shock 3" },
]);

const variables = ref<Variable[]>([
  { id: 1, name: "Variable 1" },
  { id: 2, name: "Variable 2" },
  { id: 3, name: "Variable 3" },
]);

export enum Grouping {
  Variable,
  Model,
}

const featureFilter = ref([]);
const textFilter = ref("");
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

const grouping = ref<Grouping>(Grouping.Variable);
const maxColumns = ref<number>(4);

export function useState() {
  return {
    maxColumns,
    grouping,
    textFilter,
    featureFilter,

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
