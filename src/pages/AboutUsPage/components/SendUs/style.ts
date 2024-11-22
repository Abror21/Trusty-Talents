import styled from 'styled-components';

export const StyledSendUs = styled.div`
   background-color: var(--gray-yellow);
   padding: 60px 0;
   .sendus__form{
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .sendus__form-footer{
            text-align: center;
            button{
                margin-bottom: 10px;
            }
            p{
                color: var(--dark-green);
                text-shadow: 0px 1px 2px black;
            }
        }
    }
   .sendus__title{
        font-size: 3rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 40px;
    }
`;