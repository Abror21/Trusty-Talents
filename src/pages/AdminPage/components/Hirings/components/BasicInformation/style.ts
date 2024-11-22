import styled from 'styled-components';

export const StyledBasicInformation = styled.div`
  .basic-data{
    .basic-data__content{
      display: flex;
      flex-direction: column;
      gap: 30px;
      .fields-copy{
        display: flex;
        gap: 5px;
        align-items: center;
        margin-top: 5px;
        .ant-input{
          width: 50px;
        }
      }
    }
  }
  .form-header,
  .form-body {
    display: flex;
    align-items: center;
    gap: 60px;
    .ant-form-item {
      width: 100%;
    }
  }
  .form-header{
    margin-bottom: 10px;
    .ant-form-item {
      width: 30%;
      .ant-form-item{
        width: 100%
      }
    }
  }
  .form-header__salary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .salary-container {
      display: flex;
      align-items: center;
      gap: 20px;
      .salary-input{
        width: 100px;
      }
      .label-salary {
        .ant-form-item {
          margin-top: -5px;
        }
        .ant-form-item-required {
        }
      }
      .ant-form-item {
        width: 100%;
      }
      .ant-input-affix-wrapper {
        padding: 0px 10px;
      }
      .ant-form-item-explain-error {
        position: absolute !important;
      }
    }
    .ant-form-item {
      width: 60%;
    }
  }
  .contry-container {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    .ant-input-affix-wrapper {
      padding: 0px 10px;
    }
  }
  .form-item {
    max-width: 90%;
    min-width: 15%;
  }
  .next-btn {
    position: absolute;
    right: 0px;
    cursor: pointer;
  }
  .prev-btn {
    position: absolute;
    left: 0px;
    cursor: pointer;
  }
  .basic-data {
      background-color: var(--shadow-box);
      padding: 30px;
      border-radius: 15px;
    .ant-form-item-explain-error {
      position: absolute !important;
    }
    .basic-data__check{
      display: flex;
      gap: 8px;
      align-items: center;
      margin-bottom: 40px;
      .ant-checkbox-inner{
        width: 25px;
        height: 25px;
        &::after{
            width: 6px;
            height: 15px;
        }
      }
      .ant-input{
        height: 28px;
        width: 60px;
        border-radius: 5px;
      }
    }
  }
`;
