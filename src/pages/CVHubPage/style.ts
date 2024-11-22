import styled from 'styled-components';

export const StyledCVHubPage = styled.div`
  .title {
    font-family: var(--primary-font);
    font-size: 1.66667rem;
    line-height: normal;
    font-weight: 700;
    margin: 20px 0 40px 0;
    text-align: center;
  }
  padding-top: 15px;

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
  .total {
    font-family: var(--primary-font);
    font-size: 1.11111rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1111rem;
    color: var(--blue-700);
  }
  .table-action {
    display: flex;
    gap: 8px;
    svg {
      fill: var(--base-color);
      cursor: pointer;
    }
  }
  .total {
    font-family: var(--primary-font);
    font-size: 1.11111rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1111rem;
    color: var(--blue-700);
    margin: 30px 0 20px 0;
  }
  .pagination-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
  }
  .ant-pagination-next {
    position: absolute;
    right: 0;
    button {
      color: var(--blue-700);
    }
  }
  .ant-pagination-prev {
    position: absolute;
    left: 0;
    button {
      color: var(--blue-700);
    }
  }
  .pagination-btn {
    margin-right: 8px;
    display: flex;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    border: 1px solid var(--gray-300);
    background: var(--white);
    font-size: 0.777777rem;
    span {
      font-family: var(--default-font);
      font-style: normal;
      font-weight: 500;
      line-height: 1.1111rem;
    }
  }
  .ant-pagination-item {
    margin: 0 4px;
    font-size: 0.777777rem;
    font-family: var(--default-font);

    a {
      color: var(--gray-200);
    }
  }
  .ant-pagination-item-active {
    border: none;
    background: none;
    a {
      color: var(--blue-700);
    }
  }
  .skill-column {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    &-item {
      display: flex;
      align-items: center;
      gap: 5px;
      span {
        color: #3a70b3;
        font-family: var(--default-font);
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.1111rem;
      }
    }
  }

  .action-column {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    svg {
      width: 20px;
      height: 20px;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        color: var(--accent-color);
      }
    }
  }
`;
