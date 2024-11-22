import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { StyledCandidateCard } from './style';
import { useIntl } from 'react-intl';
import { Dropdown } from 'antd';
import { Button } from 'ui';
import SvgSelector from 'assets/icons/SvgSelector';

interface CandidateCardProps {
  candidate: {
    id: string;
    name: string;
    compliance: string;
    statusDate: string;
  };
  index: number;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, index }) => {
  const intl = useIntl();

  const createMenuForRecord = () => {
    return {
      items: [
        {
          key: 'view_cv',
          label: intl.formatMessage({ id: 'view_cv' }),
        },
        {
          key: 'download_cv',
          label: intl.formatMessage({ id: 'download_cv' }),
        },
        {
          key: 'change_status',
          label: intl.formatMessage({ id: 'change_status' }),
        },
        {
          key: 'messaging',
          label: intl.formatMessage({ id: 'messaging' }),
        },
      ],
    };
  };

  return (
    <Draggable draggableId={candidate.id} index={index}>
      {(provided: any) => (
        <StyledCandidateCard>
          <div
            className="candidate-card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <p>
                <strong>{candidate.name}</strong>
              </p>
              <p>
                {intl.formatMessage({ id: 'compliance' })}:&nbsp;{candidate.compliance}
              </p>
              <p>
                {intl.formatMessage({ id: 'statusDate' })}:&nbsp;{candidate.statusDate}
              </p>
            </div>
            <div>
              <Dropdown menu={createMenuForRecord()} trigger={['click']}>
                <Button className="action-btn" icon={<SvgSelector id="menu" />} />
              </Dropdown>
            </div>
          </div>
        </StyledCandidateCard>
      )}
    </Draggable>
  );
};
