import { Route, Routes } from "react-router-dom";
import PokemonCard from "./pages/PokemonCard";
import ObjectsDissolve from "./pages/ObjectsDissolve";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon-card" element={<PokemonCard />} />
      <Route path="/objects-dissolve" element={<ObjectsDissolve />} />
    </Routes>
  );
}

export default App;
