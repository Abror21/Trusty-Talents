import styled from 'styled-components';

export const StyledPricingPlans = styled.div`
    background-color: var(--black);
    padding: 50px 0 80px;
    color: var(--white);
    .pricing__title{
        font-size: 2.4rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 50px;
        line-height: 1.2;
        @media(max-width: 768px){
            font-size: 2rem;
            margin-bottom: 30px;
        }
        @media(max-width: 425px){
            font-size: 1.8rem;
            margin-bottom: 30px;
        }
    }
    .pricing__subtitle{
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 80px;
        @media(max-width: 768px){
            font-size: 1.4rem;
            margin-bottom: 50px;
        }
        @media(max-width: 425px){
            font-size: 1rem;
            margin-bottom: 30px;
        }
    }
    .pricing__items{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 30px;
    }
    .pricing__item{
        border: 1px solid var(--white);
        padding: 30px 30px 50px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        width: 100%;
        transition: all .3s;
        @media(max-width: 768px){
            padding: 30px;
        }
        @media(max-width: 425px){
            padding: 30px 12px;
        }
        &:hover{
            border-color: var(--yellow);
        }
        &__title{
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 15px;
            @media(max-width: 768px){
                font-size: 1.8rem;
            }
            @media(max-width: 425px){
                font-size: 1.6rem;
            }
        }
        &__price{
            font-size: 3rem;
            line-height: 1;
            margin-bottom: 10px;
            @media(max-width: 768px){
                font-size: 2.6rem;
            }
            @media(max-width: 425px){
                font-size: 2.4rem;
            }
        }
        &__period{
            font-size: 1rem;
            line-height: 1;
        }
        &__line{
            background-color: var(--white);
            margin: 15px 0 20px;
        }
        &__services{
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-bottom: 50px;
        }
    }
`;