import React from 'react'
import Heading from '../generic/Heading/Heading'
import styles from './Contacts.module.css'
import ico1 from '../../assets/svg/consultation.svg'
import ico2 from '../../assets/svg/development.svg'
import ico3 from '../../assets/svg/audio.svg'
import ico4 from '../../assets/svg/testing.svg'

const Contacts = () => {
  return (
    <section id='contacts' className={styles.contacts}>
      <Heading
        heading='контакты'
        text='У тебя появились вопросы, можешь посмотреть в уже имеющихся вопросах
          или задать свой!'
      />
      <form className={styles.form}>
        <div className={styles.continer_left}>
          <div className={styles.heading}>
            01<span>Выберите тему</span>
          </div>
          <div className={styles.un_active}>
            <input type='radio' id='1' name='free' value='consultation' />
            <input type='radio' id='2' name='free' value='development' />
            <input type='radio' id='3' name='free' value='audit' />
            <input type='radio' id='4' name='free' value='testing' />
          </div>
          <div className={styles.radio}>
            <label className={styles.label} for='1'>
              <img className={styles.img} src={ico4} alt='' />
              Консультация
            </label>
            <label className={styles.label} for='2'>
              <img className={styles.img} src={ico2} alt='' />
              Разработка
            </label>
            <label className={styles.label} for='3'>
              <img className={styles.img} src={ico3} alt='' />
              Аудит
            </label>
            <label className={styles.label} for='4'>
              <img className={styles.img} src={ico1} alt='' />
              Тестирование
            </label>
          </div>
        </div>
        <div className={styles.continer_right}>
          <div className={styles.heading}>
            02<span>Напишите вопрос</span>
          </div>
          <input
            className={styles.input}
            type='text'
            name='name'
            placeholder='Введите имя'
          />
          <input
            className={styles.input}
            type='text'
            name='emal'
            placeholder='Введите почту'
          />
          <textarea
            className={styles.input}
            name='comment'
            placeholder='Введите ваш вопрос'
          ></textarea>
          <div className={styles.continet_btn}>
            <button className={styles.btn} type='subbmit'>
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contacts
