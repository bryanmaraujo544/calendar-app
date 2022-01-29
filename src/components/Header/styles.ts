import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  .profile-container {
    height: 100%;
    aspect-ratio: 1 / 1;
    background: red;
    border-radius: 1rem;
    background: ${({ theme }) => theme.gray[300]};
    box-shadow: 0 3px 3px ${({ theme }) => theme.shadow.sm};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
