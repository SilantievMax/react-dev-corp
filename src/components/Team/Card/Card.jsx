import React from "react";
// import './Card.css'
import styles from './Card.module.css'

const Card = (props) => {
  console.log(styles);
  return (
    <>
      <div className={styles.red}>card</div>
      <div className={styles.text}>{props.name}</div>
    </>
  );
};

export default Card;
