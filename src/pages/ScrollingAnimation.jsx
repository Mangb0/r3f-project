import "./ScrollingAnimation.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/ScrollingAnimation/Experience";

const ScrollingAnimation = () => {
  return (
    <div className="scrolling">
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default ScrollingAnimation;
