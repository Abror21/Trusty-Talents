import styled from 'styled-components';

export const StyledForEmployersHeader = styled.div`
  background-color: var(--dark-green);
  padding: 10px 0;
  .foremployers-header {
    display: flex;
    gap: 30px;
    color: var(--white);
    font-size: 1.2rem;
    a.active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;
