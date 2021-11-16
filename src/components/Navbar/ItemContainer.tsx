import React from 'react'
import {
  // IcoAcademyDark,
  // IcoAcademyWhite,
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
import NavItem from './NavItem'
import styles from './Navbar.module.css'
export interface ItemContainerProps {
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
  active: string
  team: {
    id: string
    name: string
    logo?: string
    plan: 'paid' | 'trial'
  }
}

export const ItemContainer: React.FC<ItemContainerProps> = ({
  config,
  active,
  team,
}) => {
  return (
    <div className={styles.itemCtn}>
      {config.showDashboard &&
        (active === 'boards' ||
          active === 'dashboard' ||
          active === 'task' ||
          active === 'teamdirectory' ||
          active === 'schedule') && (
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

      {config.showTask &&
        (active === 'boards' ||
          active === 'dashboard' ||
          active === 'task' ||
          active === 'teamdirectory' ||
          active === 'schedule') && (
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

      {config.showTeam &&
        (active === 'boards' ||
          active === 'dashboard' ||
          active === 'task' ||
          active === 'teamdirectory' ||
          active === 'schedule') && (
          <NavItem
            active={active === 'teamdirectory'}
            href={'/teamdirectory'}
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
          active={active === 'training' || active === 'course'}
          href='/training'
          title='Manage Training'>
          {active === 'training' ? (
            <img src={IcoTrainingDark} />
          ) : (
            <img src={IcoTrainingWhite} />
          )}
        </NavItem>
      )}

      {/* {config.showAcademy && (
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
      )} */}

      {config.showSchedule &&
        (active === 'boards' ||
          active === 'dashboard' ||
          active === 'task' ||
          active === 'teamdirectory' ||
          active === 'schedule') && (
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
          href={
            team.id === '1' || team.plan === 'trial'
              ? '/compliance'
              : '/checklist'
          }
          title='Checklists'>
          {active === 'compliance' ? (
            <img src={IcoChecklistDark} />
          ) : (
            <img src={IcoChecklistWhite} />
          )}
        </NavItem>
      )}
    </div>
  )
}
