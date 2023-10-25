import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./Earth";

const EarthRender = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: false }}
      frameloop="demand"
      camera={{
        fov: window.innerWidth >= 1000 ? 15 : 25,
        position: [0, 5, 25],
      }}
    >
      <Earth />
      <OrbitControls
        autoRotate={window.innerWidth >= 1000 ? true : false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotateSpeed={5}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default EarthRender;
