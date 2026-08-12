"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  pointer: { x: number; y: number };
  active: boolean;
};

function AvatarRig({ pointer, active }: Props) {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const px = THREE.MathUtils.clamp(pointer.x, -1, 1);
    const py = THREE.MathUtils.clamp(pointer.y, -1, 1);

    if (group.current) {
      group.current.position.y = Math.sin(t * 1.8) * 0.035;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, px * 0.22, 0.08);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -px * 0.035, 0.08);
    }

    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, px * 0.38, 0.1);
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -py * 0.18, 0.1);
    }

    if (rightArm.current) {
      const target = active ? -0.75 - py * 0.15 : -0.15 - py * 0.08;
      rightArm.current.rotation.z = THREE.MathUtils.lerp(rightArm.current.rotation.z, target, 0.08);
      rightArm.current.rotation.x = THREE.MathUtils.lerp(rightArm.current.rotation.x, active ? -0.35 : 0.04, 0.08);
    }

    if (leftArm.current) {
      leftArm.current.rotation.z = THREE.MathUtils.lerp(
        leftArm.current.rotation.z,
        0.12 + px * 0.08,
        0.08
      );
    }
  });

  return (
    <group ref={group} scale={1.12}>
      {/* shoes */}
      <mesh position={[-0.34, -1.72, 0.02]} scale={[0.34, 0.13, 0.52]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color="#171b22" roughness={0.4} />
      </mesh>
      <mesh position={[0.34, -1.72, 0.02]} scale={[0.34, 0.13, 0.52]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color="#171b22" roughness={0.4} />
      </mesh>

      {/* legs */}
      <mesh position={[-0.28, -1.15, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 0.95, 20]} />
        <meshStandardMaterial color="#101f38" roughness={0.55} />
      </mesh>
      <mesh position={[0.28, -1.15, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 0.95, 20]} />
        <meshStandardMaterial color="#101f38" roughness={0.55} />
      </mesh>

      {/* torso / suit */}
      <mesh position={[0, -0.25, 0]}>
        <capsuleGeometry args={[0.53, 0.9, 8, 24]} />
        <meshStandardMaterial color="#0d1c33" roughness={0.5} metalness={0.08} />
      </mesh>

      {/* shirt */}
      <mesh position={[0, -0.02, 0.47]} scale={[0.25, 0.48, 0.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#dbe9f5" roughness={0.7} />
      </mesh>

      {/* tie */}
      <mesh position={[0, -0.23, 0.56]} scale={[0.055, 0.26, 0.035]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#087cff" emissive="#043d82" emissiveIntensity={0.25} />
      </mesh>

      {/* arms */}
      <group ref={leftArm} position={[-0.56, -0.22, 0]}>
        <mesh position={[0, -0.38, 0]}>
          <capsuleGeometry args={[0.16, 0.62, 8, 16]} />
          <meshStandardMaterial color="#0d1c33" roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.78, 0]}>
          <sphereGeometry args={[0.17, 20, 16]} />
          <meshStandardMaterial color="#8c5a43" roughness={0.65} />
        </mesh>
      </group>

      <group ref={rightArm} position={[0.56, -0.22, 0]}>
        <mesh position={[0, -0.38, 0]}>
          <capsuleGeometry args={[0.16, 0.62, 8, 16]} />
          <meshStandardMaterial color="#0d1c33" roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.78, 0.08]}>
          <sphereGeometry args={[0.17, 20, 16]} />
          <meshStandardMaterial color="#8c5a43" roughness={0.65} />
        </mesh>
      </group>

      {/* neck */}
      <mesh position={[0, 0.43, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 0.28, 20]} />
        <meshStandardMaterial color="#8c5a43" roughness={0.65} />
      </mesh>

      {/* head */}
      <group ref={head} position={[0, 0.83, 0]}>
        <mesh>
          <sphereGeometry args={[0.48, 32, 24]} />
          <meshStandardMaterial color="#8c5a43" roughness={0.62} />
        </mesh>

        {/* hair */}
        <mesh position={[0, 0.28, -0.01]} scale={[1.02, 0.48, 0.98]}>
          <sphereGeometry args={[0.48, 32, 20]} />
          <meshStandardMaterial color="#17171a" roughness={0.75} />
        </mesh>

        {/* beard */}
        <mesh position={[0, -0.16, 0.38]} scale={[0.58, 0.55, 0.3]}>
          <sphereGeometry args={[0.32, 24, 16]} />
          <meshStandardMaterial color="#25201d" roughness={0.82} />
        </mesh>

        {/* eyes */}
        <mesh position={[-0.16, 0.03, 0.42]} scale={0.055}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#17171a" />
        </mesh>
        <mesh position={[0.16, 0.03, 0.42]} scale={0.055}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#17171a" />
        </mesh>

        {/* glasses */}
        <mesh position={[-0.16, 0.03, 0.44]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.13, 0.012, 8, 32]} />
          <meshStandardMaterial color="#252b35" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.16, 0.03, 0.44]}>
          <torusGeometry args={[0.13, 0.012, 8, 32]} />
          <meshStandardMaterial color="#252b35" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.03, 0.44]} scale={[0.08, 0.012, 0.012]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#252b35" metalness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

export default function ASHAvatar({ pointer, active }: Props) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.4], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.6} />
      <directionalLight position={[3, 4, 5]} intensity={3.2} color="#d8eaff" />
      <pointLight position={[-3, 1, 2]} intensity={10} distance={7} color="#1584ff" />
      <pointLight position={[3, -1, 2]} intensity={7} distance={6} color="#64b5ff" />
      <AvatarRig pointer={pointer} active={active} />
    </Canvas>
  );
}