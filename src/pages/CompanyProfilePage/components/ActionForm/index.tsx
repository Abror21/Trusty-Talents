import React from 'react';
import { Input } from 'ui';
import { useIntl } from 'react-intl';
import { validateEmail, validateName, validatePhoneNumber } from 'utils/globalFunctions';
import { Form } from 'antd';

export function ActionForm({ disable }: any) {
  const intl = useIntl();
  return (
    <>
      <div className="flex">
        <div className="input">
          <Input
            label={intl.formatMessage({ id: 'name' })}
            disabled={disable}
            name="FirstName"
            rules={[
              {
                required: true,
                message: intl.messages.company_name_required && intl.formatMessage({ id: 'company_name_required' }),
              },
              { validator: (_, value) => validateName(intl, value) },
            ]}
          />
        </div>
        <div className="input">
          <Input
            label={intl.formatMessage({ id: 'surname' })}
            name="LastName"
            disabled={disable}
            rules={[
              {
                required: true,
                message: intl.messages.company_name_required && intl.formatMessage({ id: 'company_name_required' }),
              },
              { validator: (_, value) => validateName(intl, value) },
            ]}
          />
        </div>
      </div>
      <div>
        <Input
          label={intl.formatMessage({ id: 'position' })}
          name="PersonJob"
          disabled={disable}
          rules={[
            {
              required: true,
              message: intl.messages.company_name_required && intl.formatMessage({ id: 'company_name_required' }),
            },
          ]}
        />
      </div>
      <div>
        <Input
          name="Email"
          maxLength={50}
          disabled={disable}
          rules={[
            {
              required: true,
              message: intl.messages.personalDetailEamilError && intl.formatMessage({ id: 'personalDetailEamilError' }),
            },
            { validator: (_, value) => validateEmail(intl, value) },
          ]}
          label={intl.formatMessage({ id: 'email' })}
        />
      </div>
      <div className="flex">
        <div className="input">
          <Input
            label={intl.formatMessage({ id: 'contact_phone' })}
            name="PhoneNumber"
            disabled={disable}
            rules={[
              {
                message:
                  intl.messages.personalDetailNumberError && intl.formatMessage({ id: 'personalDetailNumberError' }),
              },
              { validator: (_, value) => validatePhoneNumber(intl, value) },
            ]}
          />
        </div>
        <div className="input"></div>
      </div>
    </>
  );
}
