import styled from 'styled-components';

export const StyledEducationForm = styled.div`
  .languages-form-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 17px;
    .toggle{
      display: flex;
      flex-direction: column;
      row-gap: 17px;
    }
    .labels {
      max-width: 851px;
      display: flex;
      gap: 30px;
      margin-bottom: -3px;

      h2 {
        color: var(--gray-600) !important;
        font-family: var(--default-font) !important;
        font-size: 1rem !important;
        font-style: normal;
        font-weight: 400;
        line-height: 1.1111rem;

        @media screen and (min-width: 728px) {
          width: 270px;
        }
        @media screen and (min-width: 1024px) {
          min-width: 326px;
        }

        &:last-of-type {
          display: none;

          @media screen and (min-width: 728px) {
            display: block;
          }
        }
      }
    }
  }
  .certificate_field {
    margin-top: 20px;
    width: 45%;
  }
`;
