import React from 'react';
import { StyledForEmployersPage } from './style';
import { ForEmployersHeader } from 'components';
import { Outlet } from 'react-router-dom';

export const ForEmployersPage = () => {
  return (
    <StyledForEmployersPage>
      <ForEmployersHeader />
      <Outlet />
    </StyledForEmployersPage>
  );
};
