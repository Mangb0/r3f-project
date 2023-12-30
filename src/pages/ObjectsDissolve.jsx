import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/ObjectsDissolve/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const ObjectsDissolve = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 5], fov: 42 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
};

export default ObjectsDissolve;
