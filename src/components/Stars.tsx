import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import { useTexture } from "@react-three/drei";

const MAX_POINTS = 3000;

const Stars = () => {

    const points = useRef<THREE.Points>();
    let theta = 0;
    useFrame(() => {
    if (points.current) {
        const r = 5 * Math.sin(THREE.MathUtils.degToRad((theta -= 0.002)));
        const s = Math.cos(THREE.MathUtils.degToRad(theta * 10));
        points.current.rotation.set(r, r, r);
        points.current.scale.set(s, s, s);
    }
  });

  const [positions] = useMemo(() => {
    //create stars
    
    let positions = [];
    for(let i = 0; i < 1000; i++){
        for(let j = 0; j < 3; j++){ // x,y,z
            positions.push(Math.random() * 600 - 300);
        }
    }

    return [new Float32Array(positions)];
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
        {/* <bufferAttribute ref={attrib} attachObject={["attributes", "color"]} count={colors.length / 3} array={colors} itemSize={3} /> */}
      </bufferGeometry>
      <pointsMaterial attach="material" color="#ffddaa" size={1.0} sizeAttenuation={false} />
    </points>
  );
};
export { Stars };