import { usePlane } from "@react-three/cannon"
import { memo } from "react"
import { GROUP_GROUND } from "../constants/size"

const Plane = ({ args, ...props }) => {
  const [ref] = usePlane(() => ({ type: 'Static', collisionFilterGroup: GROUP_GROUND, ...props }))
  return (
    <group ref={ref}>
      <mesh>
        <planeGeometry args={args} />
        <meshBasicMaterial color="#ffb385" />
      </mesh>
      <mesh receiveShadow>
        <planeGeometry args={args} />
        <shadowMaterial color="lightsalmon" />
      </mesh>
    </group>
  )
}

export default memo(Plane)