import { Container } from './styles';
import { SideMenu } from '../../components/SideMenu';
import { Calendar } from '../../components/Calendar';

export const Home = () => {
  return (
    <Container>
      <SideMenu />
      <Calendar />
    </Container>
  );
}
