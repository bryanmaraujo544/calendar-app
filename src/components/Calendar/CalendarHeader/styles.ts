import styled from 'styled-components';

export const Container = styled.header`
  grid-column: 1 / 8;
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.sm};

  @media(max-width: 468px) {
    padding: 1.6rem;
  }

  @media(max-width: 310px) {
    padding: 1.2rem;
  }

  .date-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    @media (max-width: 468px) {
      gap: 2.4rem;
    }

    @media (max-width: 310px) {
      gap: 1.6rem;
    }

    .btn-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      height: 3.2rem;
      background: ${({ theme }) => theme.blue.main[200]};
      border-radius: .6rem;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.blue.main[300]};
        transition: background .2s ease-in;
      }

      &:active {
        background: ${({ theme }) => theme.blue.main[100]};
      }

      .icon {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.white};
      }
      .icon.first {
        transform: rotate(-90deg);
      }
      .icon.second {
        transform: rotate(90deg);
      }

      .ball {
        position: absolute;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.blue.main[100]};
        box-shadow: 0 0 .8rem ${({ theme }) => theme.blue.main[100]};
  
        &:nth-child(1) {
          margin-right: -1.6rem;
          background: green;
        }

        &.right {
          right: -2.4rem;
        }
        
        &.left {
          left: -2.4rem;
        }
    
      }
    }

    .date {
      font-weight: 700;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.blue.text};
      text-align: center;
    }

  }

  .week-container {
    width: 100%;
    display: flex;
    gap: .8rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.gray[300]};

    @media (max-width: 420px) {
      gap: .4rem;
    }

    .week-day {
      flex: 1;
      font-size: 1.3rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray[400]};
      text-transform: uppercase;
      letter-spacing: 1px;

      @media (max-width: 420px) {
        font-size: 1.1rem;
      }

      @media (max-width: 310px) {
        font-size: 1rem;
      }
    }
  }

`;
