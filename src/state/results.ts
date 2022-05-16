const files = import.meta.glob('../results/*.json')

export const loadResult = async (model: string, shock: string) => {
  const name = `../results/${model.trim()}-${shock}.output.json`;

  if (files[name]) {
    const { data } = await files[name]();

    return data;
  } else {
    console.warn(`Results file ${name} not found`);
    return null;
  }
}
