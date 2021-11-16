import { IcoCameraWhite } from '@icons'
import { Dropdown, Input, Modal, Upload } from 'antd'
import axios from 'axios'
import React, { FC, useCallback, useState } from 'react'
import { useLocation } from 'wouter'
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
    profilePic: '',
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
  const [newImage, setNewImage] = useState<string>()
  const [profileVisible, setProfileVisible] = useState(false)
  const [userName, setUserName] = useState(user.name)
  const [profileHover, setProfileHover] = useState(false)

  const [location] = useLocation()
  let active = location.split('/')[1]

  const uploadFile = useCallback((info: any) => {
    if (info.file.status === 'uploading') {
      return
    }
    if (info.file.status === 'done') {
      const tempFormData = new FormData()
      tempFormData.append('upload_preset', 'nkoljiea')
      tempFormData.append('file', info.fileList[0].originFileObj)
      axios.post('/api/cloudinary/upload', tempFormData).then((response) => {
        setNewImage(response.data.public_id)
        updateProfilePic(response.data)
      })
    }
  }, [])

  return (
    <div className={styles.ctn}>
      <div>
        <div className={styles.logoCtn}>
          <a href='/team'>
            <DefaultLogo id={team.id} name={team.name} profilePic={team.logo} />
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
          <div>
            <DefaultLogo
              id={user.id}
              name={user.name}
              profilePic={newImage ? newImage : user.profilePic}
            />
          </div>
        </Dropdown>
        <Modal
          width={720}
          title='Update Profile'
          visible={profileVisible}
          footer={null}
          onCancel={() => setProfileVisible(false)}
          okText='Update Profile'>
          <div className={styles.modal}>
            <div className={styles.details}>
              <div className={styles.imageCtn}>
                <div
                  onMouseEnter={() => setProfileHover(true)}
                  onMouseLeave={() => setProfileHover(false)}>
                  <Upload showUploadList={false} onChange={uploadFile}>
                    {profileHover && (
                      <div className={styles.hoverEdit}>
                        <img
                          src={IcoCameraWhite}
                          alt=''
                          style={{ width: 35, height: 35 }}
                        />
                      </div>
                    )}
                    <DefaultLogo
                      alternate
                      id={user.id}
                      name={user.name}
                      large
                      profilePic={newImage ? newImage : user.profilePic}
                    />
                  </Upload>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 12,
                      opacity: 0.8,
                      textAlign: 'center',
                    }}>
                    Add/Edit picture
                  </p>
                </div>
              </div>
              <div className={styles.contactCtn}>
                <div className={styles.profileDetails}>
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <p className={styles.email}>
                  <b>Contact:</b> {user.email}
                </p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
              }}>
              <button
                onClick={() => {
                  setProfileVisible(false)
                  updateName(userName)
                }}
                className={styles.uploadButton}>
                Update Profile
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
