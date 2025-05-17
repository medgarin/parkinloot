import type { Car } from "../../types/Cars";

type ListItemProps = {
  car: Car;
};

export const ListItem = ({ car }: ListItemProps) => {
  // add bussiness logic here 1st only can show the button pay for cars with status "PENDING"
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">{car.id}</td>
      <td className="border border-gray-300 px-4 py-2">{car.registration}</td>
      <td className="border border-gray-300 px-4 py-2">{car.startDateTime}</td>
      <td className="border border-gray-300 px-4 py-2">{car.endDateTime}</td>
      <td className="border border-gray-300 px-4 py-2">{car.satus}</td>
      <td className="border border-gray-300 px-4 py-2">{car.type}</td>
      <td className="border border-gray-300 px-4 py-2">
        <b>{car.total}</b>
      </td>
      <td className="border border-gray-300 px-4 py-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Pagar
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Cancelar
        </button>
      </td>
    </tr>
  );
};
