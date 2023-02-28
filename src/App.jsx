import { Center, OrbitControls, Text3D, useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import gsap from "gsap";
import Intro from "./Intro";
import Title from "./Title";
import Portfolio from "./Portfolio";

export default function App() {


  return (
    <>
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

      <Portfolio position={[10, 0, 0]} />

    </>
  );
}