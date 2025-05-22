export const CarsResource = {
  getCars: async () => {
    const response = await fetch("http://localhost:5173/data/MockedCars.json");
    const { data } = await response.json();
    return data;
  },
};
