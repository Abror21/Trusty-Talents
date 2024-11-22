import React, { useState } from 'react';
import { Form, message } from 'antd';
import { useIntl } from 'react-intl';
import { useForm } from 'antd/lib/form/Form';

import { Input, Button, Checkbox, SelectOption, Select, DatePicker } from 'ui';
import { emailRegex, checkEmail, validateNumber, validateEmail, validateName } from 'utils/globalFunctions';
import { employees } from 'utils/consts';
import dayjs from 'dayjs';
import useQueryApiClient from 'utils/useQueryApiClient';
import { StyledSingUpForm } from './style';

type FormValues = {
  email: string;
  name?: string;
};

type SignUpEmailStepProps = {
  onFinish: (values: FormValues) => void;
};

export const SignUpEmailStep = ({ onFinish }: SignUpEmailStepProps) => {
  const [accept, setAccept] = useState<boolean>(false);
  const [year, setYear] = useState<number | null>(null);

  const intl = useIntl();
  const [form] = useForm();

  const handleChange = (date: any) => {
    const currentYear = new Date().getFullYear();
    const selectedYear = date.year();
    if (selectedYear < 1900 || selectedYear > currentYear) {
      message.error(`Please enter a valid year between 1900 and ${currentYear}`);
      setYear(null);
    } else {
      setYear(selectedYear);
    }
  };

  const { isLoading: isLoadingCountry, data: countryData } = useQueryApiClient({
    request: {
      url: '/api/country',
      method: 'GET',
    },
  });

  return (
    <StyledSingUpForm>
      <Form onFinish={onFinish} className="form" layout="vertical" form={form}>
        <div className="form_content">
          <div className="form_flex_item">
            <Input
              name="firstName"
              label={intl.formatMessage({ id: 'name' })}
              rules={[
                {
                  required: true,
                  message:
                    intl.messages.personalDetailNumberError && intl.formatMessage({ id: 'company_name_required' }),
                },
                { validator: (_, value) => validateName(intl, value) },
              ]}
            />
          </div>
          <div className="form_flex_item">
            <Input
              name="lastName"
              label={intl.formatMessage({ id: 'surname' })}
              rules={[
                {
                  required: true,
                  message:
                    intl.messages.personalDetailNumberError && intl.formatMessage({ id: 'company_name_required' }),
                },
                { validator: (_, value) => validateName(intl, value) },
              ]}
            />
          </div>
        </div>

        <div className="form_content">
          <div className="form_item">
            <Input
              name="position"
              label={intl.formatMessage({ id: 'position' })}
              rules={[
                {
                  required: true,
                  message: intl.messages.company_name_required && intl.formatMessage({ id: 'company_name_required' }),
                },
              ]}
            />
          </div>
        </div>

        <div className="form_content">
          <div className="form_flex_item">
            <Input
              name="email"
              maxLength={50}
              rules={[
                {
                  required: true,
                  message:
                    intl.messages.personalDetailEamilError && intl.formatMessage({ id: 'personalDetailEamilError' }),
                },
                { validator: (_, value) => validateEmail(intl, value) },
              ]}
              label={intl.formatMessage({ id: 'sign_up_email' })}
            />
          </div>
          <div className="form_flex_item">
            <Input
              name="companyCode"
              label={intl.formatMessage({ id: 'company_code' })}
              rules={[
                {
                  required: true,
                  message: intl.messages.company_name_required && intl.formatMessage({ id: 'company_name_required' }),
                },
                { validator: (_, value) => validateNumber(intl, value) },
              ]}
            />
          </div>
        </div>

        <div className="form_content">
          <div className="form_item">
            <Input
              name="companyName"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'company_name_required' }),
                },
              ]}
              label={intl.formatMessage({ id: 'company_name' })}
            />
          </div>
        </div>

        <div className="form-footer">
          <div className="form_content">
            <div className="form_flex_item">
              <Input
                name="companyVAT"
                label={intl.formatMessage({ id: 'company_vat_number' })}
              />
            </div>
            <div className="form_flex_item">
              <Select
                name="countryId"
                loading={isLoadingCountry}
                label={intl.formatMessage({ id: 'company_country' })}
                rules={[
                  {
                    required: true,
                    message: intl.messages.company_name_required && intl.formatMessage({ id: 'company_name_required' }),
                  },
                ]}
              >
                {countryData?.data?.map((item: any, index: number) => {
                  return (
                    <SelectOption value={item.id} key={index}>
                      {item.name}
                    </SelectOption>
                  );
                })}
              </Select>
            </div>
          </div>

          <div className="form_content">
            <div className="form_flex_item">
              <DatePicker
                name="establishedYear"
                label={intl.formatMessage({ id: 'company_estabilshed' })}
                className="date-picker"
                picker="year"
                value={year ? dayjs(`${year}`, 'YYYY') : null}
                onChange={handleChange}
                placeholder="Select a year"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({ id: 'company_name_required' }),
                  },
                ]}
              />
            </div>
            <div className="form_flex_item">
              <Select
                name="employessCount"
                label={intl.formatMessage({ id: 'employes_number' })}
                rules={[
                  {
                    required: true,
                    message: intl.messages.company_name_required && intl.formatMessage({ id: 'company_name_required' }),
                  },
                ]}
              >
                {employees?.map((item: any, index: number) => {
                  return (
                    <SelectOption value={item?.count} key={index}>
                      {item?.count}
                    </SelectOption>
                  );
                })}
              </Select>
            </div>
          </div>

          <div className="form_content accept-container">
            <Checkbox checked={accept} onChange={(e) => setAccept(!accept)} />
            <p
              dangerouslySetInnerHTML={{
                __html: intl.messages.create_company_confirm
                  ? intl.formatMessage({ id: 'create_company_confirm' })
                  : '',
              }}
            ></p>
          </div>

          <div className="form_content btn_container">
            <Button
              type="primary"
              disabled={!accept}
              htmlType="submit"
              className={`submit-btn btn submit-btn primary-btn`}
              label={intl.formatMessage({ id: 'submit' })}
            />
          </div>
        </div>
      </Form>
    </StyledSingUpForm>
  );
};
