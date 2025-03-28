"use client";

import React, { useRef } from "react";
import * as THREE from "three";

import fragmentShader from './fragmentShader.glsl';

import { Canvas, useFrame } from "@react-three/fiber";


export default function Background() {
    const u_time = useRef(Math.random() * 100);
    const u_seed = useRef(Math.random());
    
    function Plane() {
        const matRef = useRef<THREE.ShaderMaterial>(null!);

        const uniformData = {
            u_resolution: {
                type: 'vec2',
                value: {x: window.innerWidth, y: window.innerHeight}
            },
            u_time: {
                type: 'float',
                value: u_time.current
            },
            u_offset: {
                type: 'float',
                value: 0
            },
            u_seed: {
                type: 'float',
                value: u_seed.current
            }
        }

        useFrame((_) => {
            u_time.current += 0.002;
            if(matRef.current) {
                matRef.current.uniforms.u_time.value = u_time.current;
                matRef.current.uniforms.u_offset.value = window.scrollY * 0.01;
                matRef.current.uniforms.u_resolution.value = {x: window.innerWidth, y: window.innerHeight};
            }
        })

        return(
            <mesh>
                <planeGeometry args={[100, 100, 100, 100]} />
                <shaderMaterial 
                    ref={matRef}
                    uniforms={uniformData}
                    fragmentShader={fragmentShader}
                />
            </mesh>
        )
    }

    return (
        <div id="bg" style={{width: "100%", height: "100%", position: "absolute", top: "0", left: "0", zIndex: "-1"}}>
            <Canvas>
                <ambientLight intensity={4}/>
                <Plane />
            </Canvas>
        </div>
    )
}