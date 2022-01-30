import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr );
  grid-template-rows: auto 1fr;
  gap: 1.6rem;
  margin-top: 3.2rem;

  width: 100%;
`;

export const Header = styled.header`
  grid-column: 1 / 8;
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.sm};

  .date-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    .btn-container {
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
    }

    .date {
      font-weight: 700;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.blue.text}
    }
  }

  .week-container {
    width: 100%;
    display: flex;
    gap: .8rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.gray[300]};

    .week-day {
      flex: 1;
      font-size: 1.3rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray[400]};
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

`;

export const CalendarContainer = styled(Header)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: .8rem;
  flex-wrap: wrap;
  width: 100%;

  .day-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: .8rem;
    padding: .8rem;
    border-radius: .6rem;
    border: 1px solid ${({ theme }) => theme.gray[300]};
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.gray[200]};
    }

    .day {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.blue.text};
    }

    .tasks {
      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.blue.main[200]};
    }
  }
  .day-container.last-month {
    .day {
      color: ${({ theme }) => theme.gray[300]};
    }
    .tasks {
      color: ${({ theme }) => theme.gray[300]};
    }
  }
`;
