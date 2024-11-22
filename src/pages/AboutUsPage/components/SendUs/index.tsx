import React from 'react'
import { StyledSendUs } from './style'
import { Form } from 'antd'
import { Button, Input, TextArea } from 'ui'

const SendUs = () => {
    return (
        <StyledSendUs>
            <div className="container">
                <h4 className='sendus__title'>Our Team</h4>
                <Form onFinish={() => {}} className='sendus__form'>
                    <Input placeholder="Enter Name" />
                    <Input placeholder="Enter Surname" />
                    <Input placeholder="Enter Phone" />
                    <TextArea placeholder="Enter Your Message"/>
                    <div className='sendus__form-footer'>
                        <Button htmlType='submit' label="Send" type='primary'/>
                        <p>Thank you! Your message is delivered!</p>
                    </div>
                </Form>
            </div>
        </StyledSendUs>
    )
}

export default SendUs