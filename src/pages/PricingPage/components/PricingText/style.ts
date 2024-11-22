import styled from 'styled-components';

export const StyledPricingText = styled.div`
    background-color: var(--gray-yellow);
    padding: 100px 0;
    @media(max-width: 768px){
        padding: 80px 0;
    }
    @media(max-width: 425px){
        padding: 50px 0;
    }
    .pricingtext__title{
        font-size: 2.8rem;
        line-height: 1.2;
        margin-bottom: 50px;
        @media(max-width: 768px){
            font-size: 2.6rem;
            margin-bottom: 40px;
            text-align: center;
        }
        @media(max-width: 425px){
            font-size: 2.2rem;
            margin-bottom: 20px;
        }
    }
    .pricingtext__text{
        font-size: 1.2rem;
        @media(max-width: 768px){
            text-align: center;
        }
    }
`;