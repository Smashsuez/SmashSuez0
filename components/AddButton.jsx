import React from 'react'
import styles from "../styles/AddButton.module.css"

const AddButton = ({setClose}) => {
  return (
    <div className={styles.container}>
    <div className={styles.mainAddButton} onClick={()=> setClose(false)} >Add New</div>
    </div>
  )
}

export default AddButton