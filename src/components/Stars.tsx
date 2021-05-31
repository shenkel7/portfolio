import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import { useTexture } from "@react-three/drei";

const MAX_POINTS = 3000;
const MAX_VELOCITY = 10;

const Stars = () => {

    const [scrolled, setScrolled] = useState(false);
    const points = useRef<THREE.Points>();
    let theta = 0;
    let velocity = 0;
    let acceleration = .5;
    useFrame(() => {
    if (points.current) {
        const r = 5 * Math.sin(THREE.MathUtils.degToRad((theta * .01)));
        let s = Math.cos(THREE.MathUtils.degToRad(theta -= .5)) + 1.5;
        points.current.rotation.set(0, r, 0);
        points.current.scale.set(s, s, s);

        if(scrolled && points.current){
            if( velocity < MAX_VELOCITY){
                velocity += acceleration;
            }
            points.current.translateY(velocity);
            if(points.current.position.y > 400){
                points.current.position.y = -100;
                acceleration = 0;
              }
          }
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
      <pointsMaterial attach="material" color="#ffddaa" size={2.0} sizeAttenuation={false} />
    </points>
  );
};
export { Stars };