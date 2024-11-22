import React from 'react'
import { StyledOurTeam } from './style'
import { Image } from 'antd'
import imagePlaceholder from 'assets/images/image-placeholder.svg'

const OurTeam = () => {
    return (
        <StyledOurTeam>
            <div className="container">
                <div className="ourteam__content">
                    <h4 className='ourteam__title'>Our Team</h4>
                    <div className='ourteam__wrapper'>
                        <div className='ourteam__card'>
                            <Image
                                preview={false}
                                src={"https://c8.alamy.com/comp/EHTDW4/portrait-of-man-sitting-at-his-desk-in-office-EHTDW4.jpg"}
                                fallback={imagePlaceholder}
                                alt='Handshake'
                            />
                            <span className='ourteam__card-name'>Emils Intenbergs</span>
                            <span className='ourteam__card-position'>Project leading mentor</span>
                            <div className='ourteam__card-info'>
                                <span>alsdlkjf lasdfasd sdfsss</span>
                                <span>alksjdf alskasdf asdas dfasdf</span>
                                <span>alksjdf alskas</span>
                                <span>alksjdf alskas fffffffffff</span>
                                <span>alksjd</span>
                            </div>
                        </div>
                        <div className='ourteam__card'>
                            <Image
                                preview={false}
                                src={"https://c8.alamy.com/comp/EHTDW4/portrait-of-man-sitting-at-his-desk-in-office-EHTDW4.jpg"}
                                fallback={imagePlaceholder}
                                alt='Handshake'
                            />
                            <span className='ourteam__card-name'>Emils Intenbergs</span>
                            <span className='ourteam__card-position'>Project leading mentor</span>
                            <div className='ourteam__card-info'>
                                <span>alksjdf alskjdfalsdjf</span>
                                <span>alksjdf alskasdf asdas dfasdf</span>
                                <span>alksjdf alskas</span>
                                <span>alksjdf alskas fffffffffff</span>
                                <span>alksjd</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledOurTeam>
    )
}

export default OurTeam