import { forwardRef } from "react"

const BoxShape = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }, ref) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default BoxShape