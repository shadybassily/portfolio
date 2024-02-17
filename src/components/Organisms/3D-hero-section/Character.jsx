import { useAnimations, useGLTF } from '@react-three/drei';
import { Suspense, useEffect } from 'react';

const Character = ({  width }) => {
   const { scene: character , animations } = useGLTF('./models/character.gltf');
   const characterPosition = width < 800 ? [-1.7, -0.5, -0.5] : [-2, -2.1, 1];
   const {actions} = useAnimations(animations, character )

   character.scale.set(15,15,15)
   console.log(actions)

   useEffect(()=>{
      actions?.wave?.play()
   },[])
   return (
      <Suspense fallback={null}>
         <primitive object={character} position={characterPosition} />
      </Suspense>
   );
};

export default Character;
