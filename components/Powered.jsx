import React from 'react'
import styles from "../styles/Powered.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Powered = () => {
  return (
    <>
    <Link href="https://wa.me/message/OBPWMQHNZ5EBL1" passHref>
    <div className={styles.container}>Powered By Coder <Image alt='' src={"/imgs/Coder.png"} width={50} height={30} className={styles.image}/></div>
    </Link>
    </>
  )
}

export default Powered