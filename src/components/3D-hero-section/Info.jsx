
import myFont from '../../../Roboto Condensed_Bold Italic.json';
import Symbols from './Symbols';
import { Text3D } from '@react-three/drei';

const Info = ({width}) => {
   const namePosition = width < 800 ? [-2.7, -2.2, 0.5] : [-5.3,-0.7, 0.5];
   const titlePosition = width < 800 ? [-3, -3, 0.5] : [-5.3, -1.5, 0.6];

   const commonTextOptions = {
      font: myFont,
      curveSegments: 32,
      bevelEnabled: true,
      bevelSize: 0.02,
      bevelThickness: 0.01,
      rotation: [-0.2, 0, 0],
      letterSpacing: 0.01,
   };
   return (
      <group>
         <Text3D {...commonTextOptions} position={namePosition} size={0.7}>
            Shady Bassily
            <meshPhongMaterial color="#699673" />
         </Text3D>

         <Text3D {...commonTextOptions} position={titlePosition} size={0.5}>
            Front-End Developer
            <meshStandardMaterial color="white" />
         </Text3D>

         <Symbols commonTextOptions={commonTextOptions} width={width} />
      </group>
   );
};

export default Info;
