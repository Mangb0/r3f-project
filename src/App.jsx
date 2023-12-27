import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/pokemon/Experience";

function App() {
  return (
    // <>
    //   <div>react router</div>
    //   <div className="container">
    //     <div>
    //       <div>card1</div>
    //       <h2>project title</h2>
    //       <h4>content</h4>
    //     </div>
    //     <div>
    //       <div>card2</div>
    //       <h2>project title</h2>
    //       <h4>content</h4>
    //     </div>
    //     <div>
    //       <div>card3</div>
    //       <h2>project title</h2>
    //       <h4>content</h4>
    //     </div>
    //     <div>
    //       <div>card4</div>
    //       <h2>project title</h2>
    //       <h4>content</h4>
    //     </div>
    //   </div>
    // </>
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
