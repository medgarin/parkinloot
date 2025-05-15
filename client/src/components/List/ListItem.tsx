import type { Car } from "../../types/Cars";

type ListItemProps = {
  car: Car;
};

export const ListItem = ({ car }: ListItemProps) => {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">{car.id}</td>
      <td className="border border-gray-300 px-4 py-2">{car.registration}</td>
      <td className="border border-gray-300 px-4 py-2">{car.type}</td>
      <td className="border border-gray-300 px-4 py-2">
        <b>{car.total}</b>
      </td>
    </tr>
  );
};
