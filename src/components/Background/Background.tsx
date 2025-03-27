"use client";

import React, { useRef } from "react";
import * as THREE from "three";

import fragmentShader from './fragmentShader.glsl';

import { Canvas, useFrame } from "@react-three/fiber";


export default function Background() {
    const u_time = useRef(Math.random() * 100);
    const u_offset = useRef(window.scrollY);
    const u_momentum = useRef(1);
    
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
            }
        }

        useFrame((_, delta) => {
            // calculate acceleration based on scroll
            const acc = Math.abs(u_offset.current - window.scrollY);
            if (acc == 0) {
                u_momentum.current = Math.min(10, Math.max(1, u_momentum.current * 0.95));
            } else {
                u_momentum.current = Math.min(10, Math.max(1, u_momentum.current + ((acc * 0.1) * (delta * 5))));
            }

            u_time.current += delta * 0.4 * u_momentum.current;
            if(matRef.current) {
                matRef.current.uniforms.u_time.value = u_time.current;
                matRef.current.uniforms.u_resolution.value = {x: window.innerWidth, y: window.innerHeight};
            }
            u_offset.current = window.scrollY;
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