import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.shadow.sm};
  border-radius: 1rem;
  padding: 1.6rem;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .content-container {
    .title {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.blue.text};
      width: 100%;
      overflow-x: hidden;
    }

    .desc {
      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.gray[500]};
      margin-top: .4rem;
      width: 100%;
      overflow-x: hidden;
    }

    .date-container {
      display: flex;
      align-items: center;
      gap: .4rem;
      margin-top: 1.2rem;

      .icon {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.gray[400]};

      }

      .date {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.gray[400]};
      }
    }
  }

  .icons-container {
    display: flex;
    height: 100%;
    align-items: flex-end;
    gap: .8rem;

    .icon {
      right: 1.6rem;
      bottom: 1.6rem;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.gray[400]};
      transition: all .2s ease-in;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.9);
      }
      cursor: pointer;

      &.check {
        &:hover {
          color: ${({ theme }) => theme.blue.main[200]};
        }
      }

      &.edit {
        &:hover {
          color: ${({ theme }) => theme.gray[500]};
        }
      }
    }
  }

`;
