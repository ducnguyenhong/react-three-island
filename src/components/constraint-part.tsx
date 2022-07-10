import { useBox, useHingeConstraint } from "@react-three/cannon"
import { forwardRef, useContext, useEffect } from "react"
import { context } from "../App"
import { GROUP_BODY, GROUP_GROUND, normalizeSize } from "../constants/size"
import BoxShape from "./box-shape"

const ConstraintPart = forwardRef(
  ({ config = {}, enableMotor, motorSpeed, color, children, name, pivot = [0, 0, 0], parentPivot = [0, 0, 0], ...props }, ref) => {
    const parent: any = useContext(context)
    const normParentPivot = parent ? normalizeSize(parent[1].args) : () => undefined
    const normPivot = props.args ? normalizeSize(props.args) : () => undefined

    const [bodyRef] = useBox(
      () => ({ collisionFilterGroup: GROUP_BODY, collisionFilterMask: GROUP_GROUND, linearDamping: 0.4, mass: 1, ...props }),
      ref,
    )

    const [, , hingeApi] = useHingeConstraint(bodyRef, parent ? parent[0] : null, {
      collideConnected: false,
      axisA: [0, 0, 1],
      axisB: [0, 0, 1],
      pivotA: normPivot(pivot),
      pivotB: normParentPivot(parentPivot),
      ...config,
    })

    useEffect(() => void hingeApi[(enableMotor ? 'enable' : 'disable') + 'Motor'](), [enableMotor])
    useEffect(() => void hingeApi.setMotorSpeed(motorSpeed), [motorSpeed])

    return (
      <context.Provider value={[bodyRef, props]}>
        <BoxShape ref={bodyRef} {...props} color={color} />
        {children}
      </context.Provider>
    )
  },
)

export default ConstraintPart