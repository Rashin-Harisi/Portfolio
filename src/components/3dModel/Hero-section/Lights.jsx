import * as THREE from 'three';

const Lights = () => {
    return (
        <>
            <spotLight
                position={[3,4,4]}
                angle={0.2}
                penumbra={0}
                intensity={100}
                color= "#fdfbd3"
            />
            {/* bluish overhead lamp */}
            <spotLight
                position={[0, 6, 3]}
                angle={0.3}
                penumbra={0.5}
                intensity={40}
                color="#fdfbd3"
            />
            {/* purplish side fill */}
            <spotLight
                position={[-3, 6, 4]}
                angle={0.4}
                penumbra={1}
                intensity={60}
                color="#fdfbd3"
            />
            {/* area light for soft moody fill */}
            <primitive
                object={new THREE.RectAreaLight("#d5d5f7", 8, 3, 2)}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={15}
            />
            {/* subtle point light for atmospheric tone */}
            <pointLight position={[0, 1, 0]} intensity={10} color="#7d41a6" />

        </>
    )
}
export default Lights
