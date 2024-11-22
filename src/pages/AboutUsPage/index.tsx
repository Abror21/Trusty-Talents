import React from 'react'
import { StyledAboutUsPage } from './style'
import Intro from './components/intro'
import Benefits from './components/benefits'
import OurTeam from './components/OurTeam'
import SendUs from './components/SendUs'

export const AboutUsPage = () => {
  return (
    <StyledAboutUsPage>
        <Intro />
        <Benefits />
        <OurTeam />
        <SendUs />
    </StyledAboutUsPage>
  )
}