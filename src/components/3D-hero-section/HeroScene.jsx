import { Canvas } from '@react-three/fiber';
import { GradientTexture, OrbitControls } from '@react-three/drei';
import Character from './Character';
import Lights from './Lights';
import Photo from './Photo';
import Info from './Info';
import './scene.css';
import Clouds from './Clouds';

const width = window.innerWidth;
const cameraPosition = width < 800 ? [0, 20, 140] : [0, 0, 100];
const cameraZoom = width < 800 ? 25 : 28;

export default function HeroScene() {
   return (
      <div className="scene-container">
         <Canvas camera={{ position: cameraPosition, zoom: cameraZoom }}>
            <color  args={['#ecf0f1']} />
            <GradientTexture
            attach="background"
               stops={[0, 1]} // As many stops as you want
               colors={['#fff', '#ecf0f1']} // Colors need to match the number of stops
               size={1024} // Size is optional, default = 1024
            />
            <Lights />
            <Hero />
            {/* <Character /> */}
            {/* <Clouds /> */}
            <OrbitControls enableZoom={false} />
         </Canvas>
      </div>
   );
}

const Hero = () => {
   return (
      <group>
         <Photo width={width} />
         <Info width={width} />
      </group>
   );
};
