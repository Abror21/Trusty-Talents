import styled from 'styled-components';

export const StyledCVHubFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  .key_word_input {
    width: 100%;
  }
  .form-select {
    min-width: 230px;
  }
  .ant-select-selection-overflow {
    display: flex !important;
    margin-right: 8px;
    flex-wrap: nowrap !important;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .ant-select-selection-overflow::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    cursor: pointer;
  }
  .ant-select-selection-overflow::-webkit-scrollbar-thumb {
    background-color: var(--base-color);
    border-radius: 6px;
  }
  .ant-select-selection-overflow::-webkit-scrollbar-track {
    background: none;
  }
`;
