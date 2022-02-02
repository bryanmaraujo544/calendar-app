import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr );
  grid-template-rows: auto 1fr;
  gap: 1.6rem;
  margin-top: 2.4rem;

  width: 100%;
`;



export const CalendarContainer = styled.section`
  grid-column: 1 / 8;
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.sm};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: .8rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 420px) {
    gap: .4rem;
  }

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

    @media (max-width: 420px) {
      gap: .4rem;
      padding: .4rem;
    }

    .day {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.blue.text};

      @media (max-width: 420px) {
        font-size: 1.2rem;
      }

      @media (max-width: 310px) {
        font-size: 1rem;
      }
    }

    .tasks {
      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.blue.main[200]};

      &:hover {
        text-decoration: underline;
      }


      span {
        @media (max-width: 420px) {
          display: none;
        }
      }
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
