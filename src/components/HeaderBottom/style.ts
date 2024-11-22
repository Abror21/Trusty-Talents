import styled from 'styled-components';

export const StyledHeaderBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 10px 30px;
  .header-bottom__logo {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 900;
    color: var(--dark-green);
  }
  .header-bottom__menu {
    color: var(--black);
    display: flex;
    gap: 30px;
    font-weight: 500;
    font-size: 1.3rem;
    a.active {
      text-decoration: underline;
    }
    @media (max-width: 1023px) {
      display: none;
    }
  }
  .header-bottom__authentication {
    display: none;
    @media screen and (min-width: 728px) {
      display: flex;
      gap: 30px;
      margin-left: auto;
    }
  }
  .burger-button {
    margin-left: auto;
  }
`;
