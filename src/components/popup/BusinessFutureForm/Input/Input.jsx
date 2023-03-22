import React from 'react'
import styles from './Input.module.css'

export const Input = ({heading, type, placeholder}) => {
  console.log(styles);
  return (
    <div className={styles.inputDiv}>
        <span>{heading}</span>
        <input type={type} name={heading} placeholder={placeholder}/>
    </div>
  )
}

export default Input
