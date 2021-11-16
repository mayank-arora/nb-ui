import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navbar } from '../components/Navbar/Navbar'

const stories = storiesOf('Navbar', module)
stories.add('Navbar', () => {
  return (
    <Navbar
      config={{
        showAcademy: true,
        showAdmin: true,
        showChecklist: true,
        showDashboard: true,
        showSchedule: true,
        showTask: true,
        showTeam: true,
        showTraining: true,
      }}
      team={{
        id: '1',
        name: 'NB',
        plan: 'trial',
      }}
      updateName={() => {}}
      updateProfilePic={() => {}}
      user={{
        id: '1',
        name: 'Mayank',
        email: 'mayank@noticeboard.com',
        profilePic: 'ustf5ent58zzu7vwypsb'
      }}
    />
  )
})
