import { styled } from 'styled-components';

export const StyledCandidateBoardPage = styled.div`
  .kanban-board {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 20px;
  }

  .line {
    background: var(--gray);
    height: 2px;
    margin-bottom: 10px;
  }

  .column {
    background: #f4f5f7;
    min-height: 630px;
    border-radius: 5px;
    padding: 10px;
    width: 100%;

    h3 {
      span {
        font-weight: 700;
      }
    }
  }

  .candidate-card {
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .candidate-list {
    height: 100%;
  }
  .empty-box {
    min-height: 560px;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .unsuitable {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 30px 0 40px 0;
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 10px;
      fill: white;
      p {
        color: white;
        border-bottom: 1px solid white;
      }
    }
  }
`;
