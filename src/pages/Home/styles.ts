import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 25rem 1fr;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
`;

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3.2rem;
  padding-right: 3.2rem;
  /* width: 100%; */
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.gray[200]};
  overflow-y: scroll;
`;
