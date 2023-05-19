import React from 'react'
import styles from "../styles/Location.module.css"

const Location = () => {
  return (
    <div className={styles.container} id='location'>
        <div className={styles.title}>OUR LOCATION</div>
        <div className={styles.content}>
        <div className={styles.map} 
        data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.8682509552762!2d32.55437533040404!3d29.96565419843522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14562578b3f5e725%3A0xabc2dc238586449!2sSMASH%20BURGER%20SUEZ!5e1!3m2!1sar!2seg!4v1683311313522!5m2!1sar!2seg"  
        width="600" 
        height="450" 
        style={{border:"0"}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={styles.text}
        data-aos="zoom-in-up">Find us at <br/>the heart of the city</div>
        </div>
    </div>
  )
}

export default Location ;