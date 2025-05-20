import { useEffect } from "react";
import { useCarsInfo } from "../../hooks/useCarsInfo";
import type { ReportProps } from "../../types/Reports";
import { List } from "../List/List";

// Add props, elemnts to show, type of vieww
export const Reports = ({ ListType }: ReportProps) => {
  // clean this code, conver into a custom hook
  const { getGetAllCars, cars } = useCarsInfo();

  useEffect(() => {
    getGetAllCars().catch(null);
  }, [getGetAllCars]);

  return (
    <>
      <h3>Listado de reportes</h3>
      <List list={cars} ListType={ListType} />
    </>
  );
};
