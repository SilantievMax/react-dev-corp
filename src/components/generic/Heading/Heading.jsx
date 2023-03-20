import React from 'react'
import styles from './Heading.module.css'

const Heading = ({ heading, text }) => {
  return (
    <div className={styles.continer}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Heading
