import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.shadow.l};
  backdrop-filter: blur(2px);
  z-index: 9999;

`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 2.4rem;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 1px 4px ${({ theme }) => theme.shadow.sm};
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.gray[400]};

    .title {
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray[400]};
    }

    .close-icon {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.gray[500]};
      cursor: pointer;

    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: .8rem;


  button {
    margin-top: .8rem;
    background: ${({ theme }) => theme.blue.main[200]};
    color: ${({ theme }) => theme.white};
    border-radius: .8rem;
    padding: 1rem 0;
    font-size: 1.6rem;
    font-weight: 500;

    &:hover {
      background: ${({ theme }) => theme.blue.main[300]};
    }

    &:active {
      background: ${({ theme }) => theme.blue.main[100]};
    }
  }
  `;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    width: 100%;
    background: ${({ theme }) => theme.gray[100]};
    border-radius: .8rem;
    padding: 1.6rem;
    color: ${({ theme }) => theme.gray[500]};
    font-weight: 500;
    box-shadow: 0 1px 4px ${({ theme }) => theme.shadow.md};
  }

  .error-msg {
    color: ${({ theme }) => theme.red[200]};
    font-size: 1.2rem;
    margin-top: .4rem;
    text-transform: capitalize;
  }
`;
