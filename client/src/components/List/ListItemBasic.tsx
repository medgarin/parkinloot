import type { Car } from "../../types/Cars";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegMoneyBill1 } from "react-icons/fa6";

export const ListItemBasic = ({ car }: { car: Car }) => {
  // add bussiness logic here 1st only can show the button pay for cars with status "PENDING"

  const isActive = car.status == "ACTIVE" ? true : false;

  const startTime = new Date(car.startDateTime);
  const endTime = new Date(car.endDateTime);

  const timeParked = Math.floor(
    (endTime.getTime() - startTime.getTime()) / 1000 / 60
  );

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 font-semibold text-slate-600">{car.id}</td>
      <td className="px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-slate-700">{car.type}</p>
          <p className="text-sm text-slate-500">{car.registration}</p>
        </div>
      </td>
      <td className="px-6 py-4">
        <div
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            isActive ? "text-green-600" : "text-red-600"
          } ${isActive ? "bg-green-100" : "bg-red-100"}`}
        >
          {isActive ? (
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
              <p>{timeParked} min</p>
            </div>
          ) : (
            <p>{timeParked} min</p>
          )}
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">{car.total} MNX</td>
      <td className="px-6 py-4">
        <div className="flex gap-4 items-center">
          {isActive && <FaRegMoneyBill1 className="text-green-700" />}
          <FaRegTrashAlt className="text-red-400" />
        </div>
      </td>
    </tr>
  );
};
