import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Dodecahedron from './Dodecahedron';

const Content = () => {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01)
  );
  return (
    <group ref={ref}>
      <Dodecahedron time={500} position={[-2, 0, 0]} name={'Ying'} />
      <Dodecahedron time={1000} position={[0, -2, -3]} name={'Damien'} />
      <Dodecahedron time={1500} position={[2, 0, 0]} name={'Selena'} />
      <Dodecahedron time={2000} position={[2, 1.5, -3]} name={'Frank'} />
    </group>
  );
};

export default Content;
