import { Vector3 } from "@react-three/fiber"
import TetrahedronGeometry from "../geometries/tetrahedron"

interface LakeProps {
  position: Vector3
}


const Lake: React.FC<LakeProps> = (props) => {
  const { position } = props
  return (
    <group position={position}>
      <TetrahedronGeometry args={[4, 2]} position={[0, -4.5, 0]} color="#A6A8AB" />
      <TetrahedronGeometry args={[4, 2]} position={[4, -4.5, 5]} color="#A6A8AB" />
      <TetrahedronGeometry args={[4, 2]} position={[-6, -4.5, 0]} color="#A6A8AB" />
      <TetrahedronGeometry args={[4, 2]} position={[-12, -4.5, 2]} color="#A6A8AB" />
      <TetrahedronGeometry args={[4, 2]} position={[0, -4.5, 0]} color="#A6A8AB" />
    </group>
  )
}

export default Lake