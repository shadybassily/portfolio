
export default function Lights() {
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
 