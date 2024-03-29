import React, { useEffect, useState } from 'react'
import banner1 from '../../assets/images/banner1.webp'
import banner2 from '../../assets/images/banner2.webp'
import banner3 from '../../assets/images/banner3.webp'
import styles from './Banner.module.css'

const BannerImg = () => {
  const bannerArry = [banner1, banner2, banner3]
  const [countImg, setCountImg] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountImg(countImg + 1)
      if (countImg === bannerArry.length - 1) setCountImg(0)
    }, 10000)
    return () => clearInterval(timer)
  })
  const renderImg = (
    <img src={bannerArry[countImg]} alt='banner' className={styles.img} />
  )
  return <div className={styles.shake}>{renderImg}</div>
}

const Printtext = () => {
  const textArry = 'учись. общайся. монетизируй.'.split('')
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const countText = () => {
    if (count < textArry.length) {
      setCount(count + 1)
      setText(text + textArry[count])
    }
  }

  setTimeout(countText, 200)
  return (
    <>
      <span className={styles.sdvig_text}>{text}</span>
    </>
  )
}

const Banner = () => {
  return (
    <section className={styles.banner}>
      <BannerImg />
      <div className={styles.continer}>
        <div className={styles.block_left}>
          <h2 className={styles.heading_left}>invoctus</h2>
          <p className={styles.text_left}>
            Изучай выбранную область. <br /> Расширяй человеческий капитал.
            <br /> Получай доход от знаний и ресурсов.
          </p>
        </div>
        <div className={styles.block_right}>
          <h4 className={styles.text_right}>
            <Printtext />
            <svg
              width='40'
              height='52'
              viewBox='0 0 40 52'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M20 4.375C11.3099 4.375 4.375 11.1682 4.375 19.4148C4.375 24.4263 6.42732 28.7484 10.0884 31.4401C10.8952 32.0333 11.5855 32.918 11.8499 34.0405C12.0669 34.9617 12.3152 36.0842 12.5612 37.2738H18.125V34.5677C18.125 34.211 18.2268 33.8617 18.4184 33.5607L20.4229 30.4123L15.9253 26.8801C15.1672 26.2848 14.984 25.2116 15.5017 24.3985L18.4184 19.8174C18.9745 18.9439 20.1335 18.6866 21.007 19.2428C21.8805 19.7989 22.1378 20.9579 21.5816 21.8314L19.5771 24.9799L24.0747 28.512C24.8328 29.1074 25.016 30.1805 24.4983 30.9936L21.875 35.114V37.2738H27.4388C27.6848 36.0842 27.9331 34.9617 28.1501 34.0405C28.4145 32.918 29.1048 32.0333 29.9116 31.4401C33.5727 28.7484 35.625 24.4263 35.625 19.4148C35.625 11.1682 28.6901 4.375 20 4.375ZM26.7218 41.0238H13.2782C13.5542 42.6178 13.7708 44.1274 13.8363 45.2111C13.9054 46.3521 14.7582 47.3746 16.0155 47.6463L16.5055 47.7521C18.8066 48.2493 21.1934 48.2493 23.4945 47.7521L23.9845 47.6463C25.2418 47.3746 26.0946 46.3521 26.1637 45.2111C26.2292 44.1274 26.4458 42.6178 26.7218 41.0238ZM0.625 19.4148C0.625 8.97791 9.3601 0.625 20 0.625C30.6399 0.625 39.375 8.97791 39.375 19.4148C39.375 25.4745 36.8661 30.9814 32.133 34.4613C31.9171 34.62 31.8269 34.7871 31.8002 34.9002C31.5043 36.1568 31.1437 37.82 30.815 39.5074C30.3581 41.853 29.986 44.1281 29.9068 45.4375C29.7316 48.333 27.6015 50.7013 24.7764 51.3117L24.2865 51.4176C21.4634 52.0275 18.5366 52.0275 15.7135 51.4176L15.2236 51.3117C12.3985 50.7013 10.2684 48.333 10.0932 45.4375C10.014 44.1281 9.64194 41.853 9.18499 39.5074C8.85625 37.82 8.49575 36.1568 8.19978 34.9002C8.17314 34.7871 8.08288 34.62 7.86702 34.4613C3.13392 30.9814 0.625 25.4745 0.625 19.4148Z'
                fill='white'
              />
            </svg>
          </h4>
          <h2 className={styles.heading_right}>Ecosystem</h2>
        </div>
      </div>
    </section>
  )
}

export default Banner
