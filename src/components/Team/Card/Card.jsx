import React from 'react'
import styles from './Card.module.css'

const Card = ({name, scill, img}) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.name}>{name}</div>
      <div className={styles.scill}>{scill}</div>
    </div>
  )
}

export default Card
