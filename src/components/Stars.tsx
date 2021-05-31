import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const Stars = () => {
  let group = useRef<THREE.Group>(null);
  let theta = 0;
  useFrame(() => {
    if (group.current) {
      const r = 5 * Math.sin(THREE.MathUtils.degToRad((theta += 0.002)));
      const s = Math.cos(THREE.MathUtils.degToRad(theta * 2));
      group.current.rotation.set(r, r, r);
      group.current.scale.set(s, s, s);
    }
  });

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(0.3, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffddaa")
    });
    const coords = new Array(1000)
      .fill([0,0,0])
      .map(i => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400
      ]);
    return [geo, mat, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
};
export { Stars };