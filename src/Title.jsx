import { Center, Float, Text3D, useGLTF } from "@react-three/drei";

export default function Title({ position, scale }) {
    const reactLogo = useGLTF('./reactjs.gltf');
    const nodeLogo = useGLTF('./nodejs.gltf');


    return (
        <group position={position} scale={scale}>
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
                        position={[0, 1.4, 0]}
                    >
                        Web
                        <meshStandardMaterial color='#000' />
                    </Text3D>
                    <Text3D
                        font='./Alata_Regular.json'
                    >
                        Developer
                        <meshStandardMaterial color='#000' />
                    </Text3D>
                </Center>
            </Float>
        </group>
    )
}