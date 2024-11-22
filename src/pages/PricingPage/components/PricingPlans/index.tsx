import React from 'react'
import { StyledPricingPlans } from './style'
import { Button } from 'ui'

const PricingPlans = () => {
    return (
        <StyledPricingPlans>
            <div className="container">
                <h1 className='pricing__title'>Simple and Affordable Pricing Plans</h1>
                <h5 className='pricing__subtitle'>Choose the plan that fits your needs.</h5>
                <div className='pricing__items'>
                    <div className="pricing__item">
                        <span className='pricing__item__title'>Plan 1</span>
                        <span className="pricing__item__price">0 €</span>
                        <span className="pricing__item__period">Per month</span>
                        <hr className="pricing__item__line" />
                        <div className="pricing__item__services">
                            <p>&#10003; Service 1</p>
                            <p>&#10003; Service 2</p>
                            <p>&#10003; Service 3</p>
                            <p>&#10003; Service 4</p>
                            <p>&#10003; Service 5</p>
                        </div>
                        <Button label="Subscribe" type="primary" />
                    </div>
                    <div className="pricing__item">
                        <span className='pricing__item__title'>Plan 2</span>
                        <span className="pricing__item__price">0 €</span>
                        <span className="pricing__item__period">Per month</span>
                        <hr className="pricing__item__line" />
                        <div className="pricing__item__services">
                            <p>&#10003; Service 1</p>
                            <p>&#10003; Service 2</p>
                            <p>&#10003; Service 3</p>
                            <p>&#10003; Service 4</p>
                            <p>&#10003; Service 5</p>
                        </div>
                        <Button label="Subscribe" type='primary' />
                    </div>
                    <div className="pricing__item">
                        <span className='pricing__item__title'>Plan 3</span>
                        <span className="pricing__item__price">0 €</span>
                        <span className="pricing__item__period">Per month</span>
                        <hr className="pricing__item__line" />
                        <div className="pricing__item__services">
                            <p>&#10003; Service 1</p>
                            <p>&#10003; Service 2</p>
                            <p>&#10003; Service 3</p>
                            <p>&#10003; Service 4</p>
                            <p>&#10003; Service 5</p>
                        </div>
                        <Button label="Subscribe" type='primary' />
                    </div>
                </div>
            </div>
        </StyledPricingPlans>
    )
}

export default PricingPlans