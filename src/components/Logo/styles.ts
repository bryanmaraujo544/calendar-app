import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.2rem;

  img {
    width: 3.2rem;
    border-radius: .8rem;
  }

  p {
    font-weight: 700;
    font-size: 1.6rem;
    margin-left: .8rem;
    color: ${({ theme }) => theme.blue.text};
  }
`;
