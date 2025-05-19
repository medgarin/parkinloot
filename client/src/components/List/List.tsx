import type { Car } from "../../types/Cars";
import type { ListType } from "../../types/Reports";
import { ListItemBasic } from "./ListItemBasic";
import { ListItemDetail } from "./ListItemDetail";

export interface ListProps {
  list: Car[];
  ListType: ListType;
}

export const List = ({ list, ListType }: ListProps) => {
  const isDetail = ListType === "DETAIL";

  return (
    <div className="rounded-lg border border-gray-200 shadow-md m-5 p-2 h-min w-3xl bg-white">
      <table className="table-auto w-full text-black bg-white text-sm text-left">
        <thead className="bg-gray-50">
          <tr className="text-gray-900 font-medium">
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Matrícula</th>
            {isDetail && (
              <>
                <th className="px-6 py-4">Fecha de Inicio</th>
                <th className="px-6 py-4">Fecha de Salida</th>
              </>
            )}
            <th className="px-6 py-4">Tiempo Estacionado</th>
            <th className="px-6 py-4">Cantidad a Pagar</th>
            <th className="px-6 py-4">Acción</th>
          </tr>
        </thead>
        <tbody>
          {isDetail
            ? list.map((car, i) => <ListItemDetail key={i} car={car} />)
            : list.map((car, i) => <ListItemBasic key={i} car={car} />)}
        </tbody>
      </table>
    </div>
  );
};
