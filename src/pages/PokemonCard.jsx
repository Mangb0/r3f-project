import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/PokemonCard/Experience";

const PokemonCard = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
};

export default PokemonCard;
