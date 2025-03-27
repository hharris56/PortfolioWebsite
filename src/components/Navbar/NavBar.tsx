import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {

    return (
        <div className={styles["navbar"]} key="navbar" id="navbar">
            <Link href="#home" className={styles['nav-button']}>
                Home
            </Link>
            <Link href="#about" className={styles['nav-button']}>
                About
            </Link>
            <Link href="#projects" className={styles['nav-button']}>
                Projects
            </Link>
            <Link href="#contact" className={styles['nav-button']}>
                Contact
            </Link>
        </div>
    )
}
