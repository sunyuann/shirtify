import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={3}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={1.55}
        ambient={0.85}
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={3}
        radius={20}
        intensity={1}
        ambient={1.25}
        position={[5, 5, -20]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop