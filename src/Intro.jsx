import { Center, Environment, Float, Html, OrbitControls, Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import gsap from "gsap";


export default function Intro({ position, scale }) {
    const linkedinLogo = useGLTF('./linkedin.gltf');
    const linkedinRef = useRef();
    const [linkedinhover, setLinkedinhover] = useState(false);

    const twitterLogo = useGLTF('./twitter.gltf');
    const twitterRef = useRef();
    const [twitterhover, setTwitterhover] = useState(false);

    const mailLogo = useGLTF('./mail.gltf');
    const mailRef = useRef();
    const [mailhover, setMailhover] = useState(false);

    const resumeLogo = useGLTF('./resume.gltf');
    const resumeRef = useRef();
    const [resumehover, setResumehover] = useState(false);



    useFrame(() => {
        if(linkedinhover){
            gsap.to(linkedinRef.current.rotation, 1, {y: Math.PI * 2})
        }
        // else{
        //     gsap.to(linkedinRef.current.rotation, 1, {y: 0})
        // }

        if(twitterhover){
            gsap.to(twitterRef.current.rotation, 1, {y: Math.PI * 2})
        }
        // else{
        //     gsap.to(twitterRef.current.rotation, 1, {y: 0})
        // }

        if(mailhover){
            gsap.to(mailRef.current.rotation, 1, {y: Math.PI * 2})
        }
        // else{
        //     gsap.to(mailRef.current.rotation, 1, {y: 0})
        // }

        if(resumehover){
            gsap.to(resumeRef.current.rotation, 1, {y: Math.PI * 2})
        }
        // else{
        //     gsap.to(resumeRef.current.rotation, 1, {y: 0})
        // }
    })


    return (
        <group position={position} scale={scale}>
            <pointLight intensity={3} />

            <Float>
                <Center>
                    <primitive
                        ref={mailRef}
                        object={mailLogo.scene}
                        scale={0.33}
                        position={[3.5, 1.61, 0]}
                        onClick={() => window.open("mailto:jackyoukstetter1@gmail.com", "_blank") } 
                        onPointerEnter={() => {
                            setMailhover(true);
                            document.body.style.cursor = 'pointer';
                        }} 
                        onPointerLeave={() => {
                            setMailhover(false);
                            document.body.style.cursor = 'default';
                        }}
                    />
                    <primitive
                        ref={linkedinRef}
                        object={linkedinLogo.scene}
                        scale={0.2}
                        position={[4.5, 1.8, 0]}
                        onClick={() => window.open("https://www.linkedin.com/in/jack-youkstetter-6b00a81a8/", "_blank") } 
                        onPointerEnter={() => {
                            setLinkedinhover(true);
                            document.body.style.cursor = 'pointer';
                        }} 
                        onPointerLeave={() => {
                            setLinkedinhover(false);
                            document.body.style.cursor = 'default';
                        }}
                    />
                    <primitive
                        ref={resumeRef}
                        object={resumeLogo.scene}
                        scale={0.5}
                        position={[5.5, 1.86, 0]}
                        onClick={() => window.open("./2023resume.pdf", "_blank") } 
                        onPointerEnter={() => {
                            setResumehover(true);
                            document.body.style.cursor = 'pointer';
                        }} 
                        onPointerLeave={(e) => {
                            setResumehover(false);
                            document.body.style.cursor = 'default';
                        }}
                    />
                    <primitive
                        ref={twitterRef}
                        object={twitterLogo.scene}
                        scale={0.2}
                        position={[6.5, 1.8, 0]}
                        onClick={() => window.open("https://twitter.com/midpaqjack", "_blank") } 
                        onPointerEnter={() => {
                            setTwitterhover(true);
                            document.body.style.cursor = 'pointer';
                        }} 
                        onPointerLeave={() => {
                            setTwitterhover(false);
                            document.body.style.cursor = 'default';
                        }}
                    />


                    <Text3D
                        font='./Alata_Regular.json'
                        position={[0, 1.4, 0]}
                    >
                        Jack
                        <meshStandardMaterial color='#000' />
                    </Text3D>
                    <Text3D
                        font='./Alata_Regular.json'
                    >
                        Youkstetter
                        <meshStandardMaterial color='#000' />
                    </Text3D>
                </Center>
            </Float>
        </group>
    );
}