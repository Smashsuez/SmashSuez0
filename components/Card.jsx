import React from 'react'
import styles from "../styles/Card.module.css"
import Image from 'next/image'
import Link from 'next/link';


const Card = ({list}) => {
    return (
    <>
    <Link href={`/product/${list._id}`} passHref>
    <div className={styles.container}>
        <Image className={styles.image} src="/imgs/3.png" width="50" height="50" alt=""/>
        <h1 className={styles.title} style={{ textDecoration: 'none' }}>{list.title}</h1>
        <hr className={styles.line}/>
        <p className={styles.desc} style={{ textDecoration: 'none' }}>
        {list.desc}
        </p>
    </div> 
    </Link>
    </>
    
    )
}

export default Card;