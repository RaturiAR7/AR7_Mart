import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Croc from "./Croc";
const CrocRender = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: false }}
      frameloop="demand"
      camera={{
        fov: window.innerWidth >= 1000 ? 8 : 10,
        position: [45, 10, 5],
      }}
    >
      <ambientLight intensity={0.2}>
        <pointLight position={[10, 10, 10]} intensity={0.8} />
      </ambientLight>
      <Croc />
      <OrbitControls
        autoRotate={window.innerWidth >= 1000 ? true : false}
        autoRotateSpeed={7}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default CrocRender;
