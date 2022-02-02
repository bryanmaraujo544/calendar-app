import styled from 'styled-components';

export const SecondContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.4rem;

  @media (max-width: 468px) {
    padding: 3.2rem;
    margin-top: 1.6rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;

    .input-group {
      display: flex;
      flex-direction: column;
      width: 100%;

      span {
        font-size: 1.2rem;
        margin-top: .4rem;
        color: ${({ theme }) => theme.red[200]};
      }
    }

    input {
      position: relative;
      background: ${({ theme }) => theme.gray[100]};
      padding: 0 1.6rem;
      height: 5.6rem;
      width: 100%;
      box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.sm};
      border-radius: 1rem;

      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray[500]};

      &::placeholder {
        color: ${({ theme }) => theme.gray[400]};
        font-weight: 700;
      }
    }

    .password-input {
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.gray[100]};
      padding: 0 1.6rem;
      height: 5.6rem;
      width: 100%;
      box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.sm};
      border-radius: 1rem;

      input {
        padding: 0;
        box-shadow: none;
      }

      .eye-icon {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.gray[500]};
        cursor: pointer;
        transition: all .2s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

    }


    button[type=submit] {
      margin-top: .8rem;
      height: 4.8rem;
      background: ${({ theme }) => theme.blue.main[200]};
      font-size: 1.8rem;
      letter-spacing: 0.75px;
      font-weight: 700;
      color: #fff;
      border-radius: 1rem;
      box-shadow: 0 1px 8px ${({ theme }) => theme.blue.main[100]};
      transition: background .2s ease-in;

      &:hover {
        background: ${({ theme }) => theme.blue.main[300]};
      }
      &:active {
        background: ${({ theme }) => theme.blue.main[100]};
      }
    }


    .register-img-container {
      display: flex;
      align-items: center;
      gap: .8rem;

      .or-container {
        padding: .4rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;

        p {
          font-size: 1.2rem;
          color: ${({ theme }) => theme.gray[400]};
        }

        .line {
          width: 2px;
          flex: 1;
          background: ${({ theme }) => theme.gray[400]};
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.gray[400]};
        color: #fff;
        height: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 1rem;
        transition: background .2s ease;
        &:hover {
          background: ${({ theme }) => theme.gray[500]};
        }

        .icon {
          font-size: 1.8rem;
        }
      }
    }

  }

  .subtitle {
    color: ${({ theme }) => theme.gray[500]};
    font-size: 1.5rem;
    margin-top: 1.6rem;
    font-weight: 500;

    a {
      color: ${({ theme }) => theme.blue.main[300]};
      font-weight: 700;
    }
  }
`;
