import { forwardRef } from "react"

interface BoxShapeProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const TestGeometry = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }: BoxShapeProps, ref: any) => {

  const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
  ];

  const indicesOfFaces = [
    2, 1, 0, 0, 3, 2,
    0, 4, 7, 7, 3, 0,
    0, 1, 5, 5, 4, 0,
    1, 2, 6, 6, 5, 1,
    2, 3, 7, 7, 6, 2,
    4, 5, 6, 6, 7, 4
  ];

  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <polyhedronGeometry args={[verticesOfCube, indicesOfFaces, 10, 1]} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default TestGeometry