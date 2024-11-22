import { styled } from 'styled-components';

export const StyledCompanyProfilePage = styled.div`
  margin: 0 auto;
  .title {
    font-family: var(--primary-font);
    font-size: 1.66667rem;
    line-height: normal;
    font-weight: 700;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .edit-svg {
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        fill: var(--accent-color) !important;
      }
    }
  }
  .table {
    width: 100%;
    margin-top: 50px;
  }
  thead {
    .ant-table-cell {
      background: var(--white) !important;
    }
    .ant-table-cell::before {
      display: none !important;
    }
    th {
      color: var(--gray-600) !important;
      font-family: var(--default-font);
      font-size: 0.777777rem !important;
      font-style: normal;
      font-weight: 400 !important;
      line-height: 20px;
    }
  }
  tbody {
    .ant-table-cell {
      color: var(--blue-700) !important;
      font-size: 0.777777rem;
      font-family: var(--default-font);
    }
  }
  .ant-table-cell {
    color: var(--gray-600) !important;
  }
  .form {
    width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 0 auto;
  }
  .profile-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    gap: 20px;
    button {
      border-radius: 8px !important;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .input {
    width: 100%;
  }

  .ant-form-item-label {
    text-align: start;
    max-width: 100%;
    label {
      color: var(--gray-600) !important;
      font-family: var(--default-font) !important;
      font-size: 1rem !important;
      font-style: normal;
      font-weight: 400;
      line-height: 1.1111rem;
    }
  }

  .trash-svg {
    fill: red;
  }
`;
