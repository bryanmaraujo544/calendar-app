import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  background: ${({ theme }) => theme.white};
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 0 1.6rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.sm};

  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.gray[500]};
  }

  input {
    height: 100%;
    width: 100%;
    font-weight: 500;
    color: ${({ theme }) => theme.gray[500]};
    background: none;

    &::placeholder {
      color: ${({ theme }) => theme.gray[500]};
    }
  }
`;
