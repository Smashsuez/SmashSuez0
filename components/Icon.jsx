import React from 'react'
import styles from "../styles/Icon.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faInstagram, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";

const Icon = () => {
  return (
    <>
    <div className={styles.icons}>
    <a href="https://m.facebook.com/attackpaintball.suez">
    <FontAwesomeIcon icon={faFacebook}   className={styles.icon}/>
    </a>
    <a href="https://instagram.com/smash.suez?igshid=YmMyMTA2M2Y=">
    <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
    </a>
    <a href="https://wa.me/qr/BCU4L4MWSF6EL1">
    <FontAwesomeIcon icon={faWhatsapp}  className={styles.icon}/>
    </a>
    
    </div>
    </>
  )
}

export default Icon