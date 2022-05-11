const API_BASE = !import.meta.env.PROD ? "https://www.epi-mmb.com/" : "http://localhost:8000/";

export const fetchData = async () => {
  const result = await fetch(API_BASE + "ocp-data");

  return result.json();
};
