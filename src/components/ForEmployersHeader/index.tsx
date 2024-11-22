import React from 'react';
import { StyledForEmployersHeader } from './style';
import { NavLink, useLocation } from 'react-router-dom';
import { companyNavigation } from 'utils/consts';
import { useIntl } from 'react-intl';
import Cookies from 'js-cookie';

export const ForEmployersHeader = () => {
  const intl = useIntl();

  const location = useLocation();
  const hasJwt = !!Cookies.get('jwt');

  return (
    <StyledForEmployersHeader>
      <div className="container">
        <div className="foremployers-header">
          {location.pathname.includes('for-employers') && !hasJwt ? (
            <>
              <NavLink to="/for-employers/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                Services
              </NavLink>
              <NavLink to="/for-employers/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
                Pricing
              </NavLink>
            </>
          ) : (
            companyNavigation.map((item, index) => (
              <NavLink key={item.key} to={item.to} className={({ isActive }) => `${isActive ? 'item active' : 'item'}`}>
                {intl.formatMessage({ id: item?.key })}
              </NavLink>
            ))
          )}
        </div>
      </div>
    </StyledForEmployersHeader>
  );
};
