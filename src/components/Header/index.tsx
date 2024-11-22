import React, { memo } from 'react';
import { StyledHeader } from './style';
import { HeaderTop } from 'components';
import { HeaderBottom } from 'components';

export const Header = memo(() => {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderBottom />
    </StyledHeader>
  );
});
