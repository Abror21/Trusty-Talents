import SvgSelector from 'assets/icons/SvgSelector';
import React from 'react';
import { useIntl } from 'react-intl';
import { Button, Table } from 'ui';

export function CompanyList({ companyData, isLoading }: any) {
  const intl = useIntl();

  const column = [
    {
      title: intl.messages.companyCode && intl.formatMessage({ id: 'your_company' }),
      dataIndex: 'organizationName',
      key: 'organizationName',
      render: (_: any, record: any) => record?.organization?.organizationName,
    },
    {
      title: intl.messages.companyCode && intl.formatMessage({ id: 'role' }),
      dataIndex: 'role',
      key: 'role',
      render: (_: any, record: any) => record?.role?.name,
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: () => <Button type="text" icon={<SvgSelector className="trash-svg" id="trash" />} danger />,
    },
  ];

  return (
    <div className="table">
      <Table columns={column} dataSource={companyData} />
    </div>
  );
}
