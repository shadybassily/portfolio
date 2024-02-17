import { Float, useGLTF } from '@react-three/drei';
import { Suspense, useEffect } from 'react';

const Symbols = ({ width }) => {
   const { scene: htmlIcon } = useGLTF('./models/html.glb');
   const { scene: cssIcon } = useGLTF('./models/css.glb');
   const { scene: jsIcon } = useGLTF('./models/js.glb');
   const { scene: reactIcon } = useGLTF('./models/reactIcon.glb');

   const htmlPosition = width < 800 ? [-0.9, 1.8, 0.2] : [3.8, -0.5, 0.2];
   const cssPosition = width < 800 ? [-0.3, 2, 0.2] : [3.5, -1, 0.2];
   const jsPosition = width < 800 ? [0.3, 2, 0.2] : [3.3, -1.5, 0.2];
   const reactIconPosition = width < 800 ? [0.9, 2, 0.2] : [2.9, -1.6, 0.2];

   const size = width < 800 ? 0.5 : 0.4;
   const icons = [htmlIcon, cssIcon, jsIcon];
   const setIconstSize = (icons, size) => {
      icons.forEach((icon) => {
         icon.scale.set(size, size, size);
      });
      reactIcon.scale.set(1.8, 1.8, 1.8);
   };

   useEffect(() => {
      setIconstSize(icons, size);
   }, []);

   return (
      <Float rotationIntensity={0.1} speed={1}>
         <Suspense fallback={null}>
            <primitive object={htmlIcon} position={htmlPosition} />
            <primitive object={cssIcon} position={cssPosition} />
            <primitive object={jsIcon} position={jsPosition} />
            <primitive
               object={reactIcon}
               position={reactIconPosition}
               rotation={[-0.3, 1.3, 0.3]}
            />
         </Suspense>
      </Float>
   );
};

export default Symbols;
