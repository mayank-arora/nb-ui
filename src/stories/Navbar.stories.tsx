import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navbar } from '../components/Navbar/Navbar'

const stories = storiesOf('Navbar', module)
stories.add('Navbar', () => {
  return <Navbar  />
})
