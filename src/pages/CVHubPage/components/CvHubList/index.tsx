import SvgSelector from 'assets/icons/SvgSelector';
import React from 'react';
import { useIntl } from 'react-intl';
import { Table } from 'ui';

interface props {
  isLoading: boolean;
  totalItems: number | undefined;
  data: any;
  setActionModal: any;
}

export function CvHubList({ isLoading, totalItems, data, setActionModal }: props) {
  const intl = useIntl();

  const column = [
    {
      title: intl.messages.company_name && intl.formatMessage({ id: 'candidateId_or_name' }),
      dataIndex: 'id',
      key: 'id',
      render: (id: any, record: any) => <>TT&nbsp;{id}</>,
    },
    {
      title: intl.messages.company_name && intl.formatMessage({ id: 'skills' }),
      dataIndex: 'skills',
      key: 'skills',
      render: (skills: any) => (
        <div className="skill-column">
          {skills.map((skill: any) => (
            <div className="skill-column-item" key={skill.id}>
              {skill.verified && <SvgSelector id="addverified" />}
              <span> {skill.skill.content}</span>,
            </div>
          ))}
        </div>
      ),
    },
    {
      title: intl.messages.company_name && intl.formatMessage({ id: 'desired_position' }),
      dataIndex: ['desiredPosition', 'name'],
      key: 'desiredPosition',
    },
    {
      title: intl.messages.company_name && intl.formatMessage({ id: 'languages' }),
      dataIndex: 'languages',
      key: 'languages',
      render: (lang: any) => (
        <div className="skill-column">
          {lang?.map((lang: any) => (
            <div className="skill-column-item" key={lang?.id}>
              <span> {lang?.language?.name}</span>,
            </div>
          ))}
        </div>
      ),
    },
    {
      title: intl.messages.company_name && intl.formatMessage({ id: 'country' }),
      dataIndex: ['address', 'country', 'name'],
      key: 'country',
    },
    {
      title: intl.messages.company_name && intl.formatMessage({ id: 'experience' }),
      dataIndex: 'jobExperience',
      key: 'jobExperience',
      render: (_: any, record: any) => (
        <>{record?.jobExperience && intl.formatMessage({ id: record?.jobExperience })}</>
      ),
    },
    {
      title: intl.messages.company_name && intl.formatMessage({ id: 'action' }),
      dataIndex: 'email',
      key: 'email',
      render: (_: any, record: any) => (
        <div className="action-column">
          <span>
            <SvgSelector id="save-svg" />
          </span>
          <span onClick={() => setActionModal({ open: true, userId: record.id, actionType: 'request' })}>
            <SvgSelector id="add-request" />
          </span>
          <span onClick={() => setActionModal({ open: true, userId: record.id, actionType: 'share' })}>
            <SvgSelector id="share" />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      {totalItems !== undefined && (
        <h4 className="total">
          {intl.formatMessage({ id: 'available_cv' })}&nbsp;{totalItems}
        </h4>
      )}
      <Table columns={column} dataSource={data} loading={isLoading} />
    </div>
  );
}
