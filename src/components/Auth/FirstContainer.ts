import styled from 'styled-components';

export const FirstContainer = styled.section`
  background: ${({ theme }) => theme.blue.main[200]};
  padding: 6.4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 468px) {
    padding: 4.8rem 3.2rem;
  }

  @media (max-width: 568px) {
    align-items: center;
  }

  .title {
    font-size: 4.2rem;
    color: ${({ theme }) => theme.white};
    line-height: 1.3;

    @media (max-width: 568px) {
      text-align: center;
    }
  }

  .subtitle {
    color: ${({ theme }) => theme.gray[300]};
    font-weight: 500;
    margin-top: .4rem;
    font-size: 1.6rem;

    a {
      color: ${({ theme }) => theme.blue.text};
      font-weight: 700;
    }
  }

  img {
    width: 100%;
    max-width: 500px;
    margin-top: 4.8rem;

    @media (max-width: 568px) {
      display: none;
    }
  }
`;
