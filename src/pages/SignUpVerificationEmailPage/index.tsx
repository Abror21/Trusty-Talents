import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Spinner } from 'ui';
import { StyledSignUpVerificationEmailPage } from './style';
import useQueryApiClient from 'utils/useQueryApiClient';
import Cookies from 'js-cookie';

export const SignUpVerificationEmailPage = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<React.ReactNode | null>(null);

 

  return <StyledSignUpVerificationEmailPage></StyledSignUpVerificationEmailPage>;
};
