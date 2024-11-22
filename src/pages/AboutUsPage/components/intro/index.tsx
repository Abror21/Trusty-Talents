import React from 'react'
import { StyledIntro } from './style'
import { Image } from 'antd'
import { Button } from 'ui'
import imagePlaceholder from 'assets/images/image-placeholder.svg'

const Intro = () => {
  return (
    <StyledIntro>
        <div className='intro__left'>
          <h2 className='intro__suptitle'>Find your perfect match</h2>
          <h1 className='intro__title'>Trust in people you hire</h1>
          <h3 className='intro__subtitle'>Trusty Talents: Your trusted partner for Talent search</h3>
          <Button label="Request Information" type='primary'/>
        </div>
        
        <div className="intro__right">
        <Image
            preview={false}
            src={"https://thumbs.dreamstime.com/b/close-up-businessmen-shaking-hands-meeting-handshake-deal-business-corporate-165281340.jpg"}
            fallback={imagePlaceholder}
            alt='Handshake'
        />
        </div>
    </StyledIntro>
  )
}

export default Intro