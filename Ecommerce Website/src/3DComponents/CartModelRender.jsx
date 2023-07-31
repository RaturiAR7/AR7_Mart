import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CartModel from "./CartModel";

const CartModelRender = () => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: false }}
      camera={{
        fov: window.innerWidth >= 1000 ? 5 : 11,
        position: [45, 10, 5],
      }}
    >
      <ambientLight intensity={0.6}>
        <pointLight position={[10, 10, 10]} intensity={0.8} />
      </ambientLight>
      <CartModel />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={window.innerWidth >= 1000 ? true : false}
        autoRotateSpeed={5}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default CartModelRender;
