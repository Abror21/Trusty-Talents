import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Avatar, Form } from 'antd';
import { useIntl } from 'react-intl';

import { StyledUserProfileBadge } from './style';
import useJwt from 'utils/useJwt';
import { useUserDispatch, useUserState } from 'contexts/UserContext';
import { routes } from 'config/config';
import SvgSelector from '../../assets/icons/SvgSelector';
import { Button, Select, SelectOption } from 'ui';
import useQueryApiClient from 'utils/useQueryApiClient';

type UserProfileBadgeProps = {
  onClick?: () => void;
};

export const UserProfileBadge = ({ onClick }: UserProfileBadgeProps) => {
  const intl = useIntl();
  const { remove, set } = useJwt();
  const { dispatch: userDispatch } = useUserDispatch();
  const { image } = useUserState();
  const location = useLocation();
  const params = useParams();
  const [form] = Form.useForm();
  const [id, setId] = useState<number | null>(null);

  const logoutHandler = () => {
    remove();
    userDispatch({
      type: 'SET_USER_DATA',
      payload: {
        email: '',
        id: 0,
        image: '',
      },
    });
    localStorage.clear();
  };

  const { data, isLoading } = useQueryApiClient({
    request: {
      url: '/api/organization/all-organizations-by-user',
      method: 'GET',
    },
    onSuccess(response) {
      const organizationId = response?.data?.find((item: any) => item?.isCurrent)?.organizationId ?? null;
      form.setFieldValue('OrganizationId', organizationId);
    },
  });

  const { refetch } = useQueryApiClient({
    request: {
      url: `/api/organization/post-current-organization?organizationId=${id}`,
      method: 'POST',
    },
    onSuccess(response) {
      set(response.data, 86400);
      window.location.reload();
    },
  });

  const handleChange = (value: any) => {
    setId(value.OrganizationId);
  };

  useEffect(() => {
    if (id !== null) {
      refetch();
    }
  }, [id]);

  return (
    <StyledUserProfileBadge>
      <div className="user-badge-inner">
        <div className="select">
          <Form form={form} name="myForm" className="modal-form" onValuesChange={handleChange}>
            <Select name={'OrganizationId'} loading={isLoading}>
              {data?.data?.map((item: any, index: number) => {
                return (
                  <SelectOption key={index} value={item?.organizationId}>
                    {item?.organizationName}
                  </SelectOption>
                );
              })}
            </Select>
          </Form>
        </div>
        {location.pathname !== '/admin' && location.pathname !== `/admin/cv/${params?.id}` && (
          <Link to={'/for-employers/profile'} onClick={onClick}>
            {image ? (
              <Avatar size={70} src={`${routes.api.baseUrl}/${image}`} />
            ) : (
              <div className="user-badge-avatar">
                <Avatar icon={<SvgSelector className="avatar-icon" id="avatar-icon" />} />
              </div>
            )}
          </Link>
        )}
        <Button
          className="logout-btn btn"
          onClick={logoutHandler}
          type="primary"
          label={intl.formatMessage({ id: 'logout' })}
        />
      </div>
    </StyledUserProfileBadge>
  );
};
