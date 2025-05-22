import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useCarsInfo } from "../../hooks/useCarsInfo";
import { useEffect, useMemo } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const OccupationChart = () => {
  const { getGetAllCars, cars } = useCarsInfo();

  useEffect(() => {
    getGetAllCars().catch(null);
  }, [getGetAllCars]);

  const activeCars = useMemo(() => {
    return cars.filter((car) => car.status === "ACTIVE").length;
  }, [cars]);

  const freeParkingSpots = 100 - activeCars;

  const dataSet = useMemo(() => {
    return {
      labels: ["Libre", "Ocupado"],
      datasets: [
        {
          label: "carros",
          data: [freeParkingSpots, activeCars],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };
  }, [activeCars, freeParkingSpots]);

  return (
    <div>
      <h2 className="mb-5">Grafica de ocupación</h2>
      <Pie
        data={dataSet}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};
