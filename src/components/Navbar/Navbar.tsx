import React from 'react'

import styles from './Navbar.module.css'

import { navList } from '../../lib/navList'

export const Navbar: React.FC = () => {
  console.log(navList)

  return (
    <div className={styles.ctn}>
      {navList.map((item) => (
        <img src={item.image} alt='' />
      ))}
    </div>
  )
}
