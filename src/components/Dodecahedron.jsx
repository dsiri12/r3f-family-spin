import React from 'react';
import usePromise from 'react-promise-suspense';
import { HTML } from 'drei';

const Dodecahedron = ({ name, time, ...props }) => {
  usePromise((ms) => new Promise((res) => setTimeout(res, ms)), [time]);
  return (
    <mesh {...props}>
      <dodecahedronBufferGeometry attach='geometry' />
      <meshStandardMaterial
        attach='material'
        roughness={0.75}
        emissive='#404057'
      />
      <HTML scaleFactor={10}>
        <div class='content'>
          Suspense <br />
          {name}, {time}ms
        </div>
      </HTML>
    </mesh>
  );
};

export default Dodecahedron;
