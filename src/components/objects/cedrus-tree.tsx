import { Vector3 } from "@react-three/fiber"
import ConeGeometry from "../geometries/cone"
import CylinderGeometry from "../geometries/cylinder"

interface CedrusTreeProps {
  position: Vector3
}


const CedrusTree: React.FC<CedrusTreeProps> = (props) => {
  const { position } = props
  return (
    <group position={position}>
      {/* gốc cây */}
      <CylinderGeometry args={[0.4, 0.7, 2, 6]} position={[0, -4, 0]} color="#A6674C" />

      {/* lá */}
      <ConeGeometry args={[2.4, 6.5, 7, 1]} position={[0, 0, 0]} color="#9ED154" />
      <ConeGeometry args={[2.1, 5.5, 7, 1]} position={[0, 0.5, 0]} color="#9ED154" />
      <ConeGeometry args={[1.8, 4.5, 7, 1]} position={[0, 1, 0]} color="#9ED154" />
      <ConeGeometry args={[1.5, 3.5, 7, 1]} position={[0, 1.5, 0]} color="#9ED154" />
      <ConeGeometry args={[1.2, 2.5, 7, 1]} position={[0, 2, 0]} color="#9ED154" />
      <ConeGeometry args={[0.9, 2.2, 7, 1]} position={[0, 2.5, 0]} color="#9ED154" />
      <ConeGeometry args={[0.6, 2.0, 7, 1]} position={[0, 3, 0]} color="#9ED154" />

    </group>
  )
}

export default CedrusTree