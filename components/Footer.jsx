import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from 'next/legacy/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>ORDER NOW: 010 2002 7359</div>
      <div className={`${styles.item} ${styles.me}`}>This Website Made by Mohamed Gameel. 0111 38 32 120 <span className={styles.small}>WhatsApp Only</span></div>
    </div>
  )
}

export default Footer ;