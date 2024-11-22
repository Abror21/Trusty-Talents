import { Form } from 'antd';
import React from 'react';
import { useIntl } from 'react-intl';
import { Input, Select, SelectOption } from 'ui';
import useQueryApiClient from 'utils/useQueryApiClient';
import { StyledCVHubFilter } from './style';
import { routes } from 'config/config';

type Props = {
  handleFormChange: (changedValues: any, allValues: any) => void;
};

export function CvHubFilter({ handleFormChange }: Props) {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { data: desiredPositionData, isLoading: desiredPositionLoading } = useQueryApiClient({
    request: {
      url: `${routes.api.myCareerBackendUrl}/api/desired-position`,
      method: 'GET',
    },
  });

  const { data: skillData, isLoading: skillLoading } = useQueryApiClient({
    request: {
      url: '/api/skill',
      method: 'GET',
    },
  });

  const { data: countryData, isLoading: countryLoading } = useQueryApiClient({
    request: {
      url: '/api/country',
      method: 'GET',
    },
  });

  const { data: languageData, isLoading: isLanguageLoading } = useQueryApiClient({
    request: { url: '/api/language', method: 'GET' },
  });

  return (
    <Form
      form={form}
      name="myForm"
      className="admin-seachr-form"
      onValuesChange={handleFormChange}
      initialValues={{ status: 'active' }}
    >
      <StyledCVHubFilter>
        <div className="key_word_input">
          <Input placeholder={intl.formatMessage({ id: 'enter_key_words' })} />
        </div>
        <div className="form-select">
          <Select
            name="SkillIds"
            placeholder={intl.messages.addSkillsPlaceholder && intl.formatMessage({ id: 'addSkillsPlaceholder' })}
            loading={skillLoading}
            mode="multiple"
            allowClear={true}
          >
            {skillData?.data?.map((option: any) => {
              return (
                <SelectOption key={option?.id} value={option?.id}>
                  {option?.content}
                </SelectOption>
              );
            })}
          </Select>
        </div>

        <div className="form-select">
          <Select
            placeholder={
              intl.messages.AddLanguageSelectPlaceholder && intl.formatMessage({ id: 'AddLanguageSelectPlaceholder' })
            }
            name="LanguageIds"
            loading={isLanguageLoading}
            mode="multiple"
            allowClear={true}
          >
            {languageData?.data?.map((option: any) => {
              return (
                <SelectOption key={option.id} value={option.id}>
                  {option.name}
                </SelectOption>
              );
            })}
          </Select>
        </div>
        <div className="form-select">
          <Select
            name="CountryId"
            placeholder={
              intl.messages.personalDetailCountryPlaceholder &&
              intl.formatMessage({ id: 'personalDetailCountryPlaceholder' })
            }
            loading={countryLoading}
            allowClear={true}
          >
            {countryData?.data?.map((option: any) => {
              return (
                <SelectOption key={option.id} value={option.id}>
                  {option.name}
                </SelectOption>
              );
            })}
          </Select>
        </div>

        <div className="form-select">
          <Select
            name="DesiredPositionId"
            placeholder={
              intl.messages.personalDesiredPositionPlaceholder &&
              intl.formatMessage({ id: 'personalDesiredPositionPlaceholder' })
            }
            loading={desiredPositionLoading}
            allowClear={true}
          >
            {desiredPositionData?.data?.map((option: any) => (
              <SelectOption key={option.id} value={option.id}>
                {option.name}
              </SelectOption>
            ))}
          </Select>
        </div>
      </StyledCVHubFilter>
    </Form>
  );
}
