import { styled } from 'styled-components';

export const StyledHiringCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 180px;

  margin: 30px 0;

  .hiring-card-title {
    /* margin-bottom: 20px; */
  }

  .left-side,
  .rigth-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .rigth-side {
    align-items: end;
  }

  .svg-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 5px;

    span {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 15px;
    }

    svg {
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: var(--accent-color);
        fill: var(--accent-color);
      }
    }
  }

  .title-color {
    cursor: pointer;
    font-weight: 600;
    color: var(--base-color);
    span {
      color: var(--accent-color);
    }
  }
  .hiring-card-creator,
  .country {
    font-weight: 600;
  }
`;
