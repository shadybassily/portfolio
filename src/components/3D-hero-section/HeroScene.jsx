import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Shadow, Text3D, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { DoubleSide, TextureLoader } from 'three';
import photo from '../../assets/images/personal-photo.png';
import myFont from '../../../Inter_Regular.json';
import './scene.css';

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
            <OrbitControls />
         </Canvas>
      </div>
   );
}

const Hero = () => {
   return (
      <group>
         <Photo/>
         <Info />
      </group>
   );
};


const Photo = () =>{
   const photoPosition = width < 800 ? [0, 0, 0] : [2, 0, 0];
   const texture = useLoader(TextureLoader, photo);
   return (
      <>
         <mesh position={photoPosition}>
            <circleGeometry args={[1.5, 150]} />
            <meshBasicMaterial map={texture} side={DoubleSide} />
            <Shadow color="black" colorStop={0.2} opacity={0.2} position={[0, -2, 0]}/>
         </mesh>
      </>
   );
}


const Info = () => {

   const namePosition = width < 800 ? [-2.5, -2, 0.5] : [-5, 0, 0.5];
   const titlePosition = width < 800 ? [-2.5, -2.5, 0.5] : [-5, -0.6, 0.6];

   const commonTextOptions = {
      font: myFont,
      curveSegments: 32,
      bevelEnabled: true,
      bevelSize: 0.02,
      bevelThickness: 0.01,
      rotation: [-0.2, 0, 0],
      letterSpacing: -0.01,
   };
    return (
      <group>
         <Text3D {...commonTextOptions} position={namePosition} size={0.6}>
            Shady Bassily
            <meshPhongMaterial color="#699673" />
         </Text3D>

         <Text3D {...commonTextOptions} position={titlePosition} size={0.35}>
            Front-End Developer
            <meshStandardMaterial color="white" />
         </Text3D>

         <Symbols commonTextOptions={commonTextOptions}/>
      </group>
   );
};

const Symbols = ({commonTextOptions}) => {
   const { scene: reactIcon } = useGLTF('../../../public/models/reactjs.glb');
   reactIcon.scale.set(0.3, 0.4, 0.3);

   const tagPoisiton = width < 800 ? [1, 1.2, 0.5] : [3, 1, 0.3];
   const reactIconPosition = width < 800 ? [-1.7, -0.5, -0.5] : [0.5, -1.3, -0.3];

   return(
      <Float speed={1.4} rotationIntensity={3} floatIntensity={2}>
            <Text3D {...commonTextOptions} position={tagPoisiton} size={0.25}>
               {'</>'}
               <meshStandardMaterial color="#3498db" />
            </Text3D>
            <primitive object={reactIcon} position={reactIconPosition} rotation={[-0.3, 1.3, 0.3]} />
      </Float>
   )
}

function Lights() {
   return (
      <group>
         <pointLight position={[100, 100, 100]} intensity={0.8} />
         <hemisphereLight
            color="#636e72"
            groundColor="#699673"
            position={[-7, 25, 13]}
            intensity={1}
         />
      </group>
   );
}
