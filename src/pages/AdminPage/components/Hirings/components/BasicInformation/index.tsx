import React, { useEffect, useState } from 'react';
import { StyledBasicInformation } from './style';
import { Checkbox, Input, Select, SelectOption } from 'ui';
import { Form } from 'antd';
import { useIntl } from 'react-intl';
import useQueryApiClient from 'utils/useQueryApiClient';
import { VscTriangleUp } from "react-icons/vsc";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import BasicInformationFields from './components/BasicInformationFields';

const initialValue = {
  CompanyId: null,
};

export function BasicInformation({
  requestFields,
  form,
  setPath,
  disable,
  hiringImage,
  handleDelete,
  handleCopyChange,
  setRequestFields,
  numberOfCandidates,
  setNumberOfCandidates
}: any) {

  const int = useIntl();
  const [query, setQuery] = useState<any>(initialValue);
  const [isCandidatesChecked, setIsCandidatesChecked] = useState(false);
  // const [numberOfCandidates, setNumberOfCandidates] = useState(1);

  const { isLoading: loadingOrganization, data: organizations } = useQueryApiClient({
    request: {
      url: '/api/organization/name',
      method: 'GET',
    },
  });

  const {
    isLoading: loadingOrganizationCode,
    data: organizationCodeData,
    appendData,
  } = useQueryApiClient({
    request: {
      url: '/api/manage-cabinets/filter/organization-name',
      method: 'GET',
      disableOnMount: true,
    },
    onSuccess(res) {
      form.setFieldsValue({ companyCode: res?.data[0]?.organizationCode });
      if (hiringImage) appendImageData({ code: res?.data[0]?.organizationCode });
    },
  });

  const { isLoading: loadingSalary, data: hiringSalaryData } = useQueryApiClient({
    request: {
      url: '/api/hirings/salary-period',
      method: 'GET',
    },
  });

  const { isLoading: loadingContactDuration, data: contactDuration } = useQueryApiClient({
    request: {
      url: '/api/hirings/contract-duration',
      method: 'GET',
    },
  });
  const { isLoading: loadingemploymentType, data: employmentTypeData } = useQueryApiClient({
    request: {
      url: '/api/hirings/employment-type',
      method: 'GET',
    },
  });
  const { isLoading: loadingJobLocation, data: jobLocationData } = useQueryApiClient({
    request: {
      url: '/api/hirings/job-location',
      method: 'GET',
    },
  });

  const { refetch: refetchImage, appendData: appendImageData } = useQueryApiClient({
    request: {
      url: '/api/manage-cabinets/hirings/organization-image',
      method: 'GET',
      disableOnMount: true,
    },
    onSuccess: (response) => {
      setPath(response?.data?.path || '');
    },
  });

  useEffect(() => {
    if (query?.CompanyId) {
      appendData(query);
    }
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      setNumberOfCandidates(+inputValue);
    }
  };

  return (
    <StyledBasicInformation>
      <div className="basic-data">
        <div className='basic-data__check'>
          <Checkbox
            checked={isCandidatesChecked}
            onChange={() => {
              setNumberOfCandidates(1);
              setIsCandidatesChecked(!isCandidatesChecked);
            }}
          />
          Request a team of
          <Input
            value={`${numberOfCandidates}`}
            disabled={!isCandidatesChecked}
            onChange={handleChange}
            maxLength={3}
          />
          candidates
        </div>
        <div className='basic-data__content'>

          <Form.List name="basicInformation">
            {
              (fields, { add, remove }) => {
                return (
                  <div>
                    {
                      fields.map((field) => (
                        <BasicInformationFields
                          fields={fields}
                          add={add}
                          remove={remove}
                          field={field}
                          numberOfCandidates={numberOfCandidates}
                          loadingSalary={loadingSalary}
                          loadingJobLocation={loadingJobLocation}
                          loadingemploymentType={loadingemploymentType}
                          loadingContactDuration={loadingContactDuration}
                          hiringSalaryData={hiringSalaryData}
                          jobLocationData={jobLocationData}
                          employmentTypeData={employmentTypeData}
                          contactDuration={contactDuration}
                          handleDelete={handleDelete}
                          handleCopyChange={handleCopyChange}
                          setRequestFields={setRequestFields}
                        />
                      ))
                    }
                  </div>
                )
              }
            }
          </Form.List>
        </div>
      </div>
    </StyledBasicInformation>
  );
}
