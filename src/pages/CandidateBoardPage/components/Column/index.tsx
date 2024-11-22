import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { CandidateCard } from '../CandidateCard';
import { useIntl } from 'react-intl';
import { Empty } from 'antd';

interface ColumnProps {
  title: string;
  candidates: Array<{
    id: string;
    name: string;
    compliance: string;
    statusDate: string;
  }>;
  columnId: string;
  count: number;
}

export const Column: React.FC<ColumnProps> = ({ title, candidates, columnId, count }) => {
  const intl = useIntl();
  return (
    <div className="column">
      <h3>
        {intl.formatMessage({ id: 'status' })}:
        <span>
          &nbsp;{title}&nbsp;{count}
        </span>
      </h3>
      <hr className="line" />
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div className="candidate-list" ref={provided.innerRef} {...provided.droppableProps}>
            {count > 0 ? (
              candidates.map((candidate, index) => (
                <CandidateCard key={candidate.id} candidate={candidate} index={index} />
              ))
            ) : (
              <div className="empty-box">
                <Empty />
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
