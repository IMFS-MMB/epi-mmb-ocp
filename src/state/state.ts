import { computed, ref } from "vue";
import { Model } from "./model";
import { Shock } from "./shock";
import { Variable } from "./variable";

const featureFP = "Fiscal Policy";
const featureMP = "Monetary Policy";
const featureFI = "Financial Intermediaries";
const featureFE = "Firms entry/exit";
const featureMC = "Multi Country";
const featureHH = "Heterogeneous Households";
const featureHF = "Heterogeneous Firms";
const featureOFP = "Optimal Fiscal Policy";
const featureOPP = "Optimal Pandemic Policy";

const modelFeatures = ref([featureFP, featureMP, featureFI,featureFE,featureMC,featureHH,featureHF,featureOFP,featureOPP]);

const type0 = "Reduced From";
const type1 = "One-way Interaction";
const type2 = "Two-way Interaction";
const modelTypes = ref([type0, type1, type2]);

const models = ref<Model[]>([
  { id: 1, name: "A_20", type: type1, features: [] },
  { id: 2, name: "AAL_20", type: type2, features: [featureHF] },
  { id: 3, name: "ACS_21", type: type2, features: [featureMP,featureFE] },
  { id: 4, name: "AJRT_20", type: type2, features: [featureFP,featureMC] },
  { id: 5, name: "BCG_21", type: type1, features: [featureHF] },
  { id: 6, name: "BKST_21", type: type2, features: [featureHH] },
  { id: 7, name: "CCGPRV_21", type: type0, features: [featureFP,featureMP,featureMC] },
  { id: 8, name: "CDL_21", type: type2, features: [featureHH] },
  { id: 9, name: "ERT_21_Epi", type: type2, features: [featureFP] },
  { id: 10, name: "ERT_21_Ineq", type: type2, features: [featureFP,featureHH] },
  { id: 11, name: "ERT_21_NK", type: type2, features: [featureFP,featureMP] },
  { id: 12, name: "ERT_21_Test", type: type2, features: [] },
  { id: 13, name: "F_21", type: type0, features: [featureFP,featureMP,featureFI,featureFE,featureHH] },
  { id: 14, name: "GP_20", type: type2, features: [featureHH] },
  { id: 15, name: "HKK_20", type: type2, features: [] },
  { id: 16, name: "JPV_21", type: type2, features: [, ] },
  { id: 17, name: "KUX_20", type: type2, features: [featureHF] },
  { id: 18, name: "LFA_21", type: type2, features: [featureMP] },
  { id: 19, name: "MY_21", type: type1, features: [featureFP] },
  { id: 20, name: "R_20", type: type2, features: [featureFP] },
  { id: 21, name: "V_20", type: type1, features: [featureFP,featureHH] },
  { id: 22, name: "VDS_21", type: type1, features: [featureFP,featureMP,featureFI] },

]);

const shocks = ref<Shock[]>([
  { id: 1, name: "Model-specific Initial Infections" },
  { id: 2, name: "Low Initial Infections" },
  { id: 3, name: "Medium Initial Infections" },
  { id: 4, name: "High Initial Infections" },
]);

const variables = ref<Variable[]>([
  { id: 1, name: "Cosnumption" },
  { id: 2, name: "Labour" },
  { id: 3, name: "Output" },
  { id: 4, name: "Susceptibles" },
  { id: 5, name: "Infected" },
  { id: 6, name: "Recovered" },
  { id: 7, name: "Deaths" },
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
