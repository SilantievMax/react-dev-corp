import Nav from '../generic/Nav/Nav'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='#' className={styles.link}>
        ЛОГОТИП
      </a>
      <Nav />
      <div className={styles.continer}>
        <div className={styles.btn_before}>
          RU{' '}
          <svg
            width='10'
            height='7'
            viewBox='0 0 10 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M9.53033 0.96967C9.82322 1.26256 9.82322 1.73744 9.53033 2.03033L5.53033 6.03033C5.23744 6.32322 4.76256 6.32322 4.46967 6.03033L0.46967 2.03033C0.176777 1.73744 0.176777 1.26256 0.46967 0.96967C0.762563 0.676777 1.23744 0.676777 1.53033 0.96967L5 4.43934L8.46967 0.96967C8.76256 0.676777 9.23744 0.676777 9.53033 0.96967Z'
              fill='white'
            />
          </svg>
        </div>
        <a href='#' className={styles.btn}>
          Incubator 1.0
        </a>
      </div>
    </header>
  )
}

export default Header
