import React from "react";
import { useState } from "react";
import { chargeParking } from "../utils/chargeParking";

export function CalculateAmount() {
  const [chargeVin, setChargeVin] = useState("");
  const [amount, setAmount] = useState(null);

  const handleCharge = async () => {
    try {
      const response = await chargeParking(chargeVin);
      setAmount(response);
    } catch (err) {
      console.error("Error al cobrar", err);
    }
  };
  return (
    <div className="parking-meter--container">
      <div>
        <h3>Matrícula</h3>
        <input
          type="text"
          value={chargeVin}
          onChange={(e) => setChargeVin(e.target.value)}
        />
      </div>

      <button onClick={handleCharge}>Cobrar</button>
      {amount !== <p>{"     "}</p> && <p>{amount} pesos</p>}
    </div>
  );
}
