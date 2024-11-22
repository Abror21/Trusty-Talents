import { useEffect } from 'react';
import axios from 'axios';
import { useThemeSwitchState } from 'contexts/ThemeSwitchContext';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider } from 'styled-components';
import { token, darkToken } from 'config/token';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { notification } from 'antd';
import { useLanguage } from 'contexts/LanguageContext';
import useSessionStorage from 'utils/useSessionStorage';
import { routes } from 'config/config';
import IntlProviderWrapper from 'utils/intlProviderWrapper';
import {
  AboutUsPage,
  AdminUiContent,
  ForEmployersPage,
  LoginPage,
  PricingPage,
  ServicesPage,
  Permissions,
  Logs,
  HiringsPage,
  CompanyPage,
  ApplicantsList,
  AddUserActionForm,
  ResetPasswordPage,
  CandidateBoard,
  MyCompanyPage,
  CVHubPage,
  HiddenPage,
  CompanyProfilePage,
} from 'pages';
import DefaultLayout from 'layouts/DefaultLayout';
import { FixedScrollUpButton } from 'ui';
import AdminLayout from 'layouts/AdminLayout';
import ProtectedAdminRoute from 'routes/ProtectedAdminRoutes';
import { ResetVerificationEmailPage } from 'pages/ResetVerificationEmailPage';
import { SignUpVerificationEmailPage } from 'pages/SignUpVerificationEmailPage';
import { UnauthorizedPage } from 'pages/UnauthorizedPage';
import ActionForm from 'pages/AdminPage/components/Company/components/Actionform';
import { ActionModalHirings } from 'pages/AdminPage/components/Hirings/components/ActionModal';
import { AdminUsers } from 'pages/AdminPage/components/Users';
import Cookies from 'js-cookie';
import { HiringTabs } from 'components/HiringTabs';

function App() {
  const systemTheme = useThemeSwitchState();
  const { language } = useLanguage();
  const { setSessionValue: setTranslationsToSession } = useSessionStorage('translations');
  const hasJwt = !!Cookies.get('jwt');

  notification.config({
    placement: 'top',
    duration: 5,
  });

  useEffect(() => {
    getDictionary();
  }, [language]);

  const getDictionary = async () => {
    try {
      const res = await axios.get(`${routes.api.baseUrl}/api/uicontent/dictionary`, {
        headers: {
          ['LangCode']: language,
        },
      });
      if (res.data.data) {
        setTranslationsToSession(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: systemTheme.type !== 'default' ? {} : token,
        components: {
          Layout: {
            // headerBg: 'white',
          },
          Notification: {
            zIndexPopup: 10002,
          },
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <IntlProviderWrapper>
        <ThemeProvider theme={{ antd: systemTheme.type !== 'default' ? darkToken : token }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<AboutUsPage />} />
                <Route path="/for-employers" element={<ForEmployersPage />}>
                  <Route index element={<Navigate to="/for-employers/services" />} />
                  <Route path="services" element={<ServicesPage />} />
                  <Route path="pricing" element={<PricingPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="sign-up" element={<LoginPage />} />
                  <Route path="reset-password" element={<ResetPasswordPage />} />
                  <Route path="verify-signup-email" element={<ResetPasswordPage />} />
                  <Route path="my-company" element={<MyCompanyPage />} />
                  <Route path="cv-hub" element={<CVHubPage />} />
                  <Route path="plans-pricing" element={<HiddenPage />} />
                  <Route path="users" element={<HiddenPage />} />
                  <Route path="profile" element={<CompanyProfilePage />} />
                  <Route path="request-talent" element={<HiringTabs />} />
                  <Route path="request-talent/:id" element={<CandidateBoard />} />
                </Route>
                <Route path="/for-employees" element={<h1>For Employees</h1>} />
              </Route>
              <Route path="/" element={<AdminLayout />}>
                <Route path="/admin" element={<AdminUsers />} />
                <Route path="/admin/users/add-users" element={<AddUserActionForm />} />
                <Route
                  path="/admin/translations"
                  element={
                    <ProtectedAdminRoute permission="cms_translation">
                      <AdminUiContent />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/logs"
                  element={
                    <ProtectedAdminRoute permission="log_files">
                      <Logs />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/permissions"
                  element={
                    <ProtectedAdminRoute permission="user_permission">
                      <Permissions />
                    </ProtectedAdminRoute>
                  }
                />

                <Route
                  path="/admin/my-company"
                  element={
                    <ProtectedAdminRoute permission="my_company">
                      <CompanyPage />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/my-company/add-company"
                  element={
                    <ProtectedAdminRoute permission="my_company">
                      <ActionForm />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/edit-company/:id"
                  element={
                    <ProtectedAdminRoute permission="my_company">
                      <ActionForm />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/view-company/:id"
                  element={
                    <ProtectedAdminRoute permission="my_company">
                      <ActionForm />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/request-talent"
                  element={
                    <ProtectedAdminRoute permission="request_talent">
                      <HiringsPage />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/request-talent/add-talent"
                  element={
                    <ProtectedAdminRoute permission="request_talent">
                      <ActionModalHirings />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/request-talent/edit-talent/:id"
                  element={
                    <ProtectedAdminRoute permission="jobs">
                      <ActionModalHirings />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/request-talent/view-talent/:id"
                  element={
                    <ProtectedAdminRoute permission="jobs">
                      <ActionModalHirings />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/request-talent/copy-talent/:id"
                  element={
                    <ProtectedAdminRoute permission="jobs">
                      <ActionModalHirings />
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="/admin/applicants-list/:id"
                  element={
                    <ProtectedAdminRoute permission="jobs">
                      <ApplicantsList />
                    </ProtectedAdminRoute>
                  }
                />
              </Route>
              <Route path="/verification-email" element={<ResetVerificationEmailPage />} />

              <Route path="/unauthorized" element={<UnauthorizedPage />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <FixedScrollUpButton />
          </BrowserRouter>
        </ThemeProvider>
      </IntlProviderWrapper>
    </ConfigProvider>
  );
}

export default App;
