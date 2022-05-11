const files = import.meta.glob('../results/*.json')

export const loadResult = async (model: string, shock: string) => {
  console.log(files);

  const name = `../results/${model}-${shock}.output.json`;

  if (files[name]) {
    const { data } = await files[name]();

    return data;
  } else {
    return null;
  }
}
