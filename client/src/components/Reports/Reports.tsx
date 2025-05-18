import { useEffect } from "react";
import { ListBasic } from "../List/ListBasic";
import { useCarsInfo } from "../../hooks/useCarsInfo";
import { ListDetail } from "../List/ListDetail";
import type { ReportProps } from "../../types/Reports";

// Add props, elemnts to show, type of vieww
export const Reports = ({ ListMode }: ReportProps) => {
  // clean this code, conver into a custom hook
  const { getGetAllCars, cars } = useCarsInfo();

  useEffect(() => {
    getGetAllCars().catch(null);
  }, [getGetAllCars]);

  const List = () => {
    if (ListMode == "BASIC") {
      return <ListBasic list={cars} />;
    }
    if (ListMode == "DETAIL") {
      return <ListDetail list={cars} />;
    }
  };

  return (
    <>
      <h3>Listado de reportes</h3>
      <List />
    </>
  );
};
