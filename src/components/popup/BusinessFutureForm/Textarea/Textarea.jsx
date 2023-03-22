import React from 'react'
import styles from './Textarea.module.css'

export const Textarea = () => {
  return (<textarea name="textarea" id="textarea" cols="30" rows="10" placeholder='Опишите идею' className={styles.textarea}></textarea>)
}

export default Textarea
