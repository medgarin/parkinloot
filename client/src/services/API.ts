export const API = {
  getCars: async () => {
    // replace for api call in the future
    const response = await fetch("http://localhost:5173/data/MockedCars.json");
    const { data } = await response.json();
    return data;
  },
};
