import { useEffect, useState } from "react";
import type { Car } from "../../types/Cars";
import { ListItem } from "./ListItem";
import { API } from "../../services/API";

export const List = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    //on mount component
    const fetchCars = async () => {
      const data = await API.getCars();
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
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Matrícula</th>
            <th className="border border-gray-300 px-4 py-2">Tipo</th>
            <th className="border border-gray-300 px-4 py-2">
              <b>Total</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) => (
            <ListItem key={car.id} car={car} />
          ))}
        </tbody>
      </table>
    </>
  );
};
