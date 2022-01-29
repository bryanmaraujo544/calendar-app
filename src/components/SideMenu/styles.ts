import styled from 'styled-components';

interface ItemProps {
  isActive?: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 32px;
  width: 100%;
  max-width: 250px;
  min-height: 100vh;
  background: #fff;
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
      width: 3rem;
      height: 3rem;
      padding: .6rem;
      background: #FFEBEB;
      border-radius: .6rem;

      .icon {
        width: 100%;
        height: 100%;
        color: #FF1F1F;
      }
    }

    .text {
      font-weight: 700;
      font-size: 1.2rem;
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
      background: ${({ isActive }) => isActive ? '#1F87FF' : '#E9ECEF' };
      border-radius: .7rem;

      .icon {
        width: 100%;
        height: 100%;
        color: ${({ isActive }) => isActive ? '#fff' : '#6C757D'};
      }
    }

    .text {
      font-weight: 700;
      font-size: 1.2rem;
      color: #001329;
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
`;
