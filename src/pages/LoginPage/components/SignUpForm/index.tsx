import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { SignUpEmailStep } from './SignUpEmailStep';
import { SignUpPasswordStep } from './SignUpPasswordStep';

import useQueryApiClient from 'utils/useQueryApiClient';
import { useUserDispatch } from 'contexts/UserContext';
import { Button } from 'ui';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { SignInForm } from '../SignInForm';
import { message } from 'antd';
import dayjs from 'dayjs';

type SignUpFormProps = {
  setCurrentForm: (value: number) => void;
};

type dataType = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  username?: string;
};

export const SignUpForm = ({ setCurrentForm }: SignUpFormProps) => {
  const intl = useIntl();
  const { dispatch: userDispatch } = useUserDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<dataType>({});
  const [messageInp, setMessage] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    userDispatch({
      type: 'SET_USER_DATA',
      payload: {
        email: '',
        id: 0,
      },
    });
  }, []);

  const onEmailStepFinish = async (values: any) => {
    setUserData((prevState) => ({
      ...prevState,
      email: values?.email,
      establishedYear: dayjs(values?.establishedYear).year(),
    }));

    userDispatch({
      type: 'SET_USER_DATA',
      payload: {
        email: values.email,
        id: 0,
      },
    });
    submitRegister({ ...values, establishedYear: dayjs(values?.establishedYear).year() });
  };

  const {
    isLoading,
    appendData: submitRegister,
    data: registerData,
  } = useQueryApiClient({
    request: {
      url: 'api/auth/register',
      method: 'POST',
    },
    onSuccess: (response) => {
      if (response?.data?.isRegister) {
        setMessage(
          <p>
            {intl.messages.verifyEmailMessageBefore && intl.formatMessage({ id: 'verifyEmailMessageBefore' })}&nbsp;
            <span className="user-email">{userData.email}</span>.&nbsp;
            {intl.messages.verifyEmailMessageAfter && intl.formatMessage({ id: 'verifyEmailMessageAfter' })}&nbsp;
          </p>
        );
      }
    },
  });

  const { appendData: onPasswordStepFinish, isLoading: passwordIsLoading } = useQueryApiClient({
    request: {
      url: '/api/auth/complate/register',
      method: 'POST',
    },
    async onSuccess(response) {
      Cookies.remove('email');
      setCurrentForm(0);
    },
  });

  const steps = [
    <SignUpEmailStep onFinish={onEmailStepFinish} />,
    <SignUpPasswordStep
      onFinish={onPasswordStepFinish}
      isLoading={passwordIsLoading}
      setCurrentStep={setCurrentStep}
    />,
    <SignInForm setCurrentForm={setCurrentForm} />,
  ];

  const handleSetCurrentForm = () => {
    if (location.pathname === '/for-employers/sign-up') {
      navigate('/for-employers/login');
    } else setCurrentForm(0);
  };

  const handleResetEmail = () => {
    navigate('/for-employers/login');
    setCurrentForm(2);
  };

  return (
    <div className="form">
      {!messageInp ? (
        <>
          <h2 className="title">{intl.messages.signUpTitle && intl.formatMessage({ id: 'join_trusy_talents' })}</h2>
        </>
      ) : registerData.data.isRegister ? (
        <h2 className="title-small">
          {intl.messages.emailVerification && intl.formatMessage({ id: 'emailVerification' })}
        </h2>
      ) : (
        <h2>{intl.messages.signUpTitle && intl.formatMessage({ id: 'add_company_profile' })}</h2>
      )}

      <div className="h-100">
        {!messageInp ? (
          steps[currentStep]
        ) : (
          <div className="flex">
            <div className="verify-email-msg">
              {registerData.data.isRegister ? (
                <p>
                  {intl.messages.verifyEmailMessageBefore && intl.formatMessage({ id: 'verifyEmailMessageBefore' })}
                  &nbsp;
                  <span className="user-email">{userData.email}</span>.&nbsp;
                  {intl.messages.verifyEmailMessageAfter && intl.formatMessage({ id: 'verifyEmailMessageAfter' })}&nbsp;
                </p>
              ) : (
                <p>
                  {intl.messages.verifyEmailMessageBefore && intl.formatMessage({ id: 'add_company_to_your_profile' })}
                </p>
              )}
            </div>

            <div className="form-footer">
              {registerData.data.isRegister && (
                <div className="additionalInfo">
                  {intl.messages.didntReceiveEmail && intl.formatMessage({ id: 'didntReceiveEmail' })}&nbsp;
                  <span className="link" onClick={handleResetEmail}>
                    {intl.messages.resend && intl.formatMessage({ id: 'resend' })}
                  </span>
                </div>
              )}

              <Button
                label={intl.messages.continue && intl.formatMessage({ id: 'continue' })}
                type="primary"
                htmlType="submit"
                className="btn submit-btn primary-btn"
                onClick={() => navigate('/for-employers/login')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
