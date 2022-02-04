import styled from 'styled-components';

interface ItemProps {
  isActive?: boolean
}

export const Overlay = styled.div`

  @media(max-width: 768px) {
    position: absolute;
    display: none;
    left: 0;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: #00000050;
    z-index: 15;

  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 3.2rem;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  z-index: 15;

  @media (max-width: 768px) {
    position: absolute;
    width: 250px;
    z-index: 10;
  }

  .close-icon {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 2.6rem;
    display: none;
    color: ${({ theme }) => theme.gray[500]};

    @media (max-width: 768px) {
      display: inline-block;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .main-items {
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    margin-top: 2.4rem;
  }

  .logout {
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon-container {
      width: 3.2rem;
      height: 3.2rem;
      padding: .5rem;
      background: ${({ theme }) => theme.red[100]};
      border-radius: .6rem;

      .icon {
        width: 100%;
        height: 100%;
        color: #FF1F1F;
      }
    }

    .text {
      font-weight: 700;
      font-size: 1.3rem;
      margin-left: .8rem;
      color: #FF1F1F;
    }
  }
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;


  .main-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon-container {
      width: 3.2rem;
      height: 3.2rem;
      padding: .7rem;
      background: ${({ isActive, theme }) => isActive ? '#1F87FF' : theme.gray[100] };
      border-radius: .7rem;

      .icon {
        width: 100%;
        height: 100%;
        color: ${({ isActive }) => isActive ? '#fff' : '#6C757D'};
      }
    }

    .text {
      font-weight: 700;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.blue.text};
    }
  }


  .dark-mode-container {
    width: 4rem;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    background: #DEE2E6;
    border-radius: 999px;
    padding: .4rem;

    .circle {
      height: 1.4rem;
      width: 1.4rem;
      background: #fff;
      border-radius: 999px;
    }
  }

  .tasks-amount {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.red[200]};
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.white};
  }
`;
