
import { useLoader } from '@react-three/fiber';
import { DoubleSide, TextureLoader } from 'three';
import photo from '../../assets/images/personal-photo.png';
import { Shadow} from '@react-three/drei';
const Photo = ({width}) =>{
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


 export default Photo