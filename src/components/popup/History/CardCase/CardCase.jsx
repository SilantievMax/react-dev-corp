import React from 'react'
import styles from './CardCase.module.css'

const CardCase = ({ img, heading, description, isSoon }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt={heading} />
      <div className={styles.blocl}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{description}</p>
      </div>
      {isSoon && <div className={styles.soon}>SOON</div>}
    </div>
  )
}

export default CardCase
