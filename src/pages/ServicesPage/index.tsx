import React from 'react'
import { StyledServicesPage } from './style'
import ServiceSection from './components/Services'

export const ServicesPage = () => {
  return (
    <StyledServicesPage>
        <ServiceSection
            title={"Virsraksts par pakalpojumu numur viens"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est"}
            image={"https://media.istockphoto.com/id/1396644902/photo/businesswoman-posing-and-smiling-during-a-meeting-in-an-office.jpg?s=612x612&w=0&k=20&c=7wzUE1CRFOccGnps-XZWOJIyDvqA3xGbL2c49PU5_m8="}
            background="dark"
        />
        <ServiceSection
            title={"Virsraksts par pakalpojumu numur viens"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est"}
            image={"https://st2.depositphotos.com/1594308/10487/i/950/depositphotos_104870148-stock-photo-team-working-at-office.jpg"}
            reverse={true}
            background="dark"
        />
        <ServiceSection
            title={"Virsraksts par pakalpojumu numur viens"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est"}
            image={""}
            background="bright"
        />
    </StyledServicesPage>
  )
}