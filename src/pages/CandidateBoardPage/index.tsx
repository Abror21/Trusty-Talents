import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import { StyledCandidateBoardPage } from './style';
import SvgSelector from 'assets/icons/SvgSelector';
import { BackButton } from 'ui';
import { useNavigate } from 'react-router-dom';

export function CandidateBoard() {
  const navigate = useNavigate();
  return (
    <div className="page-placeholder">
      <StyledCandidateBoardPage className="page-placeholder-container">
        <BackButton onClick={() => navigate(-1)} color="white" label="Back" />
        <KanbanBoard />

        <div className="unsuitable">
          <div>
            <SvgSelector id="trash" />
            <p>Unsuitable</p>
          </div>
        </div>
      </StyledCandidateBoardPage>
    </div>
  );
}
