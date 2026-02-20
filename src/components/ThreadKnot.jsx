import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const SilkKnot = () => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  // 1. Create a subtle, high-end woven texture
  const weaveTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 128, 128);

    ctx.strokeStyle = '#f4f4f5'; 
    ctx.lineWidth = 1;
    for (let i = -128; i < 128; i += 4) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 128, 128);
      ctx.stroke();
    }
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(20, 2); 
    return tex;
  }, []);

  // Raw mouse tracking
  const mouse = useRef({ x: 0, y: 0 });
  // Smoothed mouse tracking for the luxury feel
  const smoothMouse = useRef({ x: 0, y: 0 });

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

    // 1. Smooth out the mouse movements
    smoothMouse.current.x = THREE.MathUtils.lerp(smoothMouse.current.x, mouse.current.x, 0.05);
    smoothMouse.current.y = THREE.MathUtils.lerp(smoothMouse.current.y, mouse.current.y, 0.05);

    // 2. Lock Position in place (Translational movement removed entirely)
    
    // 3. Dynamic Rotation: Combines a slow continuous spin with the mouse tilt
    // Multiplying the smoothMouse by 1.2 increases the "look" intensity. 
    meshRef.current.rotation.x = time * 0.15 + (smoothMouse.current.y * 1.2);
    meshRef.current.rotation.y = time * 0.25 + (smoothMouse.current.x * 1.2);

    // 4. Animate the "yarn" weaving through itself
    materialRef.current.map.offset.x -= 0.003;
    materialRef.current.normalMap.offset.x -= 0.003;
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
      {/* We keep scale down to 1.1 to let the typography breathe */}
      <mesh ref={meshRef} scale={0.5}>
        <torusKnotGeometry args={[1, 0.08, 400, 32, 2, 3]} />
        <meshPhysicalMaterial
          ref={materialRef}
          color="#ffffff" 
          map={weaveTexture}
          normalMap={weaveTexture}
          normalScale={new THREE.Vector2(0.3, 0.3)} 
          roughness={0.4} 
          metalness={0.1}
          sheen={1}
          sheenRoughness={0.2}
          sheenColor="#ffffff" 
        />
      </mesh>
    </Float>
  );
};

export default function ThreadKnot() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <spotLight position={[5, 10, 5]} intensity={2.5} penumbra={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#e4e4e7" />
        
        <SilkKnot />
        
        <Environment preset="studio" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.15} scale={10} blur={3} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}