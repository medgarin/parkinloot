import { useCallback, useState } from "react";
import type { Car } from "../types/Cars";
import { CarsResource } from "../services/CarsResource";

export const useCarsActive = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const getGetActiveCars = useCallback(async () => {
    const data = await CarsResource.getActiveCars();
    setCars(data);
  }, []);

  return {
    cars,
    getGetActiveCars,
  };
};
