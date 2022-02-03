/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { Container, ItemsContainer, Item, Overlay } from './styles';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Logo } from '../Logo';
import { IoLogOut } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { BsFillCalendarFill, BsFillCheckSquareFill, BsMoonFill } from 'react-icons/bs';


import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { overlayVariants } from '../../variants/overlayVariants';
import { sideMenuVariants } from '../../variants/sideMenuVariants';
import { HomeContext } from '../../pages/Home';
import { destroyCookie } from 'nookies';
import { TasksContext } from '../../contexts/TasksContext';

interface Props {
  setTheme: any,
  setSideMenuIsOpen: any,
  sideMenuIsOpen: boolean
}

export const SideMenu = ({
  setTheme,
  setSideMenuIsOpen,
  sideMenuIsOpen
}: Props) => {
  const navigate = useNavigate();
  const sideMenuControl = useAnimation();

  const theme = useContext(ThemeContext);
  const { tasks } = useContext(TasksContext);
  // This states is in Home components, because them need to be accessed by the calendar components and the search component
  const { whichItemIsActive, setWhichItemIsActive } = useContext(HomeContext);

  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    // I am making the animatio based on the value of the sideMenuIsOpen state
    // We are using useEffect because this values is being changed by other component
    if (sideMenuIsOpen) {
      sideMenuControl.start('show');
    }
  }, [sideMenuIsOpen]);


  function handleChangeTab(location: string) {
    navigate(location)
    setWhichItemIsActive(location);
  }

  function handleChangeTheme() {
    setTheme(theme.title === 'light' ? 'dark' : 'light');
  }

  function handleCloseSideMenu() {
    setSideMenuIsOpen(false);
    sideMenuControl.start('hidden');
  }

  function handleLogout() {
    destroyCookie(null, '@token');
    navigate('/login');
  }

  return (
    <Overlay
      className="overlay"
      as={motion.div}
      variants={overlayVariants}
      animate={sideMenuControl}
    >

      <Container
        as={motion.aside}
        variants={sideMenuVariants}
        style={{ x: windowDimensions.width < 768 ? '-100%' : 0 }}
        className="sideMenu"
      >
        <Logo />
        <IoClose className="close-icon" onClick={handleCloseSideMenu}/>
        <ItemsContainer>
          <div className="main-items">
            <Item
              isActive={whichItemIsActive === 'calendar' ? true : false}
              onClick={() => handleChangeTab('calendar')}
            >
              <div className="main-container">
                <div className="icon-container">
                  <BsFillCalendarFill className="icon" />
                </div>
                <p className="text">Calendar</p>
              </div>
            </Item>
            <Item
              isActive={whichItemIsActive === 'tasks' ? true : false}
              onClick={() => handleChangeTab('tasks')}
            >
              <div className="main-container">
                <div className="icon-container">
                  <BsFillCheckSquareFill className="icon" />
                </div>
                <p className="text">Tasks</p>
              </div>
              <div className="tasks-amount">
                <p>{tasks.length}</p>
              </div>
            </Item>
            <Item>
              <div className="main-container">
                <div className="icon-container">
                  <BsMoonFill className="icon" />
                </div>
                <p className="text">Dark Mode</p>
              </div>
              <motion.div
                className="dark-mode-container"
                onClick={handleChangeTheme}
                style={{
                  justifyContent: theme.title === 'dark' ? 'flex-end' : 'flex-start',
                  background: theme.title === 'dark' ? '#6C757D' : '#DEE2E6'
                }}
              >
                <div className="circle"></div>
              </motion.div>
            </Item>
          </div>
          <div className="logout" onClick={handleLogout}>
            <div className="icon-container">
              <IoLogOut className="icon" />

            </div>
            <p className="text">Logout</p>
          </div>
        </ItemsContainer>
      </Container>
    </Overlay>
  )
}
