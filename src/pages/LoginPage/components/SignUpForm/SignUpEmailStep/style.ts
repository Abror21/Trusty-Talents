import styled from 'styled-components';

export const StyledSingUpForm = styled.div`
  .form {
    .form_content {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      width: 100%;
      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 40px;
        justify-content: center;
      }

      .form_item,
      .form_flex_item {
        width: 100%;
      }

      &.btn_container {
        .ant-btn {
          border-radius: 5px;
          width: 100%;
        }

        margin-top: 20px;
        margin-bottom: 0px;
      }
    }
    .accept-container {
      align-items: center;
      gap: 20px;
    }

    .ant-form-item-label {
      text-align: start;
      max-width: 100%;
      label {
        color: var(--black) !important;
        font-family: var(--default-font) !important;
        font-size: 1rem !important;
        font-style: normal;
        font-weight: 400;
        line-height: 1.1111rem;
      }
    }
  }

  .ant-picker {
    border-radius: 8px !important;
  }
`;
