import { Float, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const Symbols = ({ width }) => {
   const { scene: reactIcon } = useGLTF('./models/reactIcon.gltf');
   const { scene: htmlIcon } = useGLTF('./models/html.glb');
   const { scene: cssIcon } = useGLTF('./models/css.glb');
   const { scene: jsIcon } = useGLTF('./models/js.glb');

   const size = 0.35
   const icons = [htmlIcon, cssIcon, jsIcon ]
   const setIconstSize = (icons,size) => {
      icons.forEach(icon=>{
         icon.scale.set(size,size,size)
      })
      reactIcon.scale.set(1.8, 1.8, 1.5);
   }
   
   setIconstSize(icons,size)

   const htmlPosition = width < 800 ? [-1.7, -0.5, -0.5] : [3.7, -0.5, 0.2];
   const cssPosition = width < 800 ? [-1.7, -0.5, -0.5] : [3.5, -1, 0.2];
   const jsPosition = width < 800 ? [-1.7, -0.5, -0.5] : [3.3, -1.5, 0.2];
   const reactIconPosition = width < 800 ? [-1.7, -0.5, -0.5] : [2.9, -1.5, 0.2];

   return (
         <Float rotationIntensity={0.1} speed={1}>
            <Suspense fallback={null}>
               <primitive object={htmlIcon} position={htmlPosition} />
               <primitive object={cssIcon} position={cssPosition} />
               <primitive object={jsIcon} position={jsPosition} />
               <primitive object={reactIcon} position={reactIconPosition} rotation={[-0.3, 1.3, 0.3]}/>
            </Suspense>
         </Float>
   );
};

export default Symbols;
