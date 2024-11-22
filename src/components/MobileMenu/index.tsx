import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { StyledMobileMenu } from './style';
import { navigation } from 'utils/consts';
import { UserProfileBadge } from 'components/UserProfileBadge';
import { Button } from 'ui';
import Cookies from 'js-cookie';
import { useIntl } from 'react-intl';

type MobileMenuProps = {
  setMenuOpen: (value: boolean) => void;
};

export const MobileMenu = ({ setMenuOpen }: MobileMenuProps) => {
  const navigate = useNavigate();
  const hasJwt = !!Cookies.get('jwt');
  const intl = useIntl();
  const location = useLocation();

  return (
    <StyledMobileMenu>
      <div className="container">
        <div className="navbar">
          {navigation.map((item, index) => (
            <React.Fragment key={index}>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to={item.to}
                key={item.key}
                className={({ isActive }) => `${isActive ? 'item active' : 'item'}`}
              >
                {item.label}
              </NavLink>
            </React.Fragment>
          ))}

          <div className="header-bottom__authentication">
            {location.pathname.includes('for-employers') ? (
              hasJwt ? (
                <UserProfileBadge />
              ) : (
                <>
                  <Button
                    onClick={() => {
                      navigate('/for-employers/login');
                      setMenuOpen(false);
                    }}
                    label={intl.formatMessage({ id: 'login' })}
                  />
                  <Button
                    onClick={() => {
                      navigate('/for-employers/sign-up');
                      setMenuOpen(false);
                    }}
                    label={intl.formatMessage({ id: 'signUp' })}
                    type="primary"
                  />
                </>
              )
            ) : null}
          </div>
        </div>
      </div>
    </StyledMobileMenu>
  );
};
