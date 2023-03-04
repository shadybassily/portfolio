import { Float, Text3D, useGLTF } from '@react-three/drei';


import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const symbolPath = "./public/models/cube1.glb"
const Symbols = ({commonTextOptions,width}) => {
   //  const { scene: reactIcon } = useGLTF("../../assets/models/cube1.glb");
   //  reactIcon.scale.set(1, 1, 1);
   
   const gltf = useLoader(GLTFLoader, symbolPath)
    const tagPoisiton = width < 800 ? [1, 1.2, 0.5] : [3, 1, 0.3];
    const reactIconPosition = width < 800 ? [-1.7, -0.5, -0.5] : [0.5, -1.3, -0.3];
 
    return(
       <Float speed={1.4} rotationIntensity={3} floatIntensity={2}>
             <Text3D {...commonTextOptions} position={tagPoisiton} size={0.25}>
                {'</>'}
                <meshStandardMaterial color="#3498db" />
             </Text3D>
             <primitive object={gltf.scene} position={reactIconPosition} rotation={[-0.3, 1.3, 0.3]} />
       </Float>
    )
 }
 
 
 export default Symbols