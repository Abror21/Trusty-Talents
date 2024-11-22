import styled from 'styled-components';

export const StyledOurTeam = styled.div`
    background-color: var(--gray-yellow);
    .ourteam__content{
        padding: 80px;
        @media(max-width: 1366px){
            padding: 40px 0;
        }
    }
    .ourteam__title{
        font-size: 3rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 40px;
    }
    .ourteam__wrapper{
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
    }
    .ourteam__card{
        display: flex;
        flex-direction: column;
        max-width: 400px;
        .ant-image{
            margin-bottom: 20px;
        }
        .ourteam__card-name{
            font-size: 1.2rem;
            margin-bottom: 5px;
        }
        .ourteam__card-position{
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--dark-green);
            margin-bottom: 25px;
        }
        .ourteam__card-info{
            display: flex;
            flex-direction: column;
            font-size: 1rem;
        }
    }
`;