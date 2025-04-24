export async function chargeParking(vin) {
  const res = await fetch(
    `http://localhost:4000/vehicles/charge-parking/${vin}`
  );
  return await res.json();
}
