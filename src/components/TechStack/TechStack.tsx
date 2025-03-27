import React from 'react'
import styles from './TechStack.module.css'

interface TechStackProps {
    icons: string[]
}

export default function TechStack(props: TechStackProps) {
    // let icons: string[] = [
    //     "/icons/css-icon.svg",
    //     "/icons/docker-icon.svg",
    //     "/icons/html-icon.svg",
    //     "/icons/java-icon.svg",
    //     "/icons/microsoft-dot-net-icon.svg",
    //     "/icons/nextjs-icon.svg",
    //     "/icons/python-icon.svg",
    //     "/icons/react-js-icon.svg",
    //     "/icons/sql-icon.svg",
    //     "/icons/typescript-icon.svg",
    // ]

    return (
        <div className={styles['tech-stack']}>
            {props.icons.map((icon, index) => {
                return <img key={index} src={icon} alt={icon} className={styles['tech-stack-icon']} />
            })}
        </div>
    )
}
