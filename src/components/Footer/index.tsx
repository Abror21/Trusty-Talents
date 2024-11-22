import React, { memo } from 'react'
import { StyledFooter } from './style'
{/* TODO: translate */}
export const Footer = memo(() => {    
  return (
    <StyledFooter>
        <div className="container">
            <h5 className='footer-logo'>Trusty talents</h5>
            <div className='footer__items'>
                <div className='footer__item'>
                    <h6>Company</h6>
                    <span>Trusty Talents OU</span>
                    <span>Company code: XXXXXXX</span>
                </div>
                <div className='footer__item'>
                    <h6>Address</h6>
                    <span>Parslas Street 3</span>
                    <span>Riga, Latvia</span>
                    <span>LV-1002</span>
                </div>
                <div className='footer__item'>
                    <h6>Legal</h6>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Cookies Policy</span>
                </div>
            </div>
            <p className='footer__footer'>© Trusty Talents 2024</p>
        </div>
    </StyledFooter>
  )
})