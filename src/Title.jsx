import { Center, Float, Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function Title({ position, scale }) {
    const [clicked, setClicked] = useState(false);

    const reactLogo = useGLTF('./reactjs.gltf');
    const nodeLogo = useGLTF('./nodejs.gltf');
    const arrow = useGLTF('./arrow.gltf');

    const arrowRef = useRef();

    useFrame((state) => {
        arrowRef.current.rotation.x += 0.01;
        if(clicked){
            gsap
                .to(state.camera.position, 3, {x: 10})
                .eventCallback('onComplete', () => setClicked(false));
        }
    });


    return (
        <group 
            position={position} 
            scale={scale} 
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerLeave={() => document.body.style.cursor = 'default'}
            onClick={() => setClicked(true)}
        >
            <pointLight intensity={3} />

            <Float>
                <Center>
                    <primitive
                        object={reactLogo.scene}
                        scale={1.8}
                        position={[5, 0, -1]}
                    />
                    <primitive
                        object={nodeLogo.scene}
                        scale={2}
                        position={[0.5, 0, -1]}
                    />

                    <Text3D
                        font='./Alata_Regular.json'
                        position={[0, 1, 0]}
                    >
                        Portfolio
                        <meshStandardMaterial color='#000' />
                    </Text3D>
                    <primitive
                        ref={arrowRef}
                        object={arrow.scene}
                        scale={1}
                        position={[2.5, 0, 0]}
                        rotation={[0, 0, -Math.PI /2]}
                    />
                    {/* <Text3D
                        font='./Alata_Regular.json'
                    >
                        Developer
                        <meshStandardMaterial color='#000' />
                    </Text3D> */}
                </Center>
            </Float>
        </group>
    )
}