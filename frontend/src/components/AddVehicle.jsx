import React from "react";
import { useState } from "react";
import { createPost } from "../utils/createPost";

export function AddVehicle() {
  const [vin, setVin] = useState("");
  const [licensePlateId, setLicensePlateId] = useState(1);
  const [vehicle, setVehicle] = useState();

  const handleOnClick = async () => {
    try {
      const newPost = await createPost({
        vehicle_identification_number: vin,
        licensePlateId: Number(licensePlateId),
      });
      setVehicle(newPost);
    } catch (err) {
      console.error("Error al agregar vehículo", err);
    }
  };

  return (
    <div className="parking-meter--container">
      <div>
        <h3>Matrícula</h3>
        <input
          type="text"
          name="matricula"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
      </div>

      <div>
        <h3>Tipo: </h3>
        <select
          value={licensePlateId}
          onChange={(e) => setLicensePlateId(e.target.value)}
        >
          <option value="1">Oficial</option>
          <option value="2">Residente</option>
          <option value="3">No residente</option>
        </select>
      </div>

      <button onClick={handleOnClick}>Agregar</button>
    </div>
  );
}
