import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: var(--dark-green);
    padding: 10px 0;
    .footer-logo{
        color: var(--yellow);
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 15px;
        @media(max-width: 768px){
            text-align: center;
        }
    }
    .footer__items{
        display: flex;
        justify-content: space-between;
        gap: 15px;
        @media(max-width: 768px){
            flex-direction: column;
        }
        .footer__item{
            display: flex;
            flex-direction: column;
            color: var(--white);
            font-size: 1.2rem;
            h6{
                font-size: 1.3rem;
                font-weight: 700;
                margin-bottom: 5px;
            }
        }
    }
    .footer__footer{
        color: var(--white);
        text-align: center;
    }
`;