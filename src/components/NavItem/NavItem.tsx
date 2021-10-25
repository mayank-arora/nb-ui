import { Tooltip } from 'antd'
import React from 'react'

type Props = {
  title: string
  href: string
  icon: string
  activeIcon: string
  active: boolean
  hidden?: boolean
}
const NavItem: React.FC<Props> = ({
  title,
  href,
  icon,
  activeIcon,
  active,
  hidden,
}) => (
  <Tooltip placement='right' title={title}>
    <a href={href}>
      <span
        hidden={hidden}
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '12px 0',
        }}>
        <img src={active ? activeIcon : icon} alt='' />
      </span>
    </a>
  </Tooltip>
)

export default NavItem
