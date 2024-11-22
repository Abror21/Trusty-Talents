import React, { useState } from 'react';
import { StyledHeaderBottom } from './style';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BurgerButton, Button } from 'ui';
import { MobileMenu, UserProfileBadge } from 'components';
import { navigation } from 'utils/consts';
import Cookies from 'js-cookie';
import { useIntl } from 'react-intl';
{
  /* TODO: translate */
}
export const HeaderBottom = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const hasJwt = !!Cookies.get('jwt');
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <StyledHeaderBottom>
      <Link to="/" className="header-bottom__logo">
        <span>Trusty</span>
        <span>Talents</span>
      </Link>
      <div className="header-bottom__menu">
        {navigation
          .filter((item) => !hasJwt || item.key === 'forEmployers')
          .map((item, index) => (
            <NavLink key={item.key} to={item.to} className={({ isActive }) => `${isActive ? 'item active' : 'item'}`}>
              {item.label}
            </NavLink>
          ))}
      </div>

      <div className="header-bottom__authentication">
        {location.pathname.includes('for-employers') ? (
          hasJwt ? (
            <UserProfileBadge />
          ) : (
            <>
              <Button onClick={() => navigate('/for-employers/login')} label={intl.formatMessage({ id: 'login' })} />
              <Button
                onClick={() => navigate('/for-employers/sign-up')}
                label={intl.formatMessage({ id: 'signUp' })}
                type="primary"
              />
            </>
          )
        ) : null}
      </div>

      {menuOpen && (
        <>
          <div className="blur"></div>
          <MobileMenu setMenuOpen={setMenuOpen} />
        </>
      )}
      <BurgerButton className="burger-button" onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
    </StyledHeaderBottom>
  );
};
