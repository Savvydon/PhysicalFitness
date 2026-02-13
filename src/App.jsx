import { Routes, Route } from "react-router-dom";
import PhysicalFitness from "./components/PhysicalFitness";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PhysicalFitness />} />
    </Routes>
  );
}
