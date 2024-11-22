import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { StyledCompanyProfilePage } from './style';
import { ActionForm } from './components/ActionForm';
import { CompanyList } from './components/CompanyList';
import { Button } from 'ui';
import { Form } from 'antd';
import SvgSelector from 'assets/icons/SvgSelector';
import useQueryApiClient from 'utils/useQueryApiClient';

export function CompanyProfilePage() {
  const intl = useIntl();
  const [disable, setDisable] = useState<boolean>(true);
  const [form] = Form.useForm();

  const {
    isLoading,
    data: companyData,
    refetch: refetchCompanyData,
  } = useQueryApiClient({
    request: {
      url: '/api/user/profile',
      method: 'GET',
    },
    onSuccess() {},
  });

  useEffect(() => {
    form.setFieldsValue({
      FirstName: companyData?.data?.name,
      LastName: companyData?.data?.lastName,
      Email: companyData?.data?.email,
      PhoneNumber: companyData?.data?.phoneNumber,
      PersonJob: companyData?.data?.personJob,
    });
  }, [isLoading]);

  const { appendData: updateCompany } = useQueryApiClient({
    request: {
      url: '/api/user/profile',
      method: 'PUT',
    },
    onSuccess() {
      refetchCompanyData();
    },
  });

  const submit = (value: any) => {
    updateCompany({
      position: value.PersonJob,
      firstName: value.FirstName,
      lastName: value.LastName,
      phoneNumber: value.PhoneNumber,
      email: value.Email,
    });
  };

  return (
    <StyledCompanyProfilePage className="container">
      <h1 className="title">
        {intl.formatMessage({ id: 'my_profile' })}&nbsp;
        {disable ? (
          <span onClick={() => setDisable(false)}>
            <SvgSelector id="edit" className="edit-svg" />
          </span>
        ) : (
          <span onClick={() => setDisable(true)}>
            <SvgSelector id="eye" className="edit-svg" />
          </span>
        )}
      </h1>
      <Form layout="vertical" className="form" name="my-form" form={form} onFinish={submit}>
        <ActionForm disable={disable} />
        <CompanyList companyData={companyData?.data?.userOrganizationModel} isLoading={isLoading} />
        <div className="profile-footer">
          <Button htmlType="submit" label={intl.formatMessage({ id: 'save' })} type="primary" />
          <Button label={intl.formatMessage({ id: 'delete_profile' })} danger />
        </div>
      </Form>
    </StyledCompanyProfilePage>
  );
}
