import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { LeftOutlined } from '@ant-design/icons';
import { BackButton, Button } from 'ui';
import { ResetPasswordForm } from './ResetPasswordForm';
import { StyledLoginPage } from 'pages/LoginPage/style';

export const ResetPasswordPage = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <StyledLoginPage>
      <div className="homelink">
        <BackButton
          label={intl.messages.home && intl.formatMessage({ id: 'home' })}
          color="white"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="form-wrapper">
        <ResetPasswordForm />
      </div>
    </StyledLoginPage>
  );
};
