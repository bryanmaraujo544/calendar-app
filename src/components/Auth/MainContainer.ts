import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;
