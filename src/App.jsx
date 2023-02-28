import { Center, OrbitControls, Text3D, useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import gsap from "gsap";
import Intro from "./Intro";
import Title from "./Title";

export default function App() {
  const arrow = useGLTF('./arrow.gltf');

  const airplane = useGLTF('./airplane.gltf');
  const airplaneRef = useRef();
  const [airplaneHover, setAirplaneHover] = useState(false);


  useFrame(() => {
    if(airplaneHover){
      gsap.to(airplaneRef.current.rotation, 1.5, {x: (-Math.PI / 2 + 0.5) * 5})
    }
  });

  return (
    <>
      <OrbitControls />
      <color args={['#fff']} attach='background' />

      <EffectComposer>
        <Glitch
          delay={[2, 5]}
          duration={[0.1, 0.2]}
          strength={[0.1, 0.3]}
        />
      </EffectComposer>

      <ambientLight />

      <Intro scale={0.7} position={[-1.5, 2, 0]} />
      <Title scale={0.5} position={[1.5, -1, 0]} />

      {/* <group 
        position={[-2.5, -0.5, 0]} 
        onPointerOver={() => setAirplaneHover(true)} 
        onPointerOut={() => setAirplaneHover(false)}
      >
        <Float> 

          <primitive
            ref={airplaneRef}
            object={airplane.scene}
            scale={0.5}
            rotation={[Math.PI / 2, -Math.PI / 2 + 0.5, Math.PI / 2 - 0.7]}
            position={[0, -1, 0]}
          />

          <Center>

            <Text3D
              font='./Alata_Regular.json'
              scale={0.5}
            >
              Portfolio
              <meshStandardMaterial color='#000' />
            </Text3D>
          </Center>
        </Float>

      </group> */}





    </>
  );
}