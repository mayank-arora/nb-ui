import { Menu } from 'antd'
import React from 'react'

type Props = {
  setProfileVisible: (visible: boolean) => void
}
export const ProfileMenu: React.FC<Props> = ({ setProfileVisible }) => {
  return (
    <Menu>
      <Menu.Item
        onClick={() => setProfileVisible(true)}
        style={{ paddingRight: '2rem' }}
        key='0'>
        <p>Profile</p>
      </Menu.Item>
      <Menu.Item style={{ paddingRight: '2rem' }} key='1'>
        <a href='noticeboard.tech/support' target='_blank'>
          <p>Help and Support</p>
        </a>
      </Menu.Item>
      <Menu.Item style={{ paddingRight: '2rem' }} key='2'>
        <a href='noticeboard.tech/privacy' target='_blank'>
          <p>Privacy Policy</p>
        </a>
      </Menu.Item>
      <Menu.Item style={{ paddingRight: '2rem' }} key='3'>
        <a href='/logout'>
          <p>Logout</p>
        </a>
      </Menu.Item>
    </Menu>
  )
}
