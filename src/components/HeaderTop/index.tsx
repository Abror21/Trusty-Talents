import React, { useState } from 'react';
import { StyledHeaderTop } from './style';
import { LanguageSwitcher } from 'components';

export const HeaderTop = () => {
  return (
    <StyledHeaderTop>
      <LanguageSwitcher />
    </StyledHeaderTop>
  );
};
