import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
import { Group } from "three";
import DodecahedronGeometry from "../geometries/dodecahedron";
interface CloudProps {
  args?: any
}


const Cloud: React.FC<CloudProps> = (props) => {
  const { args } = props

  const cloudRef = useRef<Group>(null)
  const clock = new THREE.Clock();
  const delta = clock.getDelta();

  useFrame(() => {

    const position = cloudRef?.current?.position

    if (position && position.z >= 150) {
      cloudRef?.current?.translateZ(-1)
    }
    if (position && position.z <= -150) {
      cloudRef?.current?.translateZ(1)
    }

    if (position && position.z < 150) {
      cloudRef?.current?.translateZ(3.4 * delta)
    }
    // if (position && position.z > -150 && position.z < 0) {
    //   cloudRef?.current?.translateZ(1)
    // }
  })

  return (
    <group position={[-50, 50, 0]} ref={cloudRef}>
      <DodecahedronGeometry args={[2.5, 0]} position={[10, 0, 0]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[9, 0, 4]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[4, 0, 2]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[3, 0, -3]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[-1, 0, -4]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[4, 0, 6]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[1, 0, -7]} color="#FFF" />

      <DodecahedronGeometry args={[2.5, 0]} position={[2, 3, 3]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[0, 3, -3]} color="#FFF" />
      <DodecahedronGeometry args={[2.5, 0]} position={[-2, 3, 0]} color="#FFF" />

      <DodecahedronGeometry args={[2.5, 0]} position={[0, 5, 0]} color="#FFF" />
    </group>
  )
}

export default Cloud