import { styled } from 'styled-components';

export const StyledHiringTabs = styled.div`
  padding-bottom: 100px;
  background: var(--gray-500);
  padding-top: 30px;
  .hiring-tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    background: var(--gray-500);

    .hiring_btn {
      margin-top: 10px;
    }
  }
  .tab-item {
    width: 100%;
  }
  .pagination {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 26px;
  }

  .ant-pagination-item {
    margin: 0 4px;
  }
  .pagination-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 26px;
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

  .ant-tabs-nav {
    background: var(--gray-500) !important;
  }

  .ant-tabs-tab-active {
  }

  .ant-tabs-tab {
    color: var(--white) !important;
  }

  .ant-tabs,
  .ant-tabs-content-holder {
    background: white !important;
  }

  .ant-tabs-tab-active {
    background: var(--white) !important;
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    padding: 0 10px !important;
  }

  .btn-container {
    background: var(--white);
  }
  .btn-wrap {
    padding: 0 0 10px;
    background: var(--gray-500);
  }

  .sort-wrap {
    background: var(--white);
    width: 80px;
  }

  .sort-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    background: var(--gray-500);
    svg {
      color: white;
      fill: white;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;
