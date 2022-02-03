/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { Container, RightSection } from './styles';
import { SideMenu } from '../../components/SideMenu';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { TasksProvider } from '../../contexts/TasksContext';
import { api } from '../../services/api';
import { parseCookies } from 'nookies';
import { AuthContext } from '../../contexts/AuthContext';

interface CtxProps {
  taskTitle: string,
  setTaskTitle: any,
  whichItemIsActive: string,
  setWhichItemIsActive: any
}

export const HomeContext = createContext({} as CtxProps);

export const Home = ({ setTheme }: any) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const [whichItemIsActive, setWhichItemIsActive] = useState(() => {
    const path = window.location.pathname;
    if (path === '/calendar' || path === '/') {
      return 'calendar';
    }
    return 'tasks';
  });

  const { '@token': token } = parseCookies();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (!token) {
        return navigate('/login');
      }

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      const { data } = await api.get('/auth');
      if (!data.auth) {
        return navigate('/login');
      }

      setUser(data.user);
    })();
  }, []);

  return (
    <TasksProvider>
      <HomeContext.Provider value={{ taskTitle, setTaskTitle, whichItemIsActive, setWhichItemIsActive }}>
        <Container>
          <SideMenu
            setTheme={setTheme}
            sideMenuIsOpen={sideMenuIsOpen}
            setSideMenuIsOpen={setSideMenuIsOpen}
          />
          <RightSection>
            <Header
              setSideMenuIsOpen={setSideMenuIsOpen}
            />
            {/* Outlet is a component renderes based on which nested route is active */}
            <Outlet />
          </RightSection>
        </Container>

      </HomeContext.Provider>
    </TasksProvider>
  );
}
