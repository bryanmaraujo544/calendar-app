import { Container } from './styles';
import { SideMenu } from '../../components/SideMenu';
import { Outlet } from 'react-router-dom';

export const Home = ({ setTheme }: any) => {
  console.log(window.location.pathname);
  return (
    <Container>
      <SideMenu setTheme={setTheme} />
      <Outlet />
    </Container>
  );
}
