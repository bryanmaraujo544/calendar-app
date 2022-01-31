import { createContext, useState } from 'react';
import { Container, RightSection } from './styles';
import { SideMenu } from '../../components/SideMenu';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { TasksProvider } from '../../contexts/TasksContext';

export const TaskInfosContext = createContext({} as any);

export const Home = ({ setTheme }: any) => {
  const [taskTitle, setTaskTitle] = useState('');

  const [whichItemIsActive, setWhichItemIsActive] = useState(() => {
    const path = window.location.pathname;
    if (path === '/calendar' || path === '/') {
      return 'calendar';
    }
    return 'tasks';
  });

  return (
    <TasksProvider>
      <TaskInfosContext.Provider value={{ taskTitle, setTaskTitle }}>
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
              taskTitle={taskTitle}
              setTaskTitle={setTaskTitle}
            />
            <Outlet
            />
          </RightSection>
        </Container>

      </TaskInfosContext.Provider>
    </TasksProvider>
  );
}
