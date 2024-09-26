import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'; // Importar THREE

// Color de las caras y color de las líneas
const faceColor = '#4a4a4a'; // Gris oscuro
const lineColor = '#00bfbf'; // Teal-600

// Componente que renderiza cada cubo pequeño del cubo de Rubik
const SmallCube = ({ position }) => (
  <mesh position={position}>
    <boxGeometry args={[1, 1, 1]} />
    {/* Material para las caras del cubo */}
    <meshStandardMaterial color={faceColor} />
    
    {/* Líneas alrededor del cubo */}
    <lineSegments>
      <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
      <lineBasicMaterial color={lineColor} />
    </lineSegments>
  </mesh>
);

// Componente para el cubo de Rubik completo
const RubikCube = () => {
  const cubies = [];

  // Generar sub-cubos (cubies) del cubo de Rubik
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // Evitar el cubo central
        if (x !== 0 || y !== 0 || z !== 0) {
          cubies.push(<SmallCube position={[x, y, z]} key={`${x}-${y}-${z}`} />);
        }
      }
    }
  }

  return (
    <Canvas style={{ background: 'transparent' }}>
      {/* Luz Ambiental */}
      <ambientLight intensity={0.4} />
      {/* Luz Direccional */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      {/* Dibujar el cubo de Rubik */}
      {cubies}
      {/* Controles para rotar */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default RubikCube;
