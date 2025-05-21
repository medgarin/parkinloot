import { useEffect } from "react";
import { useCarsActive } from "../../hooks/useCarsActive";
import type { Car } from "../../types/Cars";
import type { ListType } from "../../types/Reports";
import { ListItemBasic } from "./ListItemBasic";
import { ListItemDetail } from "./ListItemDetail";
import { MdFilterList } from "react-icons/md";
import { useSearchParams } from "react-router";

export interface ListProps {
  list: Car[];
  ListType: ListType;
}

export const List = ({ list, ListType }: ListProps) => {
  const isDetail = ListType === "DETAIL";

  const [searchParams, setSearchparams] = useSearchParams();

  const { getGetActiveCars, cars } = useCarsActive();

  useEffect(() => {
    getGetActiveCars().catch(null);
  }, [getGetActiveCars]);

  const ListCars = searchParams.get("filter") === "ACTIVE" ? cars : list;

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
            <th className="flex items-center gap-1.5 px-6 py-4">
              Tiempo Estacionado{" "}
              <MdFilterList
                onClick={() => {
                  if (searchParams.get("filter") === "ACTIVE") {
                    setSearchparams({});
                  } else {
                    setSearchparams({ filter: "ACTIVE" });
                  }
                }}
              />
            </th>
            <th className="px-6 py-4">Cantidad a Pagar</th>
            <th className="px-6 py-4">Acción</th>
          </tr>
        </thead>
        <tbody>
          {isDetail
            ? ListCars.map((car, i) => <ListItemDetail key={i} car={car} />)
            : ListCars.map((car, i) => <ListItemBasic key={i} car={car} />)}
        </tbody>
      </table>
    </div>
  );
};
