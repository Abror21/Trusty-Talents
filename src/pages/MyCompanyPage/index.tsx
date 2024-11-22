import { StyledMyCompanyPage } from './style';
import React, { useEffect, useState } from 'react';
import { Button } from 'ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Form } from 'antd';
import SvgSelector from 'assets/icons/SvgSelector';
import dayjs from 'dayjs';
import useQueryApiClient from 'utils/useQueryApiClient';
import { ActionForm } from './components/ActionForm';

export function MyCompanyPage() {
  const navigate = useNavigate();
  const intl = useIntl();
  const locations = useLocation();
  const [image, setImage] = useState<File | null>(null);
  const [form] = Form.useForm();
  const [path, setPath] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState<string | null>('');
  const [disable, setDisable] = useState<boolean>(true);
  const [importUserData, setImportUserData] = useState<boolean>(false);

  const { isLoading: updateCompanyLoading, appendData: updateCompany } = useQueryApiClient({
    request: {
      url: `/api/organization/update`,
      method: 'PUT',
      multipart: true,
    },
    onSuccess(response) {
      setDisable(true);
      refetchCompanyData();
    },
  });

  const submit = (value: any) => {
    const orgCode = parseInt(value?.OrganizationCode);
    if (orgCode <= 0) {
      // message.error('OrganizationCode must be a valid positive number.');
      return;
    }

    updateCompany({
      ...value,
      FormFile: image,
      EstablishedYear: dayjs(value?.EstablishedYear).year(),
      OrganizationCode: orgCode,
      UpdateImage: image == null && path != null ? true : false,
      Status: true,
    });
  };

  const { data: companyData, refetch: refetchCompanyData } = useQueryApiClient({
    request: {
      url: '/api/organization',
      method: 'GET',
    },
    onSuccess(response) {
      setImportUserData(false);
    },
  });

  const { refetch: getProfile } = useQueryApiClient({
    request: {
      url: '/api/organization/profile',
      method: 'GET',
      disableOnMount: true,
    },
    onSuccess(response) {
      form.setFieldsValue({
        Name: response?.data?.name,
        LastName: response?.data?.lastName,
        Email: response?.data?.email,
        PhoneNumber: response?.data?.phoneNumber,
        PersonJob: response?.data?.personJob,
      });
    },
  });

  useEffect(() => {
    setDescription(description);
    setTitle(companyData?.data?.organizationName ?? '');
    const formattedDate = companyData?.data?.establishedYear
      ? dayjs(`${companyData?.data?.establishedYear}-01-01`)
      : null;
    const industryIds = companyData?.data?.industriys?.map((industry: any) => industry.id);
    const countryIds = companyData?.data?.operatingCountries?.map((country: any) => country.id);

    form.setFieldsValue({
      OrganizationName: companyData?.data?.organizationName,
      CountryId: companyData?.data?.organizationRegistered?.id,
      EstablishedYear: formattedDate,
      EmployeesCount: companyData?.data?.employessCount,
      CompanyWebPage: companyData?.data?.organizationWebPage,
      PersonJob: companyData?.data?.organizationsDetail?.personJob,
      OrganizationAddress: companyData?.data?.organizationsDetail?.organizationAddress,
      OrganizationCode: companyData?.data?.organizationsDetail?.organizationCode,
      IndustryId: industryIds,
      OperatingCountriesId: countryIds,
      Name: companyData?.data?.organizationsDetail?.name,
      LastName: companyData?.data?.organizationsDetail?.lastName,
      Email: companyData?.data?.organizationsDetail?.email,
      PhoneNumber: companyData?.data?.organizationsDetail?.phoneNumber,
      ZipCode: companyData?.data?.organizationsDetail?.zipCode,
      Description: companyData?.data?.description,
      companyVAT: companyData?.data?.organizationsDetail?.companyVAT,
    });
    if (companyData?.data?.image !== null) {
      setPath(companyData?.data?.image?.path);
    }
  }, [companyData]);

  useEffect(() => {
    if (importUserData) {
      getProfile();
    }
  }, [importUserData]);

  return (
    <StyledMyCompanyPage className="container">
      <div className="title-container">
        <h1 className="title">
          {title}&nbsp;<span className="small-text">{intl.formatMessage({ id: 'description' })}</span>&nbsp;
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
        {locations.pathname.includes('/admin/view-partner') && (
          <Button
            className="edit-btn"
            icon={<SvgSelector id="edit" />}
            onClick={() => navigate('/admin/edit-partner/')}
          />
        )}
      </div>
      <Form form={form} labelAlign="right" layout="vertical" onFinish={submit}>
        <ActionForm
          disable={disable}
          path={path}
          setPath={setPath}
          updateCompanyLoading={updateCompanyLoading}
          form={form}
          image={image}
          setImage={setImage}
          description={description}
          setDescription={setDescription}
          setImportUserData={setImportUserData}
          importUserData={importUserData}
        />
      </Form>
    </StyledMyCompanyPage>
  );
}
