import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { StyledLoginPage } from './style';
import { BackButton, Button, Modal } from 'ui';
import { SignUpForm } from './components/SignUpForm';
import { SignInForm } from './components/SignInForm';
import { ResendVerificationForm } from './components/ResendVerificationEmailForm';
import { SendResetPasswordEmailForm } from './components/SendResetPasswordEmailForm';
import { TermsOfUseContent } from './components/TermsOfUseContent';
import Cookies from 'js-cookie';

export const LoginPage = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [scrollBottom, setScrollBottom] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState(0);

  const forms = [
    <SignInForm setCurrentForm={setCurrentForm} />,
    <SignUpForm setCurrentForm={setCurrentForm} />,
    <ResendVerificationForm setCurrentForm={setCurrentForm} />,
    <SendResetPasswordEmailForm setCurrentForm={setCurrentForm} />,
  ];

  const handleAccept = () => {
    if (!scrollBottom) {
      return;
    }
    setIsShow(false);
    setCurrentForm(1);
  };

  return (
    <StyledLoginPage>
      <div className="homelink">
        <BackButton
          label={intl.messages.home && intl.formatMessage({ id: 'home' })}
          color="white"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="form-wrapper">
        <div className="home-link">
          <Modal
            title={intl.messages.termsOfUse && intl.formatMessage({ id: 'termsOfUse' })}
            open={isShow}
            onOk={handleAccept}
            footer={[
              <Button
                disabled={!scrollBottom}
                key="ok"
                onClick={handleAccept}
                label={intl.messages.accept && intl.formatMessage({ id: 'accept' })}
                type="primary"
                className="submit-btn btn submit-btn primary-btn"
              />,
            ]}
            zIndex={3000}
            closable={false}
          >
            <TermsOfUseContent setScrollBottom={setScrollBottom} />
          </Modal>
        </div>
        {location.pathname === '/for-employers/sign-up' ? forms[1] : forms[currentForm]}
      </div>
      {location.pathname === '/for-employers/sign-up' && (
        <div className="have-account">
          {intl.formatMessage({ id: 'have_account' })}&nbsp;
          <Link to="/for-employers/login">{intl.formatMessage({ id: 'signIn' })}</Link>
        </div>
      )}
    </StyledLoginPage>
  );
};
