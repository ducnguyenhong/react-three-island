import { useLockConstraint } from "@react-three/cannon"
import { forwardRef, useRef, useState } from "react"
import Legs from "./legs"

const Robot = forwardRef(({ ...props }, ref) => {
  const [motorSpeed, setMotorSpeed] = useState(7)
  const legsLeftRef = ref
  const legsRightRef = useRef<any>()
  useLockConstraint(legsRightRef, legsLeftRef)
  return (
    <group {...props} onPointerDown={() => setMotorSpeed(2)} onPointerUp={() => setMotorSpeed(7)}>
      <Legs ref={legsLeftRef} delay={1000} bodyDepth={3} motorSpeed={motorSpeed} />
      <Legs ref={legsRightRef} motorSpeed={motorSpeed} />
    </group>
  )
})

export default Robot