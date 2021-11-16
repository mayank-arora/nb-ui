import React from 'react'
import { cloudinaryUrl, colorPalette, getInitials } from 'src/lib/utils'
import styles from './Navbar/Navbar.module.css'

export function DefaultLogo({
  id,
  name,
  alternate,
  profilePic,
  large,
}: {
  id: string
  name: string
  alternate?: boolean
  profilePic?: string
  large?: boolean
}) {
  return (
    <>
      {profilePic ? (
        <img
          className={large ? styles.logoLarge : styles.logo}
          src={cloudinaryUrl(profilePic)}
          alt=''
        />
      ) : (
        <div
          style={{
            backgroundColor: `${colorPalette[Number(id) % 8].bg}`,
            borderRadius: '50%',
            height: alternate ? 100 : 35,
            width: alternate ? 100 : 35,
            fontSize: alternate ? 22 : 14,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <span
            style={{
              color: `${colorPalette[Number(id) % 8].fg}`,
              fontWeight: 'bold',
            }}>
            {getInitials(name)}
          </span>
        </div>
      )}
    </>
  )
}
