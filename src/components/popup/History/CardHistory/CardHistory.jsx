import React from 'react'
import styles from './CardHistory.module.css'

const CardHistory = ({id, img, description}) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt={id} />
      <small className={styles.num}>0{id}</small>
      <p className={styles.text}>{description}</p>
    </div>
  )
}

export default CardHistory
