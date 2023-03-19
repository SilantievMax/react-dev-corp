import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card/Card'
import styles from './Team.module.css'
import 'swiper/css'
import names from '../../utils/namse'
import Heading from '../generic/Heading/Heading'

const Team = () => {
  return (
    <section id='team' className={styles.team}>
      <Heading
        heading='Команда'
        text='Всем известно, что сердцем проекта является команда. Это люди, которые
          воплощают миссию экосистемы в жизнь. Без них не было бы развития
          проекта.'
      />
      <div className={styles.cards}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {names.map(name => (
            <SwiperSlide>
              <Card name={name.name} img={name.img} scill={name.scill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Team
