import React from 'react';
import { StyledUsersFilter } from './style';
import { Form } from 'antd';
import { useIntl } from 'react-intl';
import { Input, Select, SelectOption } from 'ui';
import useQueryApiClient from 'utils/useQueryApiClient';

export function UsersFilter({ handleChangeForm }: any) {
  const intl = useIntl();
  const [form] = Form.useForm();

  const { isLoading: isLoadingRoles, data: roles } = useQueryApiClient({
    request: {
      url: '/api/role/get-admin-and-intern-roles',
      method: 'GET',
    },
  });

  const { isLoading: isLoadingCompanyes, data: company } = useQueryApiClient({
    request: {
      url: '/api/organization/name',
      method: 'GET',
    },
  });

  return (
    <StyledUsersFilter>
      <Form labelAlign="right" layout="vertical" className="form-wrapper" form={form} onValuesChange={handleChangeForm}>
        <Input label={intl.formatMessage({ id: 'user' })} placeholder={intl.formatMessage({ id: 'enter_keywords' })} />
        <Select
          loading={isLoadingCompanyes}
          label={intl.formatMessage({ id: 'company' })}
          placeholder={intl.formatMessage({ id: 'select_company' })}
        >
          {company?.data?.map((company: any, index: number) => {
            return (
              <SelectOption key={index} value={company.id}>
                {company.name}
              </SelectOption>
            );
          })}
        </Select>
        <Select
          loading={isLoadingRoles}
          label={intl.formatMessage({ id: 'user_role' })}
          placeholder={intl.formatMessage({ id: 'select_role' })}
        >
          {roles?.data?.map((roles: any, index: number) => {
            return (
              <SelectOption key={index} value={roles.id}>
                {roles.name}
              </SelectOption>
            );
          })}
        </Select>
      </Form>
    </StyledUsersFilter>
  );
}
