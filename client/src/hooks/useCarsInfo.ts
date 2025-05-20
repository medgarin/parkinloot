import { useCallback, useState } from "react";
import type { Car } from "../types/Cars";
import { CarsResource } from "../services/CarsResource";

export const useCarsInfo = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const getGetAllCars = useCallback(async () => {
    const data = await CarsResource.getCars();
    setCars(data);
  }, []);

  return {
    cars,
    getGetAllCars,
  };
};
