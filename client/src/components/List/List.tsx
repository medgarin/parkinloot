import type { Car } from "../../types/Cars";
import { ListItem } from "./ListItem";

export interface ListProps {
  list: Car[];
}

export const List = ({ list }: ListProps) => {
  // add styles with tailwind for this component
  return (
    <>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Matrícula</th>
            <th className="border border-gray-300 px-4 py-2">Tipo</th>
            <th className="border border-gray-300 px-4 py-2">Fecha Inicio</th>
            <th className="border border-gray-300 px-4 py-2">Fecha fin</th>
            <th className="border border-gray-300 px-4 py-2">Estado</th>
            <th className="border border-gray-300 px-4 py-2">
              <b>Total</b>
            </th>
            <th className="border border-gray-300 px-4 py-2">Accion</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((car) => (
            <ListItem key={car.id} car={car} />
          ))}
        </tbody>
      </table>
    </>
  );
};
