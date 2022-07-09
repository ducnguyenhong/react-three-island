import { useHingeConstraint } from "@react-three/cannon"
import { forwardRef, useEffect, useRef, useState } from "react"
import { normalizeSize } from "../constants/size"
import ConstraintPart from "./constraint-part"

const Legs = forwardRef(({ bodyDepth = 0, delay = 0, motorSpeed = 7, ...props }, bodyRef) => {
  const horizontalRef = useRef<any>()
  const frontLegRef = useRef<any>()
  const frontUpperLegRef = useRef<any>()
  const backLegRef = useRef<any>()
  const partDepth = 0.3
  const bodyWidth = 10
  const bodyHeight = 2
  const legLength = 6
  const size3 = normalizeSize([1, 3, partDepth])
  const size5 = normalizeSize([1, 5, partDepth])
  const size10 = normalizeSize([1, 10, partDepth])
  const [isWalking, setIsWalking] = useState(false)

  // Hinge constraints for triangulations
  useHingeConstraint(frontUpperLegRef, frontLegRef, {
    collideConnected: false,
    axisA: [0, 0, 1],
    axisB: [0, 0, 1],
    pivotA: size3([0, 0.5, 0.5]),
    pivotB: size5([0, 0.5, -0.5]),
  })

  useHingeConstraint(backLegRef, horizontalRef, {
    collideConnected: false,
    axisA: [0, 0, 1],
    axisB: [0, 0, 1],
    pivotA: size5([0, 0.5, 0.5]),
    pivotB: size10([0, 0.5, -0.5]),
  })

  useEffect(() => {
    const t = setTimeout(() => setIsWalking(true), delay)
    return () => clearTimeout(t)
  }, [])

  return (
    <group {...props}>
      {/* Body */}
      <ConstraintPart
        ref={bodyRef}
        mass={1}
        args={[bodyHeight, bodyWidth, bodyDepth ? bodyDepth + partDepth * 3 : 0]}
        rotation={[0, 0, Math.PI / 2]}
        position={[0, 0, bodyDepth]}
        transparent={!bodyDepth}
        opacity={Number(!!bodyDepth)}>
        {/* Upper front leg */}
        <ConstraintPart
          ref={frontUpperLegRef}
          args={[1, 3, partDepth]}
          position={[-2, 0.5, bodyDepth]}
          rotation={[0, 0, Math.PI / 3]}
          pivot={[0, -0.5, -0.5]}
          parentPivot={[0, 0.2, 0.5]}
          color="#85ffb3"
        />
        {/* Crank */}
        <ConstraintPart
          enableMotor={isWalking} // Motor enabled here
          motorSpeed={motorSpeed}
          args={[0.5, 1, partDepth]}
          position={[bodyWidth * -0.5, -1.5 / 2, bodyDepth]}
          parentPivot={[0, 0.5, 0.5]}
          pivot={[0, 0.5, -0.5]}
          color="black">
          {/* Front leg */}
          <ConstraintPart
            ref={frontLegRef}
            args={[1, legLength, partDepth]}
            position={[bodyWidth * -0.5, -1, bodyDepth]}
            rotation={[0, 0, Math.PI / -6]}
            parentPivot={[0, -0.5, 0.5]}
            pivot={[0, 0, -0.5]}
            color="#85b3ff">
            {/* Horizontal bar */}
            <ConstraintPart
              ref={horizontalRef}
              parentPivot={[0, 0, 0.5]}
              pivot={[0, -0.5, -0.5]}
              args={[1, bodyWidth, partDepth]}
              position={[0, 0, bodyDepth]}
              color="#ff85b3"
              rotation={[0, 0, Math.PI / -2.5]}
            />
          </ConstraintPart>
        </ConstraintPart>
        {/* Back leg */}
        <ConstraintPart
          ref={backLegRef}
          args={[1, legLength, partDepth]}
          pivot={[0, -0, -1]}
          parentPivot={[-0.0, -0.5, 0.5]}
          position={[bodyWidth * 0.5, 0, bodyDepth]}
          rotation={[0, 0, Math.PI / 4]}
          color="#85b3ff"></ConstraintPart>
      </ConstraintPart>
    </group>
  )
})

export default Legs