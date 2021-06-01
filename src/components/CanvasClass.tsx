import React, {Suspense} from 'react'
import {Stars} from 'src/components/Stars'
import { Canvas, useFrame } from '@react-three/fiber'

const CanvasClass = () => {
    return(
        <>
        <Canvas style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -11,
        }}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
        >
            <pointLight position={[10, 10, 10]}/>
            <ambientLight />
            <Suspense fallback={null}>
                <Stars />
            </Suspense>
        </Canvas>
        </>
    )
}

export default CanvasClass;