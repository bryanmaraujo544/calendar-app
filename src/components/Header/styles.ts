import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  .menu-icon {
    display: none;
    font-size: 3.6rem;
    margin-right: 1.6rem;
    height: 100%;
    color: ${({ theme }) => theme.gray[500]};

    @media(max-width: 768px) {
      display: inline-block;
    }

  }

  .profile-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    aspect-ratio: 1 / 1;
    background: red;
    border-radius: 1rem;
    background: ${({ theme }) => theme.gray[400]};
    box-shadow: 0 3px 3px ${({ theme }) => theme.shadow.sm};
    overflow: hidden;
    cursor: pointer;
    transition: all .2s ease;


    &:hover img {
      opacity: 0.5;
    }

    &:hover .edit-icon {
      transform: scale(1);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .2s ease;
    }

    .edit-icon {
      transform: scale(0);
      font-size: 2.6rem;
      color: ${({ theme }) => theme.blue.text};
      position: absolute;
      transition: all .2s ease;
      
    }
  }
`;
