import styled from 'styled-components';

export const StyledBasicInformationFields = styled.div`
    margin-bottom: 15px;
    &.expanded{
        .fields__hide{
            svg{
                transform: rotate(180deg);
            }
        }
        .toggle{
            height: 0;
            overflow: hidden;
        }
    }
`;