import { Tooltip } from 'antd'
import React from 'react'
import styles from './Navbar.module.css'

type Props = {
  title: string
  href: string
  hidden?: boolean
  active: boolean
}
const NavItem: React.FC<Props> = ({
  title,
  href,
  hidden,
  children,
  active,
}) => (
  <Tooltip placement='right' title={title}>
    <a href={href}>
      <span className={active ? styles.active : styles.item} hidden={hidden}>
        {children}
      </span>
    </a>
  </Tooltip>
)

export default NavItem
