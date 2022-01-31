import { useState } from 'react';
import { Container, RightSection } from './styles';
import { SideMenu } from '../../components/SideMenu';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { TasksProvider } from '../../contexts/TasksContext';

export const Home = ({ setTheme }: any) => {
  console.log(window.location.pathname);
  const [whichItemIsActive, setWhichItemIsActive] = useState(() => {
    const path = window.location.pathname;
    if (path === '/calendar' || path === '/') {
      return 'calendar';
    }
    return 'tasks';
  });

  return (
    <TasksProvider>
      <Container>
        <SideMenu
          setTheme={setTheme}
          whichItemIsActive={whichItemIsActive}
          setWhichItemIsActive={setWhichItemIsActive}
        />
        <RightSection>
          <Header
            whichItemIsActive={whichItemIsActive}
            setWhichItemIsActive={setWhichItemIsActive}
          />
          <Outlet />
        </RightSection>
      </Container>
    </TasksProvider>
  );
}
