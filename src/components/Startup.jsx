import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import lerp from 'lerp';

const Startup = () => {
  const { camera } = useThree();
  const ref = useRef();

  useFrame(() => {
    ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.01);
    camera.position.z = lerp(camera.position.z, 7, 0.1);
    camera.updateProjectionMatrix();
  });
  return (
    <mesh ref={ref} position={[0, 0, 4]} scale={[100, 100, 1]}>
      <planeBufferGeometry attach='geometry' />
      <meshBasicMaterial
        attach='material'
        color='#0e0e0f'
        transparent
        opacity={1}
      />
    </mesh>
  );
};

export default Startup;
