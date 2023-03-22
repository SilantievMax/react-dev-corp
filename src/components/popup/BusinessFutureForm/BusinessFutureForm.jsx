import React, { useState } from 'react'
import styles from './BusinessFutureForm.module.css'
import img1 from '../../../assets/svg/Cross.svg'
import Input from './Input/Input'
import Textarea from './Textarea/Textarea'

const BusinessFutureForm = ({ setOn }) => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
        <div className={styles.head}>
          <span>Business Future</span>
          <img
            className={styles.close}
            onClick={() => setOn(false)}
            src={img1}
            alt='Close'
          />
        </div>
        <form action='' className={styles.form}>
          <Input heading='username' type='text' placeholder='Введите имя' />
          <Input heading='email' type='email' placeholder='Введите почту' />
          <Input heading='работа' type='text' placeholder='Введите должность' />

          <span>опыт работы</span>
          <div className={styles.slideContainer}>
            <div className={styles.experience}>
              <div className={styles.experienceElement}>0</div>
              <div className={styles.experienceElement}>⠀1m</div>
              <div className={styles.experienceElement}>3m</div>
              <div className={styles.experienceElement}>6m</div>
              <div className={styles.experienceElement}>1y</div>
              <div className={styles.experienceElement}>+2y</div>
            </div>
            <input type='range' min='0' max='5' className={styles.slider} />
          </div>

          <div className={styles.form_radio_btn}>
            <input id='radio-1' type='radio' name='radio' value='1' />
            <label for='radio-1'>Full-time</label>
          </div>
          <div className={styles.form_radio_btn}>
            <input id='radio-2' type='radio' name='radio' value='2' />
            <label for='radio-2'>Part-time</label>
          </div>
          <div className={styles.form_radio_btn}>
            <input id='radio-3' type='radio' name='radio' value='3' />
            <label for='radio-3'>Both</label>
          </div>

          <span>хобби</span>
          <input type='text' name='hobby' placeholder='Введите увлечения' />

          <span>идея проекта</span>
          <div className={styles.projectIdea}>
            <input id='yes' type='radio' name='question' value='1' checked />
            <label onClick={() => setActive(true)} for='yes'>
              Есть
            </label>

            <input id='no' type='radio' name='question' value='2' checked />
            <label onClick={() => setActive(false)} for='no'>
              Нет
            </label>
          </div>
          {active && <Textarea />}
          <button>ОТПРАВИТЬ</button>
        </form>
      </div>
    </div>
  )
}

export default BusinessFutureForm
