import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.2rem;

  .loading {
    height: 4.8rem;
    width: 4.8rem;
    color: red !important;
    margin: 3.2rem auto;
  }

  .alert-container {
    width: 100%;

    .alert-title {
      font-size: 2.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.blue.text};
    }

    .icon {
      color: ${({ theme }) => theme.blue.text};
      margin-top: .8rem;
      font-size: 4.8rem;
    }
  }

  .tasks-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;

    @media (max-width: 768px){
      grid-template-columns: 1fr;
    }
  }
`;
