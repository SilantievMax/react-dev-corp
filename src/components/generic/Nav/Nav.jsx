import React from 'react'

import styles from './Nav.module.css'
const Nav = () => {
  return <nav className={styles.nav}>
  <a href='#about' className={styles.link_site}>
    О НАС
  </a>
  <a href='#product' className={styles.link_site}>
    ПРОДУКТЫ
  </a>
  <a href='#team' className={styles.link_site}>
    КОМАНДА
  </a>
  <a href='#contacts' className={styles.link_site}>
    КОНТАКТЫ
  </a>
</nav>
}

export default Nav
