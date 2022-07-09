
# React ThreeJS (Island)

### 0. Cài đặt các thư viện
- `three` `@react-three/fiber` `@react-three/drei` `@react-three/cannon`
- `react` `vite`
> vite

### 1. Chọn camera cho người dùng

- `import { OrbitControls, ... } from '@react-three/drei'`
```
<OrbitControls />
```

### 2. Tạo background
```
<color attach="background" args={['#HEX']} />
```
