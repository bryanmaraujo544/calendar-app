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
  max-height: 450px;
  padding: 2.4rem;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 1px 4px ${({ theme }) => theme.shadow.sm};
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 3.2rem;

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

  .pictures-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    padding: 1.6rem 0;
    margin-top: .8rem;
    overflow-y: scroll;
    overflow-x: hidden;


    img {
      display: block;
      position: relative;
      z-index: 3;
      width: 100%;
      border-radius: 1rem;
      cursor: pointer;
      transition: all .15s ease-in;

      &:hover {
        opacity: .5;
        transform: scale(1.05);
      }
    }
  }
`;




