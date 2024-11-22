import styled from 'styled-components';

export const StyledLoginPage = styled.section`
  background-size: cover;
  padding: 0 15px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 60px;

  background: var(--gray-500);

  .form-wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 547px;
    padding: 30px 15px;
    box-sizing: border-box;
    background: var(--white);
    border: 0.5px solid var(--section-bg-color);
    border-radius: 10px;
    box-shadow: 0 5px 40px rgba(34, 34, 34, 0.1);

    @media screen and (min-width: 728px) {
      width: 35%;

      padding: 60px 35px;
    }
  }

  .homelink {
    width: 100%;
    padding: 20px 0;
    @media screen and (min-width: 728px) {
      width: 35%;
    }
  }
  .form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    .ant-form-item-required {
      font-size: 1.11112rem !important;
      line-height: 1.55556rem !important;
      font-weight: 700 !important;
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 100%;

    @media screen and (min-width: 728px) {
      gap: 10px;
      flex-grow: 1;
      margin-top: auto;
    }
  }

  .title {
    font-family: var(--primary-font);
    font-size: 2.22222rem;
    font-weight: 700;
    line-height: normal;
    text-align: center;

    @media screen and (min-width: 1280px) {
      font-size: 2.22222rem;
    }
  }
  .title-practice {
    font-family: var(--primary-font);
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 145%;
  }
  .title-small {
    font-family: var(--primary-font);
    font-size: 2.22222rem;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }

  .subtitle {
    font-family: var(--primary-font);
    font-weight: 700;
    line-height: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 728px) {
      flex-direction: row;
      font-size: 1.11112rem;
      line-height: 1.27778rem;
    }

    p {
      display: inline-block;
    }
  }

  .link {
    display: inline-block;
    color: var(--accent-color);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--base-color) !important;
    }
  }

  .input {
    position: relative;
    min-width: 100%;
    width: 100%;
    min-height: 53px;
    border-radius: 5px !important;

    @media screen and (min-width: 728px) {
      min-width: 380px;
    }
  }

  label {
    font-size: 0.88888rem !important;
    font-weight: 700 !important;
  }

  .additionalInfo {
    max-width: 300px;
    font-size: 1rem;
    line-height: 1.55556rem;
    font-weight: 500;

    text-align: center;

    @media screen and (min-width: 728px) {
      max-width: 326px;
    }
  }

  .verify-email-msg {
    height: 100%;
    max-width: 300px;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      display: inline-block;
      margin: auto 0;
    }
  }

  .user-email {
    color: var(--accent-color);
  }

  .submit-btn {
    width: 100%;

    @media screen and (min-width: 728px) {
      width: 200px;
      height: 45px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .back-btn {
    min-width: 120px;
    height: 45px;
  }

  .form-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    height: max-content;
  }

  .ant-form {
    height: 100% !important;
  }

  .ant-form-item-feedback-icon-error {
    display: none !important;
  }

  .spinner {
    width: 500px;
  }

  .recover-message {
    margin-top: -40%;
    display: flex;
    flex-direction: column;
    gap: 53px;
  }
  .submit-btn {
    &.disabled {
      background-color: var(--section-bg-color);
    }
  }
  .terms-of-use {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    .ant-form-item {
      margin-bottom: 0;
    }
    p {
      display: flex;
      gap: 3px;
      span {
        color: var(--accent-color);
        cursor: pointer;
      }
    }

    @media screen and (max-width: 1100px) {
      bottom: 0;
      left: 0;
    }
    @media screen and (max-width: 580px) {
      flex-direction: column;
      bottom: -15px;
      text-align: start;
    }
  }

  .have-account {
    margin-top: 20px;
    a {
      color: var(--base-color);
      &:hover {
        color: var(--accent-color);
      }
    }
  }
`;
