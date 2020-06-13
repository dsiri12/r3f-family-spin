import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { HTML } from 'drei';
import Content from './components/Content';
import Startup from './components/Startup';

const Fallback = () => (
  <HTML>
    <div class='loading'>Loadig...</div>
  </HTML>
);

const App = () => {
  return (
    <Canvas
      concurrent
      style={{ background: '#0e0e0f' }}
      camera={{ position: [0, 0, 100] }}
    >
      <pointLight color='indianred' />
      <pointLight position={[10, 10, -10]} color='orange' />
      <pointLight position={[-10, -10, 10]} color='lightblue' />
      <Suspense fallback={<Fallback />}>
        <Content />
        <Startup />
      </Suspense>
    </Canvas>
  );
};

export default App;
