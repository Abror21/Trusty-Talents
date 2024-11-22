import styled from 'styled-components';

export const StyledServiceSection = styled.div`
    .services{
        display: flex;
        flex-direction: row;
        align-items: center;
        @media(max-width: 992px){
            flex-direction: column;
            gap: 15px;
        }
        &.reverse{
            flex-direction: row-reverse;
            @media(max-width: 992px){
                flex-direction: column;
            }
        }
        &.dark{
            background-color: var(--dark-green);
        }
        &.bright{
            background-color: var(--gray-yellow);
            .services__left{
                h3, p{
                    color: var(--black);
                }
            }
        }
    }
    .services__left,
    .services__right{
        width: 50%;
        @media(max-width: 992px){
            width: 100%;
        }
    }
    .services__left{
        padding: 10px 115px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media(max-width: 1366px){
            padding: 30px 60px;
        }
        @media(max-width: 992px){
            padding: 30px;
        }
        @media(max-width: 425px){
            padding: 30px 15px;
        }
        .services__title{
            font-size: 2.5rem;
            color: var(--white);
            line-height: 1.2;
            margin-bottom: 50px;
            @media(max-width: 1366px){
                margin-bottom: 20px;
                line-height: 1;
            }   
        }
        .services__text{
            color: var(--white);
        }
    }
    .services__right{
        .ant-image{
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
`;