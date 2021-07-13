import React from 'react'

import styles from './Navbar.module.css'

// import { IcoChatWhite } from '../../images/icons'
import { navList } from '../../lib/navList'

export const Navbar: React.FC = () => {
  console.log(navList)

  return <div className={styles.ctn}></div>
}
