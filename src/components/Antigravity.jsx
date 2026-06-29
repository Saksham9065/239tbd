"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Create one particle with initial physics properties
 */
function createParticle(width, height) {
  const x = (Math.random() - 0.5) * width;
  const y = (Math.random() - 0.5) * height;
  const z = (Math.random() - 0.5) * 20;

  return {
    home: new THREE.Vector3(x, y, z),
    current: new THREE.Vector3(x, y, z),
    angle: Math.random() * Math.PI * 2,
    speed: 0.01 + Math.random() * 0.02,
    offset: (Math.random() - 0.5) * 2,
  };
}

function ParticleField({
  count = 300,
  color = "#10B981",
  magnetRadius = 10,
  ringRadius = 10,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 2,
  lerpSpeed = 0.08,
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = "capsule",
  fieldStrength = 10,
}) {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useRef([]);
  const pointer = useRef({ x: 0, y: 0 });
  
  // FIXED: Initialized as null to avoid "impure function during render" error
  const lastMove = useRef(null);
  useEffect(() => {
    lastMove.current = Date.now();
  }, []);

  useEffect(() => {
    particles.current = Array.from({ length: count }, () => 
      createParticle(viewport.width || 10, viewport.height || 10)
    );
  }, [count, viewport.width, viewport.height]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { pointer: mouse, viewport: vp, clock } = state;

    // Track mouse movement
    const deltaMouse = Math.abs(mouse.x - pointer.current.x) + Math.abs(mouse.y - pointer.current.y);
    if (deltaMouse > 0.0005) {
      pointer.current.x = mouse.x;
      pointer.current.y = mouse.y;
      lastMove.current = Date.now();
    }

    let targetX = (mouse.x * vp.width) / 2;
    let targetY = (mouse.y * vp.height) / 2;

    if (autoAnimate && lastMove.current && Date.now() - lastMove.current > 2000) {
      const t = clock.getElapsedTime();
      targetX = Math.sin(t * 0.5) * (vp.width / 4);
      targetY = Math.cos(t * 0.75) * (vp.height / 4);
    }

    const rotation = clock.getElapsedTime() * rotationSpeed;

    particles.current.forEach((particle, index) => {
      particle.angle += particle.speed;
      let { home, current } = particle;

      let targetPX = home.x;
      let targetPY = home.y;
      let targetPZ = home.z * depthFactor;

      const dx = home.x - targetX;
      const dy = home.y - targetY;
      const distanceSq = dx * dx + dy * dy;

      if (distanceSq < magnetRadius * magnetRadius) {
        // FIXED: Removed unused 'distance' variable to satisfy linter
        const angle = Math.atan2(dy, dx) + rotation;
        const wave = Math.sin(particle.angle * waveSpeed + angle) * waveAmplitude;
        const radius = ringRadius + wave + particle.offset * (5 / (fieldStrength + 0.1));

        targetPX = targetX + radius * Math.cos(angle);
        targetPY = targetY + radius * Math.sin(angle);
        targetPZ = home.z * depthFactor + Math.sin(particle.angle) * waveAmplitude;
      }

      current.x += (targetPX - current.x) * lerpSpeed;
      current.y += (targetPY - current.y) * lerpSpeed;
      current.z += (targetPZ - current.z) * lerpSpeed;

      dummy.position.copy(current);
      dummy.lookAt(targetX, targetY, current.z);
      dummy.rotateX(Math.PI / 2);

      const ringDistance = Math.abs(Math.sqrt((current.x - targetX) ** 2 + (current.y - targetY) ** 2) - ringRadius);
      const scale = Math.max(0, 1 - ringDistance / 10) * (0.8 + Math.sin(particle.angle * pulseSpeed) * 0.2 * particleVariance) * particleSize;

      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(index, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      {particleShape === "capsule" && <capsuleGeometry args={[0.08, 0.4, 4, 8]} />}
      {particleShape === "sphere" && <sphereGeometry args={[0.15, 16, 16]} />}
      {particleShape === "box" && <boxGeometry args={[0.22, 0.22, 0.22]} />}
      {particleShape === "tetrahedron" && <tetrahedronGeometry args={[0.18]} />}
      <meshBasicMaterial color={color} toneMapped={false} />
    </instancedMesh>
  );
}

export default function Antigravity(props) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 0, 40], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ParticleField {...props} />
      </Canvas>
    </div>
  );
}