import React, { useState } from 'react'
import styles from './About.module.css'
import ico2 from '../../assets/svg/ico1.svg'
import ico3 from '../../assets/svg/ico2.svg'
import ico4 from '../../assets/svg/ico3.svg'
import ico1 from '../../assets/svg/ico4.svg'
import Heading from '../generic/Heading/Heading'
import History from '../popup/History/History'

const About = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <section id='about' className={styles.about}>
        <Heading
          heading='О НАС'
          text='Проект Invoctus Ecosystem - экосистема, целью которой является сделать
          обучение доступным для всех. А также дать человеку возможность
          получить нужные ему знания, используя продукты экосистемы.'
        />
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src={ico1} className={styles.img} />
            <h4 className={styles.heading_card}>Наша цель</h4>
            <p className={styles.text_card}>
              Создать крупнейшую инновационную экосистему, где каждый сможет
              достигать своих целей, объединяясь с другими, и с помощью
              полученных знаний и инструментов строить своё будущее.
            </p>
          </li>
          <li className={styles.item}>
            <img src={ico2} className={styles.img} />
            <h4 className={styles.heading_card}>Наша миссия</h4>
            <p className={styles.text_card}>
              Дать людям возможность получения знаний и заработка в разных
              сферах деятельности с помощью различных инструментов.
            </p>
          </li>
          <li className={styles.item}>
            <img src={ico3} className={styles.img} />
            <h4 className={styles.heading_card}>Сообщество</h4>
            <p className={styles.text_card}>
              Создать сообщество, где каждый человек сможет получить опыт
              нетворкинга, работы в команде а также найти единомышленников.
            </p>
          </li>
          <li className={styles.item}>
            <img src={ico4} className={styles.img} />
            <h4 className={styles.heading_card}>Наши планы</h4>
            <p className={styles.text_card}>
              Экосистема находимся на начальной стадии развития. Сейчас
              разрабатываются первые продукты, ведутся переговоры с другими
              организациями и стартапами о совместном сотрудничестве.
            </p>
          </li>
        </ul>
        <button onClick={() => setActive(!active)} className={styles.link} href='#'>
          REWARDS
        </button>
        {active && <History setActive={setActive} />}
      </section>
    </>
  )
}

export default About
