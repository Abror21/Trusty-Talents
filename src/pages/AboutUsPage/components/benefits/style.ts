import styled from 'styled-components';

export const StyledBenefits = styled.div`
    background-color: var(--dark-green);
    padding: 60px 0;
    @media(max-width: 1024px){
        padding: 40px 0;
    }
    .benefits__first,
    .benefits__second{
        display: flex;
        gap: 30px;
        @media(max-width: 768px){
            flex-direction: column;
        }
        .ant-image,
        .benefits__text{
            flex: 1;
            color: var(--white);
        }
    }
    .benefits__first{
        margin-bottom: 50px;
    }
    .benefits__second{
        @media(max-width: 768px){
            flex-direction: column-reverse;
        }
    }
    .benefits__text{
        .benefits__suptitle{
            color: var(--yellow);
            text-transform: uppercase;
            font-size: 1.2rem;
            letter-spacing: 2px;
        }
        .benefits__title{
            font-weight: 700;
            font-size: 1.6rem;
            margin-bottom: 20px;
        }
    }
`;