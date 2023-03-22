import React, {useState} from 'react'
import Heading from '../generic/Heading/Heading'
import BusinessFutureForm from '../popup/BusinessFutureForm/BusinessFutureForm'
import styles from './Product.module.css'

const Product = () => {
  const [active, setActive] = useState(false)

  return (
    <section id='product' className={styles.product}>
      <Heading heading='продукты' />
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.name}>
            01
            <a href='https://web.telegram.org/z/#5466811440' target='_blank'>
              <span>Invoc</span>
            </a>
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
            02
            <a href='#' target='_blank'>
              <span title="Скоро будет ссылка">EduCo</span>
            </a>
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
        <button onClick={() => setActive(true)} className={styles.link}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
      </div>
      {active && <BusinessFutureForm setOn={setActive}/>}
    </section>
  )
}

export default Product
