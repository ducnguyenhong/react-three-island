import { useRef } from "react"
import DodecahedronGeometry from "../geometries/dodecahedron"

interface CloudProps {
  args?: any
}


const Cloud: React.FC<CloudProps> = (props) => {
  const { args } = props

  const cloudRef = useRef<any>(null)

  return (
    <mesh>
      <DodecahedronGeometry args={[2.5, 0]} position={[90, 50, 0]} color="#FFF" />
      {/* <DodecahedronGeometry args={[2.5, 0]} position={[86, 50, -3]} color="#FFF" /> */}
      <DodecahedronGeometry args={[2.5, 0]} position={[89, 50, 4]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[94, 50, 2]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[93, 50, -3]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[89, 50, -4]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[94, 50, 6]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[91, 50, -7]} color="#FFF" />

      <DodecahedronGeometry args={[2.5, 0]} position={[92, 53, 3]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[90, 53, -3]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[88, 53, 0]} color="#FFF" />

      <DodecahedronGeometry args={[2.5, 0]} position={[90, 55, 0]} color="#FFF" />
    </mesh>
  )
}

export default Cloud