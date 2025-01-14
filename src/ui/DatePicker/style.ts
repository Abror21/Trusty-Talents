// styles.ts

import styled from 'styled-components';
import { token } from 'config/token'; // Provide the correct path
import { DatePicker } from 'antd';

export const StyledDatePicker = styled(DatePicker)`
  && {
    height: ${token.inputHeight}px;
    width: 100%;

    input {
      font-size: 0.8889rem;
      color: var(--text-color, #070707);
      font-family: var(--default-font);
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
    }
    input::-webkit-input-placeholder {
      font-family: var(--default-font);
      font-size: 0.8889rem;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      color: var(--text-color);
    }
  }
`;
