import { styled } from 'styled-components';
import { Modal } from 'ui';

export const StyledActionModal = styled.div`
  .w-100 {
    width: 100%;
    display: flex !important;
    justify-content: center !important;
  }

  .title {
    text-align: center;
    padding-top: 50px;
  }
  .description {
    padding: 0 50px;
    .text {
      padding: 20px 0;
    }
  }
  .select {
    padding-bottom: 50px;
  }

  .custom-select {
    position: relative;
    width: 100%;
    font-family: Arial, sans-serif;
  }

  .custom-select-field {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    background: #fff;
    user-select: none;
    transition: background 0.3s;
  }

  .custom-select-field:hover {
    background: #f9f9f9;
  }

  .custom-select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    z-index: 1000;
    max-height: 0;
    overflow-y: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .custom-select-dropdown.open {
    max-height: 200px;
    overflow-y: auto;
  }

  .custom-select-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 8px 12px;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s;
  }

  .custom-select-item:hover {
    background: #f0f8ff;
  }

  .custom-select-item:last-child {
    border-bottom: none;
  }

  .custom-select-item input {
    margin-right: 8px;
  }
  .action_user_email {
    margin-top: 20px;
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
`;
