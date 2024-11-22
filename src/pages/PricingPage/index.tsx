import React from 'react'
import { StyledPricingPage } from './style'
import PricingPlans from './components/PricingPlans'
import PricingText from './components/PricingText'

export const PricingPage = () => {
  return (
    <StyledPricingPage>
        <PricingPlans />
        <PricingText />
    </StyledPricingPage>
  )
}