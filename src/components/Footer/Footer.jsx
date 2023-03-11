import Layout from '../Layout/Layout'
import styles from './Footer.module.css'
import ico1 from '../../assets/svg/Envelope.svg'
import ico2 from '../../assets/svg/Telegram.svg'
import ico3 from '../../assets/svg/Twitch.svg'
import Nav from '../generic/Nav/Nav'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.contuner}>
          <a href='#' className={styles.link}>
            ЛОГОТИП
            <span>Учись. Общайся. Монетизируй.</span>
          </a>
          <Nav />
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
