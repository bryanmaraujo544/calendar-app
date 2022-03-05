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
        margin-top: 0.4rem;
        color: #ff1f1f;
      }
    }

    input {
      position: relative;
      background: #e9ecef;
      padding: 0 1.6rem;
      height: 5.6rem;
      width: 100%;
      box-shadow: 0 2px 4px #00000010;
      border-radius: 1rem;

      font-size: 1.4rem;
      font-weight: 700;
      color: #6c757d;

      &::placeholder {
        color: #adb5bd;
        font-weight: 700;
      }
    }

    .password-input {
      display: flex;
      align-items: center;
      background: #e9ecef;
      padding: 0 1.6rem;
      height: 5.6rem;
      width: 100%;
      box-shadow: 0 2px 4px #00000010;
      border-radius: 1rem;

      input {
        padding: 0;
        box-shadow: none;
      }

      .eye-icon {
        font-size: 2.2rem;
        color: #6c757d;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    button[type='submit'] {
      margin-top: 0.8rem;
      height: 4.8rem;
      background: #1f87ff;
      font-size: 1.8rem;
      letter-spacing: 0.75px;
      font-weight: 700;
      color: #fff;
      border-radius: 1rem;
      box-shadow: 0 1px 8px #479dff;
      transition: background 0.2s ease-in;

      &:hover {
        background: #0072f5;
      }
      &:active {
        background: #479dff;
      }

      &:disabled {
        background: #adb5bd;
        box-shadow: 0 1px 8px #6c757d;
        cursor: not-allowed;
      }
    }

    .register-img-container {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      .or-container {
        padding: 0.4rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;

        p {
          font-size: 1.2rem;
          color: #adb5bd;
        }

        .line {
          width: 2px;
          flex: 1;
          background: #adb5bd;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #adb5bd;
        color: #fff;
        height: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 1rem;
        transition: background 0.2s ease;
        &:hover {
          background: #6c757d;
        }

        .icon {
          font-size: 1.8rem;
        }
      }
    }
  }

  .subtitle {
    color: #6c757d;
    font-size: 1.5rem;
    margin-top: 1.6rem;
    font-weight: 500;

    a {
      color: #0072f5;
      font-weight: 700;
    }
  }
`;
