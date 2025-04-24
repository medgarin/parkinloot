import React, { useState } from "react";
import { FileReported } from "../utils/reported";

export function CreateFile() {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const handleDownload = () => {
    if (day && hour) {
      FileReported(day, hour).catch(console.error);
    }
  };

  return (
    <div className="file-download">
      <input
        type="number"
        placeholder="Día"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hora"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
      />
      <button onClick={handleDownload}>Generar Reporte</button>
    </div>
  );
}
