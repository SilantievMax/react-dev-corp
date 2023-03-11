import React from 'react'
import styles from './Product.module.css'

const Product = () => {
  return (
    <section id='product' className={styles.product}>
      <h3 className={styles.heading}>продукты</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.name}>
            01 <span>Invoc</span>
          </div>
          <div className={styles.text}>
            Telegram Bot
            <span>
              Дает возможность изучить финансовые термины и графики технического
              анализа. А также предоставляет актуальные данные по криптовалютам.
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.name}>
            02 <span>EduCo</span>
          </div>
          <div className={styles.text}>
            Приложение
            <span>
              Платформа для обучения в привычной и игровой форме, с возможностью
              размещения онлайн-курсов в разных форматах.
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.name}>
            03 <span>Business Future</span>
          </div>
          <div className={styles.text}>
            Стартап акселератор, где можно прокачать свои навыки нетворкинга, а
            также получить практические знания, которые можно применить для
            развития своего проекта.
            <span>
              Хочешь присоединиться к будущему проекту, регистрируйся и мы
              рассмотрим твою заявку!
            </span>
          </div>
        </li>
      </ul>
      <div className={styles.link_continer}>
        <a href='#' className={styles.link}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </a>
      </div>
    </section>
  )
}

export default Product
