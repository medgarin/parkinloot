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
    <section className="flex flex-col col-span-2">
      <h3>Estado actualmente al día de hoy</h3>
      <List list={cars} ListType={ListType} />
    </section>
  );
};
