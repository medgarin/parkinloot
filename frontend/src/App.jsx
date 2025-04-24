import "./App.css";
import { AddVehicle } from "./components/AddVehicle";
import { CalculateAmount } from "./components/CalculateAmount";
import { SeederButtons } from "./components/SeederButtons";
import { CreateFile } from "./components/FileReported";

function App() {
  return (
    <>
      <div className="parking-meter">
        <h1 className="parking-meter--title">Parquímetro</h1>

        <h2>Agregar vehículo</h2>
        <AddVehicle />

        <h2>Cobrar</h2>
        <CalculateAmount />
      </div>
      <SeederButtons />
      <CreateFile />
    </>
  );
}

export default App;
