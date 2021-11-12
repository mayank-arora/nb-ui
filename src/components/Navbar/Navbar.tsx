import { Dropdown, Input, Modal, Upload } from 'antd'
import axios from 'axios'
import React, { FC, useCallback, useState } from 'react'
import { cloudinaryUrl } from 'src/lib/utils'
import { useLocation } from 'wouter'
import profile from '../../images/profile-default.jpg'
import { DefaultLogo } from '../DefaultLogo'
import { ProfileMenu } from '../ProfileMenu'
import { ItemContainer } from './ItemContainer'
import styles from './Navbar.module.css'

export type NavbarProp = {
  /**
   * The details of the community are required since
   * the selected community can be changed in the app
   */
  team: {
    id: string
    name: string
    logo?: string
    plan: 'paid' | 'trial'
  }
  user: {
    id: string
    name: string
    email: string
    profilePic?: string
  }

  config: {
    showDashboard: boolean
    showTask: boolean
    showTeam: boolean
    showAdmin: boolean
    showAcademy: boolean
    showTraining: boolean
    showChecklist: boolean
    showSchedule: boolean
  }
  router?: boolean
  list?: () => FC
  updateName: (name: string) => void
  updateProfilePic: (data: { public_id: string }) => void
}

export const Navbar: React.FC<NavbarProp> = ({
  team = {
    id: '',
    name: '',
    plan: 'trial',
  },
  user = {
    id: '',
    name: '',
    email: '',
  },
  config = {
    showDashboard: true,
    showTask: true,
    showTeam: true,
    showAdmin: true,
    showAcademy: true,
    showTraining: true,
    showChecklist: true,
    showSchedule: true,
  },
  router = false,
  list,
  updateName,
  updateProfilePic,
}) => {
  const uploadFile = useCallback((info: any) => {
    if (info.file.status === 'uploading') {
      return
    }
    if (info.file.status === 'done') {
      const tempFormData = new FormData()
      tempFormData.append('upload_preset', 'nkoljiea')
      tempFormData.append('file', info.fileList[0].originFileObj)
      axios
        .post('/api/cloudinary/upload', tempFormData)
        .then((response) => updateProfilePic(response.data))
    }

  }, [])
  const [location] = useLocation()
  let active = location.split('/')[1]
  const [profileVisible, setProfileVisible] = useState(false)
  const [userName, setUserName] = useState(user.name)
  // const [profileHover, setProfileHover] = useState(false)

  return (
    <div className={styles.ctn}>
      <div>
        <div className={styles.logoCtn}>
          <a href='/team'>
            {team.logo ? (
              <img
                className={styles.logo}
                src={cloudinaryUrl(team.logo)}
                alt=''
              />
            ) : (
              <DefaultLogo id={team.id} name={team.name} />
            )}
          </a>
        </div>
        {router && list ? (
          list()
        ) : (
          <ItemContainer config={config} active={active} team={team} />
        )}
      </div>
      <div className={styles.profileCtn}>
        <Dropdown
          destroyPopupOnHide
          overlay={<ProfileMenu {...{ setProfileVisible }} />}>
          <img
            className={styles.logo}
            src={user.profilePic ? cloudinaryUrl(user.profilePic) : profile}
            alt=''
          />
        </Dropdown>
        <Modal
          title='Update Profile'
          visible={profileVisible}
          onOk={() => {
            setProfileVisible(false)
            updateName(userName)
          }}
          onCancel={() => setProfileVisible(false)}
          okText='Update Profile'>
          <div className={styles.modal}>
            <div
              className={styles.imageCtn}
              // onMouseEnter={() => setProfileHover(true)}
              // onMouseLeave={() => setProfileHover(false)}
            >
              <Upload showUploadList={false} onChange={uploadFile}>
                {user.profilePic ? (
                  <img
                    src={
                      user.profilePic ? cloudinaryUrl(user.profilePic) : profile
                    }
                    alt=''
                  />
                ) : (
                  <DefaultLogo alternate id={team.id} name={team.name} />
                )}
              </Upload>
            </div>
            <p className={styles.email}>
              <b>Contact:</b> {user.email}
            </p>
            <div className={styles.profileDetails}>
              <Input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
