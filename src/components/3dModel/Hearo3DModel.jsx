import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { useMediaQuery } from "react-responsive";
import { My_room } from "./My_room.jsx";
import Particles from "./Particles.jsx";

const Hearo3DModel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <div className="relative xl:top-20 top-24 xl:-right-30 right-0 w-[80%] h-[80%] min-h-[50vh] bg-[#111] rounded-3xl">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.5} color="#aeaef2" />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={18}
          minDistance={5}
          maxPolarAngle={Math.PI / 5}
          minPolarAngle={Math.PI / 2.3}
        />
        <Lights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.2 : 0.35}
          position={[0, -3.0, 0]}
          rotation={[0, -Math.PI / 6, 0]}
        >
          <My_room />
        </group>
      </Canvas>
    </div>
  );
};
export default Hearo3DModel;
