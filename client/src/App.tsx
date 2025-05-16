import "./App.css";
import { HomePage } from "./pages/Home";
import { Route, Routes } from "react-router";
import { Client } from "./pages/Client";
import { ModuleManager } from "./pages/ModuleManager";
import { Reports } from "./pages/Reports";

function App() {
  // integrate with react-router
  // add homne as default page
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client" element={<Client />} />
        <Route path="/manager" element={<ModuleManager />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;
