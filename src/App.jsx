import { Route, Routes } from "react-router-dom";
import PokemonCard from "./pages/PokemonCard";
import ObjectsDissolve from "./pages/ObjectsDissolve";
import ScrollingAnimation from "./pages/ScrollingAnimation";
import LoadingAnimation from "./pages/LoadingAnimation";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon-card" element={<PokemonCard />} />
      <Route path="/objects-dissolve" element={<ObjectsDissolve />} />
      <Route path="/scrolling-animation" element={<ScrollingAnimation />} />
      <Route path="/loading-animation" element={<LoadingAnimation />} />
    </Routes>
  );
}

export default App;
