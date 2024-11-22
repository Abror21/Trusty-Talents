import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Column } from '../Column';

const initialData = {
  columns: {
    new: {
      title: 'New',
      candidates: [
        { id: '1', name: 'Candidate ID #1', compliance: '70%', statusDate: '12.11.2024' },
        { id: '6', name: 'Candidate ID #4', compliance: '70%', statusDate: '12.11.2024' },
        { id: '7', name: 'Candidate ID #4', compliance: '70%', statusDate: '12.11.2024' },
        { id: '8', name: 'Candidate ID #4', compliance: '70%', statusDate: '12.11.2024' },
        { id: '9', name: 'Candidate ID #4', compliance: '70%', statusDate: '12.11.2024' },
      ],
    },
    evaluation: {
      title: 'Evaluation',
      candidates: [{ id: '3', name: 'Candidate ID #54', compliance: '70%', statusDate: '01.11.2024' }],
    },
    finalist: {
      title: 'Finalist',
      candidates: [{ id: '4', name: 'Candidate ID #99', compliance: '90%', statusDate: '12.11.2024' }],
    },
    hired: {
      title: 'Hired',
      candidates: [{ id: '5', name: 'Candidate ID #125', compliance: '95%', statusDate: '14.11.2024' }],
    },
  },
};

const KanbanBoard: React.FC = () => {
  const [data, setData] = useState<any>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = data?.columns[source.droppableId];
    const destinationColumn = data?.columns[destination.droppableId];
    const [movedCandidate] = sourceColumn.candidates.splice(source.index, 1);

    destinationColumn.candidates.splice(destination.index, 0, movedCandidate);

    setData({
      ...data,
      columns: {
        ...data.columns,
        [source.droppableId]: sourceColumn,
        [destination.droppableId]: destinationColumn,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {Object.entries(data.columns).map(([columnId, columnData]: any) => (
          <Column
            key={columnId}
            columnId={columnId}
            title={columnData?.title}
            count={columnData?.candidates?.length}
            candidates={columnData?.candidates}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
