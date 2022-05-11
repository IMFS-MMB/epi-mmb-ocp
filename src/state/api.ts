const API_BASE = "https://www.epi-mmb.com/";

export const fetchData = async () => {
  const result = await fetch(API_BASE + "ocp-data");

  return result.json();
};
