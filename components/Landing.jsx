import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from "../styles/Landing.module.css";
import Image from 'next/image';
import Icon from './Icon';
import ReactPlayer from 'react-player';
//import video from '../public/videos/ooo.mp4';
const Landing = () => {
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <h1>SMASH BURGER,
                            <Typewriter
                                options={{
                                    strings: ['Burgers with a difference.', 'Try our Smash Burger.'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                    </div>
                    <div>
                        <p className={styles.description}>Welcome to Smash Burger! Our burgers are made fresh, <br />smashed to perfection, and full of flavor. <br />
                            Come in and try one today!
                        </p>
                    </div>
                    <Icon />
                </div>
                <div className={styles.images}>
                    <div className={styles.imageWrapper}>
                        <Image className={styles.image} src="/imgs/newBurger1.png" layout="fill"  alt="" />
                    </div>
                    <div className={styles.video}>
                    <video className={styles.video} width="100%" height="100%" autoPlay loop muted>
                        <source src="/videos/ooo.mp4" type="video/mp4" />
                    </video>
                    </div>
                </div>
                <div className={styles.button}>
                    <div className={styles.mainTitle} onClick={() => handleScrollTo("menu")}>
                        <Image src="/imgs/4522591.png" alt="" width="200" height="100" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
