import {
  IcoAcademyDark,
  IcoAcademyWhite,
  IcoAdminstrationDark,
  IcoAdminstrationWhite,
  IcoBoardDark,
  IcoBoardWhite,
  IcoChecklistDark,
  IcoChecklistWhite,
  IcoDashboardDark,
  IcoDashboardWhite,
  IcoTaskDark,
  IcoTaskWhite,
  IcoTeamDark,
  IcoTeamWhite,
  IcoTrainingDark,
  IcoTrainingWhite,
  IcoUnicastDark,
  IcoUnicastWhite,
} from '@icons'
import { Dropdown, Input, Modal, Upload } from 'antd'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { cloudinaryUrl } from 'src/lib/utils'
import { useLocation } from 'wouter'
import profile from '../../images/profile-default.jpg'
import { ProfileMenu } from '../ProfileMenu'
import styles from './Navbar.module.css'
import NavItem from './NavItem'

type Prop = {
  /**
   * The details of the community are required since
   * the selected community can be changed in the app
   */
  team: {
    id: string
    name: string
    logo?: string
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
  updateName: (name: string) => void
  updateProfilePic: (data: { public_id: string }) => void
}

export const Navbar: React.FC<Prop> = ({
  team = {
    id: '',
    name: '',
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
  updateName,
  updateProfilePic,
}) => {
  const uploadFile = useCallback((info: any) => {
    console.log(info)
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

    // console.log(info)
  }, [])
  const [location] = useLocation()
  let active = location.split('/')[1]
  const [profileVisible, setProfileVisible] = useState(false)
  const [userName, setUserName] = useState(user.name)

  return (
    <div className={styles.ctn}>
      <div>
        <div className={styles.logoCtn}>
          <a href='/team'>
            <img
              className={styles.logo}
              src={team.logo ? cloudinaryUrl(team.logo) : profile}
              alt=''
            />
          </a>
        </div>
        <div className={styles.itemCtn}>
          {config.showDashboard && (
            <NavItem
              active={active === 'dashboard'}
              href='/dashboard'
              title='Dashboard'>
              {active === 'dashboard' ? (
                <img src={IcoDashboardDark} />
              ) : (
                <img src={IcoDashboardWhite} />
              )}
            </NavItem>
          )}

          <NavItem active={active === 'boards'} href='/boards' title='Boards'>
            {active === 'boards' ? (
              <img src={IcoBoardDark} />
            ) : (
              <img src={IcoBoardWhite} />
            )}
          </NavItem>

          {config.showTask && (
            <NavItem active={active === 'task'} href='/task' title='Task'>
              {active === 'task' ? (
                <img src={IcoTaskDark} />
              ) : (
                <img src={IcoTaskWhite} />
              )}
            </NavItem>
          )}

          {config.showAdmin && (
            <NavItem
              active={active === 'import-export'}
              href='/import-export'
              title='Export/Import'>
              {active === 'import-export' ? (
                <img src={IcoAdminstrationDark} />
              ) : (
                <img src={IcoAdminstrationWhite} />
              )}
            </NavItem>
          )}

          {config.showTeam && (
            <NavItem
              active={active === 'teamdirectory'}
              href='/teamdirectory'
              title='Team'>
              {active === 'teamdirectory' ? (
                <img src={IcoTeamDark} />
              ) : (
                <img src={IcoTeamWhite} />
              )}
            </NavItem>
          )}

          {config.showTraining && (
            <NavItem
              active={active === 'training'}
              href='/training'
              title='Manage Training'>
              {active === 'training' ? (
                <img src={IcoTrainingDark} />
              ) : (
                <img src={IcoTrainingWhite} />
              )}
            </NavItem>
          )}

          {config.showAcademy && (
            <NavItem
              active={active === 'academy'}
              href='/academy'
              title='Learning Academy'>
              {active === 'academy' ? (
                <img src={IcoAcademyDark} />
              ) : (
                <img src={IcoAcademyWhite} />
              )}
            </NavItem>
          )}

          {config.showSchedule && (
            <NavItem
              active={active === 'schedule'}
              href='/schedule'
              title='Engage - Unicasts'>
              {active === 'schedule' ? (
                <img src={IcoUnicastDark} />
              ) : (
                <img src={IcoUnicastWhite} />
              )}
            </NavItem>
          )}

          {config.showChecklist && (
            <NavItem
              active={active === 'compliance'}
              href='/compliance'
              title='Checklists'>
              {active === 'compliance' ? (
                <img src={IcoChecklistDark} />
              ) : (
                <img src={IcoChecklistWhite} />
              )}
            </NavItem>
          )}
        </div>
      </div>
      <div className={styles.profileCtn}>
        <Dropdown overlay={<ProfileMenu {...{ setProfileVisible }} />}>
          <img
            className={styles.logo}
            src={user.profilePic ? cloudinaryUrl(user.profilePic) : profile}
            alt=''
          />
        </Dropdown>
        <Modal
          title='Edit Profile'
          visible={profileVisible}
          onOk={() => {
            setProfileVisible(false)
            updateName(userName)
          }}
          onCancel={() => setProfileVisible(false)}
          okText='Update Profile'>
          <div className={styles.modal}>
            <div className={styles.imageCtn}>
              <Upload showUploadList={false} onChange={uploadFile}>
                <img
                  src={
                    user.profilePic ? cloudinaryUrl(user.profilePic) : profile
                  }
                  alt=''
                />
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
