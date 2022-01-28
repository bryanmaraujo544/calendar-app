import { Container } from './styles';
import LogoImg from '../../assets/logo.svg';

export const Logo = () => {
  return (
    <Container>
      <img src={LogoImg} alt="logo" />
      <p>CalenTask</p>
    </Container>
  );
}
