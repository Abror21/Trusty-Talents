import styled from 'styled-components';

export const StyledIntro = styled.div`
    background-color: var(--black);
    display: flex;
    gap: 30px;
    padding: 50px 0 50px 50px;
    @media(max-width: 1024px){
        padding: unset;
        flex-direction: column;
    }
    @media(max-width: 768px){
        padding: 30px;
    }
    @media(max-width: 425px){
        padding: 30px 15px;
    }
    .intro__left,
    .intro__right{
        flex: 1;
    }
    .intro__left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 30px;
        @media(max-width: 1024px){
            padding: 60px 30px 30px;
        }
        .intro__suptitle{
            color: var(--yellow);
            font-size: 2.5rem;
            font-weight: 400;
            line-height: 1;
        }
        .intro__title{
            color: var(--white);
            font-size: 5rem;
            font-weight: 400;
            line-height: 1;
            @media(max-width: 768px){
                font-size: 4rem;
            }
        }
        .intro__subtitle{
            color: var(--white);
            font-size: 2.5rem;
            line-height: 1;
        }
    }
    .intro__right{
        .ant-image{
            width: 100%;
            img{
                width: 100%;
                min-height: 800px;
                object-fit: cover;
                @media(max-width: 1366px){
                    min-height: 500px;
                }
            }
        }
    }
`;