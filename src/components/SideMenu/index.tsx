import { useContext, useState } from 'react';
import { Container, ItemsContainer, Item } from './styles';
import { Logo } from '../Logo';
import { motion } from 'framer-motion';

import { BsFillCalendarFill, BsFillCheckSquareFill, BsMoonFill } from 'react-icons/bs';
import { IoLogOut } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

interface Props {
  setTheme: any,
  whichItemIsActive: string,
  setWhichItemIsActive: any
}

export const SideMenu = ({ setTheme, whichItemIsActive, setWhichItemIsActive }: Props) => {
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);

  function handleChangeTab(location: string) {
    navigate(location)
    setWhichItemIsActive(location);
  }

  function handleChangeTheme() {
    setTheme(theme.title === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <Logo />
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
        <div className="logout">
          <div className="icon-container">
            <IoLogOut className="icon" />

          </div>
          <p className="text">Logout</p>
        </div>
      </ItemsContainer>
    </Container>
  )
}
