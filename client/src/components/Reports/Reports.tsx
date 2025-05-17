import React, { useEffect, useState } from "react";
import type { Car } from "../../types/Cars";
import { CarsResource } from "../../services/CarsResource";
import { List } from "../List/List";

// Add props, elemnts to show, type of vieww
export const Reports = () => {
  // clean this code, conver into a custom hook
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    //on mount component
    const fetchCars = async () => {
      const data = await CarsResource.getCars();
      setCars(data);
    };
    fetchCars();
    return () => {
      // on disunt component
    };
    // on component change
  }, []);
  return (
    <>
      <h3>Listado de reportes</h3>
      <List list={cars} />
    </>
  );
};
