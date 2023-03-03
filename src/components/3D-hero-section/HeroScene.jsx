import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './scene.css';
import Lights from './Lights';
import Photo from './Photo';
import Info from './Info';

const width = window.innerWidth;
const cameraPosition = width < 800 ? [0, 20, 140] : [0, 0, 100];
const cameraZoom = width < 800 ? 25 : 28;


export default function HeroScene() {
   return (
      <div className="scene-container">
         <Canvas camera={{ position: cameraPosition, zoom: cameraZoom }}>
            <color attach="background" args={['#ecf0f1']} />
            <Lights />
            <Hero />
            <OrbitControls enableZoom={false} />
         </Canvas>
      </div>
   );
}

const Hero = () => {
   return (
      <group>
         <Photo width={width}/>
         <Info width={width}/>
      </group>
   );
};






