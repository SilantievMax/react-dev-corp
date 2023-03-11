import Layout from '../Layout/Layout'
import styles from './Footer.module.css'
import ico1 from '../../assets/svg/Envelope.svg'
import ico2 from '../../assets/svg/Telegram.svg'
import ico3 from '../../assets/svg/Twitch.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.contuner}>
          <a href='#' className={styles.link}>
            ЛОГОТИП
            <span>Учись. Общайся. Монетизируй.</span>
          </a>
          <nav className={styles.nav}>
            <a href='#' className={styles.link_site}>
              О НАС
            </a>
            <a href='#' className={styles.link_site}>
              ПРОДУКТЫ
            </a>
            <a href='#' className={styles.link_site}>
              КОМАНДА
            </a>
            <a href='#' className={styles.link_site}>
              КОНТАКТЫ
            </a>
          </nav>
          <div className={styles.icons}>
            <a href='#' className={styles.ico}>
              <img src={ico1} />
            </a>
            <a href='#' className={styles.ico}>
              <img src={ico2} />
            </a>
            <a href='#' className={styles.ico}>
              <img src={ico3} />
            </a>
          </div>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
