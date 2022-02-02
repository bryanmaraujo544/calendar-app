import styled from 'styled-components';

export const FirstContainer = styled.section`
  background: #1F87FF;
  padding: 6.4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 1380px) {
    justify-content: center;
  }

  @media (max-width: 468px) {
    padding: 4.8rem 3.2rem;
  }

  @media (max-width: 568px) {
    align-items: center;
  }

  .title {
    font-size: 4.2rem;
    color: #fff;
    line-height: 1.3;
    max-width: 490px;

    @media (max-width: 568px) {
      text-align: center;
    }

  }

  .subtitle {
    color: #CED4DA;
    font-weight: 500;
    margin-top: .4rem;
    font-size: 1.6rem;

    a {
      color: #001329;
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
