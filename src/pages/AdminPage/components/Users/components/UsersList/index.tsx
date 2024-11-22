import React, { useState } from 'react';
import { StyledUsersList } from './style';
import { Button, Table } from 'ui';
import { useIntl } from 'react-intl';
import dayjs from 'dayjs';
import Tooltip from 'antd/lib/tooltip';
import SvgSelector from 'assets/icons/SvgSelector';
import { useNavigate } from 'react-router-dom';

type props = {
  users: any;
  usersLoading: boolean;
  totalItems: number | undefined;
};

export function UsersList({ users, usersLoading, totalItems }: props) {
  const intl = useIntl();
  const navigate = useNavigate();

  const columns = [
    {
      title: intl.messages.last_update && intl.formatMessage({ id: 'last_update' }),
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (updatedAt: any) => dayjs(updatedAt).format('DD.MM.YYYY'),
      sorter: (a: any, b: any) => {
        const aValue = a?.updatedAt || '';
        const bValue = b.updatedAt || '';
        return aValue?.toLowerCase().localeCompare(bValue.toLowerCase());
      },
    },
    {
      title: intl.messages.last_update && intl.formatMessage({ id: 'company_name' }),
      dataIndex: 'companyName',
      key: 'companyName',
      sorter: (a: any, b: any) => {
        const aValue = a?.updatedAt || '';
        const bValue = b.updatedAt || '';
        return aValue?.toLowerCase().localeCompare(bValue.toLowerCase());
      },
    },
    {
      title: intl.messages.last_update && intl.formatMessage({ id: 'user_email' }),
      dataIndex: 'userEmail',
      key: 'userEmail',
    },
    {
      title: intl.messages.last_update && intl.formatMessage({ id: 'user_name' }),
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: intl.messages.last_update && intl.formatMessage({ id: 'user_surname' }),
      dataIndex: 'userSurname',
      key: 'userSurname',
    },
    {
      title: intl.messages.last_update && intl.formatMessage({ id: 'user_role' }),
      dataIndex: 'userRole',
      key: 'userRole',
    },
    {
      title: intl.messages.action && intl.formatMessage({ id: 'action' }),
      dataIndex: 'status',
      key: 'action',
      render: (status: any, record: any) => (
        <div className="table-action">
          <Tooltip
            color="#ffffff"
            style={{ color: 'black' }}
            placement="bottom"
            title={<span style={{ color: 'var(--black)' }}>{intl.formatMessage({ id: 'view' })}</span>}
            trigger={'hover'}
          >
            <div>
              <SvgSelector id="view" className="view-svg" />
            </div>
          </Tooltip>
          <Tooltip
            color="#ffffff"
            style={{ color: 'black' }}
            placement="bottom"
            title={<span style={{ color: 'var(--black)' }}>{intl.formatMessage({ id: 'edit' })}</span>}
            trigger={'hover'}
          >
            <div>
              <SvgSelector className="edit-svg" id="edit" />
            </div>
          </Tooltip>
          <Tooltip
            color="#ffffff"
            style={{ color: 'black' }}
            placement="bottom"
            title={
              <span style={{ color: 'var(--black)' }}>
                {status ? intl.formatMessage({ id: 'hide' }) : intl.formatMessage({ id: 'show' })}
              </span>
            }
            trigger={'hover'}
          >
            <div>{status ? <SvgSelector id="person" /> : <SvgSelector id="person-slash" />}</div>
          </Tooltip>
          <Tooltip
            color="#ffffff"
            style={{ color: 'black' }}
            placement="bottom"
            title={<span style={{ color: 'var(--black)' }}>{intl.formatMessage({ id: 'delete' })}</span>}
            trigger={'hover'}
          >
            <div>
              <SvgSelector className="trash-svg" id="trash" />
            </div>
          </Tooltip>
        </div>
      ),
    },
  ];

  //{fake data}

  const data = [
    {
      key: '1',
      updatedAt: '2022-01-01',
      companyName: 'Company 1',
      userEmail: 'user1@example.com',
      userName: 'John Doe',
      userSurname: 'Smith',
      userRole: 'Admin',
    },
  ];

  return (
    <StyledUsersList>
      <div className="add-user">
        <div>
          {totalItems !== undefined && (
            <h4 className="total">
              {intl.formatMessage({ id: 'total' })}&nbsp;{totalItems}
            </h4>
          )}
        </div>

        <Button
          onClick={() => navigate('/admin/users/add-users')}
          label={intl.formatMessage({ id: 'add_user' })}
          className="btn"
        />
      </div>
      <div>
        <Table loading={usersLoading} columns={columns} dataSource={data} />
      </div>
    </StyledUsersList>
  );
}
