import ConstraintPart from "./constraint-part"

const Obstacles = () => {
  return (
    <>
      <ConstraintPart
        // collisionFilterGroup={GROUP_GROUND}
        // collisionFilterMask={GROUP_BODY | GROUP_GROUND}
        // mass={4}
        args={[-10, -2, 10]}
        position={[-45, -4, 0]}
        // rotation={[0, Math.PI / -4, 0]}
        color={'#ffb385'}
      />

      <ConstraintPart
        // collisionFilterGroup={GROUP_GROUND}
        // collisionFilterMask={GROUP_BODY | GROUP_GROUND}
        // mass={4}
        args={[-10, -2, 10]}
        position={[-90, -4, 0]}
        // rotation={[0, Math.PI / -4, 0]}
        color={'#ffb385'}
      />
      {/* <ConstraintPart
        collisionFilterGroup={GROUP_GROUND}
        collisionFilterMask={GROUP_BODY | GROUP_GROUND}
        mass={4}
        args={[-15, -0.5, 15]}
        position={[-50, -2, 0]}
        rotation={[0, Math.PI / -1.25, 0]}
        color={'#dc9c76'}
      />
      <ConstraintPart
        collisionFilterGroup={GROUP_GROUND}
        collisionFilterMask={GROUP_BODY | GROUP_GROUND}
        mass={4}
        args={[-10, -0.5, 10]}
        position={[-45, 0, -5]}
        rotation={[0, Math.PI / 3, 0]}
        color={'#c58e6e'} */}
      />
    </>
  )
}

export default Obstacles