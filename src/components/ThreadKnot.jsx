import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const DenimKnot = () => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  // 1. Create a Denim Twill texture
  const denimTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    // Fill with base indigo
    ctx.fillStyle = '#e9e9e9ff';
    ctx.fillRect(0, 0, 128, 128);

    // Draw diagonal white/light blue "twill" threads
    ctx.strokeStyle = '#ebebebff';
    ctx.lineWidth = 1;
    for (let i = -128; i < 128; i += 4) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 128, 128);
      ctx.stroke();
    }
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    // Repeat more on X to make the thread look long, less on Y to see the "weave"
    tex.repeat.set(20, 2); 
    return tex;
  }, []);

  // Global mouse tracking
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
    if (!meshRef.current || !materialRef.current) return;

    const time = state.clock.getElapsedTime();

    // Smoothly follow the mouse
    const targetX = (mouse.current.x * state.viewport.width) / 6;
    const targetY = (mouse.current.y * state.viewport.height) / 6;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(mouse.current.y * 1, targetY, 0.05);

    // Rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.004;

    // Animate the "yarn" moving through the knot
    materialRef.current.map.offset.x -= 0.003;
    materialRef.current.normalMap.offset.x -= 0.003;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={0.9}>
        {/* THINNER ARGS: [overall_radius, tube_thickness, tubularSegments, radialSegments] */}
        {/* We use 0.08 for a much thinner, elegant thread look */}
        <torusKnotGeometry args={[1, 0.08, 400, 32, 2, 3]} />
        <meshPhysicalMaterial
          ref={materialRef}
          color="#ffffffffff" 
          map={denimTexture}
          normalMap={denimTexture}
          normalScale={new THREE.Vector2(0.8, 0.8)}
          roughness={0.9}
          metalness={0}
          sheen={1}
          sheenRoughness={0.5}
          sheenColor="#f2f2f2ff" // Highlights look like faded denim
        />
      </mesh>
    </Float>
  );
};

export default function ThreadKnot() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 10, 5]} intensity={1.5} penumbra={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4d648d" />
        
        <DenimKnot />
        
        <Environment preset="warehouse" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}