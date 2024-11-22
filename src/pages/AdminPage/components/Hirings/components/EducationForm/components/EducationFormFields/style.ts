import styled from 'styled-components';

export const StyledEducationFormFields = styled.div`
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
    .select-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 11px;
      margin-bottom: 10px;
      max-width: 800px;

      @media screen and (min-width: 728px) {
        margin-bottom: 0;
      }
      & > .ant-form-item{
        width: 40%;
      }
      .select-box {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;

        @media screen and (min-width: 728px) {
          flex-direction: row;
          gap: 22px;
        }

        @media screen and (min-width: 1024px) {
          width: max-content;
        }
      }

      .select {
        width: 100%;

        @media screen and (min-width: 1024px) {
          min-width: 330px;
          max-width: 330px;
        }
      }

      .select_input {
        @media screen and (min-width: 1024px) {
          min-width: 430px;
          max-width: 430px;
        }
      }
      .level-select-wrapper {
        display: flex;
        gap: 22px;
        width: 100%;
        @media screen and (min-width: 1023px) {
          min-width: 330px;
          max-width: 330px;
        }
      }
    }
`;