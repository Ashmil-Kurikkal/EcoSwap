import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Drop = () => {
  const meshRef = useRef(null);

  const geometry = useMemo(() => {
    const points = [];
    const segments = 64;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = t * Math.PI;

      let r;
      if (t < 0.6) {
        r = Math.sin(angle) * 1.0;
      } else {
        const taper = (1 - t) / 0.4;
        r = Math.sin(angle) * 1.0 * Math.pow(taper, 0.6);
      }

      const y = -Math.cos(angle) * 1.4;
      points.push(new THREE.Vector2(Math.max(r, 0.001), y));
    }

    const geo = new THREE.LatheGeometry(points, 128);
    geo.computeVertexNormals();
    return geo;
  }, []);

  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const targetX = (mouse.current.x * state.viewport.width) / 4;
    const targetY = (mouse.current.y * state.viewport.height) / 4;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);

    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry} scale={1.2}>
        <MeshTransmissionMaterial
          backside={false}
          samples={16}
          resolution={512}
          transmission={1}
          roughness={0.0}       // Dropped to 0 for pure glass
          thickness={0.5}       // Thinned out so it doesn't absorb too much light
          ior={1.15}            // Lowered IOR so it doesn't distort into blackness
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.2}      // Slight surface ripple
          distortionScale={0.1}
          temporalDistortion={0.0}
          clearcoat={1}
          color="#ffffff" 
          attenuationDistance={1} 
          attenuationColor="#ffffff" // Forces the inner color to stay bright
        />
      </mesh>
    </Float>
  );
};

export default function FluidDrop() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 10, 5]} intensity={3} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={1} color="#f4f4f5" />
        
        <Drop />

        {/* Swapped "city" for "studio" which uses soft box lights instead of dark buildings */}
        <Environment preset="studio" environmentIntensity={1.5} />

        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.08}
          scale={10}
          blur={3}
          far={4}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}