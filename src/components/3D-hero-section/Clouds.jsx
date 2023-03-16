import { useAnimations, useGLTF } from '@react-three/drei';
import { Suspense, useEffect } from 'react';

const Clouds = ({ width }) => {
   const { scene: cloud } = useGLTF('./models/cloud1.glb');
   const { scene: lightning, animations } = useGLTF('./models/lightning.glb');
   const {actions} = useAnimations(animations, lightning )

   const cloudPosition = width < 800 ? [0, 0, 0] : [-5, 0.5, 0.3];
   const lightningPosition = width < 800 ? [0, 0, 0] : [-4.5,-0.5, 0.3];

   lightning.scale.set(0.2, 0.2, 0.2);
   cloud.scale.set(0.7, 0.7, 0.7);

   useEffect(()=>{
      actions?.struck?.play()
   },[])
   return (
      <Suspense fallback={null}>
         <primitive object={cloud} position={cloudPosition} />
         <primitive object={lightning} position={lightningPosition} rotation={[0,0,0.2]} />
      </Suspense>
   );
};

export default Clouds;
