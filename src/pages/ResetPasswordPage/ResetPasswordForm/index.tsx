import React, { useState } from 'react';
import { Form } from 'antd';
import { useIntl } from 'react-intl';

import { Button, Input, Spinner } from 'ui';
import useQueryApiClient from 'utils/useQueryApiClient';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

export const ResetPasswordForm = () => {
  const intl = useIntl();
  const [message, setMessage] = useState<React.ReactNode | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [form] = Form.useForm();

  const { isLoading, appendData: submitPasswordReset } = useQueryApiClient({
    request: {
      url: `/api/auth/password`,
      method: 'PATCH',
    },
    onSuccess: (response) => {
      setMessage(
        <p>{intl.messages.passwordResetSuccess && intl.formatMessage({ id: 'passwordResetSuccess' })}&nbsp;</p>
      );
    },
  });

  const { appendData: onPasswordStepFinish, isLoading: passwordIsLoading } = useQueryApiClient({
    request: {
      url: '/api/auth/complate/register',
      method: 'POST',
    },
    async onSuccess(response) {
      navigate('/for-employers/login');
    },
  });

  const onFinish = (values: any) => {
    if (location.pathname === '/for-employers/verify-signup-email') {
      getSignUpVerification({ code: searchParams.get('code'), email: searchParams.get('email') });

      if (verifyEmail) {
      }
    } else if (location.pathname === '/for-employers/reset-password') {
      submitPasswordReset(values);
    }
  };

  const passwordValidator = async (rule: any, value: string, cb: (msg?: string) => void) => {
    if ((value && value.length < 8) || (value && value.length > 30)) {
      return Promise.reject(
        new Error(`${intl.messages['error.passwordLength'] && intl.formatMessage({ id: 'error.passwordLength' })}`)
      );
    }
    if (
      (value && !/[a-z]/.test(value)) ||
      (value && !/[A-Z]/.test(value)) ||
      (value && !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value))
    ) {
      return Promise.reject(
        new Error(
          `${intl.messages['error.passwordCharacters'] && intl.formatMessage({ id: 'error.passwordCharacters' })}`
        )
      );
    }
    return Promise.resolve();
  };

  const { appendData: getSignUpVerification, isLoading: verifyEmail } = useQueryApiClient({
    request: {
      url: `/api/auth/verify-email`,
      method: 'POST',
    },
    onSuccess: (response) => {
      if (response?.data?.split('&')[0] === 'email_is_already_confirmed') {
        navigate('/for-employers/login');
      } else {
        onPasswordStepFinish({
          password: form.getFieldValue('password'),
          confirmPassword: form.getFieldValue('confirmPassword'),
          email: searchParams.get('email'),
        });
      }
    },
    onError: (response) => {
      if (response.error === 'verification_is_invalid') {
        setMessage(
          <p className="expired">
            {intl.messages['error.verification_is_invalid'] &&
              intl.formatMessage({ id: 'error.verification_is_invalid' })}
          </p>
        );
      }
      if (response.error === 'confirmation_time_has_expired') {
        setMessage(
          <p className="expired">
            {intl.messages['error.confirmation_time_has_expired'] &&
              intl.formatMessage({ id: 'error.confirmation_time_has_expired' })}
          </p>
        );
      }
      if (response.error === 'email_is_not_confirmed') {
        setMessage(
          <p className="expired">
            {intl.messages['error.linkIsNotValid'] && intl.formatMessage({ id: 'error.linkIsNotValid' })}
          </p>
        );
      }
    },
  });

  return (
    <div className="form">
      {location.pathname === '/for-employers/reset-password' ? (
        <h2 className="title">{intl.messages.passwordReset && intl.formatMessage({ id: 'passwordReset' })}</h2>
      ) : (
        <h2 className="title">{intl.messages.signUpTitle && intl.formatMessage({ id: 'join_trusy_talents' })}</h2>
      )}
      {!message && (
        <div className="subtitle">
          {intl.messages.createNewPassword && intl.formatMessage({ id: 'createNewPassword' })}&nbsp;
        </div>
      )}

      <div className="h-100">
        <Form onFinish={onFinish} form={form} layout="vertical">
          <div className="flex">
            {message && (
              <>
                <div className="verify-email-msg">
                  <Spinner spinning={isLoading}>{!isLoading && message}</Spinner>
                </div>

                <div className="form-footer">
                  <Button
                    label={intl.messages.continue && intl.formatMessage({ id: 'continue' })}
                    type="primary"
                    className="btn submit-btn primary-btn"
                    onClick={() => navigate('/for-employers/my-company')}
                  />
                </div>
              </>
            )}

            {!message && location.pathname === '/for-employers/reset-password' && (
              <>
                <Input
                  type="password"
                  name="newPassword"
                  validateTrigger="onBlur"
                  label={intl.messages.newPassword && intl.formatMessage({ id: 'newPassword' })}
                  rules={[
                    {
                      required: true,
                      message:
                        intl.messages['error.enterPassword'] && intl.formatMessage({ id: 'error.enterPassword' }),
                    },
                    {
                      validator: passwordValidator,
                    },
                  ]}
                  hasFeedback
                  size="large"
                  className="input"
                />

                <Input
                  type="password"
                  label={intl.messages.confirmPassword && intl.formatMessage({ id: 'confirmPassword' })}
                  name="confirmPassword"
                  dependencies={['newPassword']}
                  validateTrigger="onBlur"
                  rules={[
                    {
                      required: true,
                      message:
                        intl.messages['error.confirmPassword'] && intl.formatMessage({ id: 'error.confirmPassword' }),
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            `${
                              intl.messages['error.passwordsDontMatch'] &&
                              intl.formatMessage({ id: 'error.passwordsDontMatch' })
                            }`
                          )
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                  size="large"
                  className="input"
                />

                <div className="form-footer">
                  <Button
                    label={intl.messages.send && intl.formatMessage({ id: 'send' })}
                    type="primary"
                    htmlType="submit"
                    className="btn submit-btn primary-btn"
                  />
                </div>
              </>
            )}
            {!message && location.pathname === '/for-employers/verify-signup-email' && (
              <>
                <Input
                  type="password"
                  name="password"
                  validateTrigger="onBlur"
                  label={intl.messages.password && intl.formatMessage({ id: 'password' })}
                  rules={[
                    {
                      required: true,
                      message:
                        intl.messages['error.enterPassword'] && intl.formatMessage({ id: 'error.enterPassword' }),
                    },
                    {
                      validator: passwordValidator,
                    },
                  ]}
                  hasFeedback
                  size="large"
                  className="input"
                />

                <Input
                  type="password"
                  label={intl.messages.confirmPassword && intl.formatMessage({ id: 'confirmPassword' })}
                  name="confirmPassword"
                  dependencies={['password']}
                  validateTrigger="onBlur"
                  rules={[
                    {
                      required: true,
                      message:
                        intl.messages['error.confirmPassword'] && intl.formatMessage({ id: 'error.confirmPassword' }),
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            `${
                              intl.messages['error.passwordsDontMatch'] &&
                              intl.formatMessage({ id: 'error.passwordsDontMatch' })
                            }`
                          )
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                  size="large"
                  className="input"
                />

                <div className="form-footer">
                  <div className="buttons">
                    <Button
                      label={intl.messages.send && intl.formatMessage({ id: 'send' })}
                      type="primary"
                      htmlType="submit"
                      className="btn submit-btn primary-btn"
                      loading={isLoading}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};
