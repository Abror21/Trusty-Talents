import React from 'react'
import { StyledServiceSection } from './style'
import { Image } from 'antd'
import imagePlaceholder from 'assets/images/image-placeholder.svg'

interface ServiceSectionProps {
    title: string;
    text: string;
    image: string;
    reverse?: boolean;
    background: string;
}

const ServiceSection = ({ title, text, image, reverse = false, background }: ServiceSectionProps) => {

    return (
        <StyledServiceSection>
            <div className={`services ${reverse ? 'reverse' : ''} ${background}`}>
                <div className="services__left">
                    <h3 className='services__title'>{title}</h3>
                    <p className="services__text">{text}</p>
                </div>
                <div className="services__right">
                    <Image
                        preview={false}
                        src={image}
                        fallback={imagePlaceholder}
                    />
                </div>
            </div>
        </StyledServiceSection>
    )
}

export default ServiceSection