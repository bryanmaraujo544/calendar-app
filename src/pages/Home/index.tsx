import { Container, RightSection } from './styles';
import { SideMenu } from '../../components/SideMenu';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';

export const Home = ({ setTheme }: any) => {
  console.log(window.location.pathname);
  return (
    <Container>
      <SideMenu setTheme={setTheme} />
      <RightSection>
        <Header />
        <Outlet />
      </RightSection>
    </Container>
  );
}
