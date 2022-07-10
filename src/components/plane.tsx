import { usePlane } from "@react-three/cannon"
import { memo } from "react"
import { GROUP_GROUND } from "../constants/size"

interface PlaneProps {
  args?: any
  position: any
  rotation: any
  bgColor: string
}

const Plane: React.FC<PlaneProps> = (props) => {
  const { args, bgColor, ...planeProps } = props
  const [ref] = usePlane(() => ({ type: 'Static', collisionFilterGroup: GROUP_GROUND, ...planeProps }))
  return (
    <group ref={ref}>
      <mesh>
        <planeGeometry args={args} />
        <meshBasicMaterial color={bgColor} />
      </mesh>
      <mesh receiveShadow>
        <planeGeometry args={args} />
        <shadowMaterial color="lightsalmon" />
      </mesh>
    </group>
  )
}

export default memo(Plane)