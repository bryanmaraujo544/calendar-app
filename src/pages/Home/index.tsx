import { Container } from './styles';
import { SideMenu } from '../../components/SideMenu';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  console.log(window.location.pathname);
  return (
    <Container>
      <SideMenu />
      <Outlet />
    </Container>
  );
}
