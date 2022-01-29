import { useState } from 'react';
import { Container, ItemsContainer, Item } from './styles';
import { Logo } from '../Logo';
import { motion } from 'framer-motion';

import { BsFillCalendarFill, BsFillCheckSquareFill, BsMoonFill } from 'react-icons/bs';
import { IoLogOut } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const SideMenu = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [whichItemIsActive, setWhichItemIsActive] = useState('calendar');

  function handleToggleDarkMode() {
    setIsActive((prevState) => !prevState);
  }

  function handleChangeTab(location: string) {
    navigate(location)
    setWhichItemIsActive(location);
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
              <p className="text">Calendar</p>
            </div>
            <motion.div
              className="dark-mode-container"
              onClick={handleToggleDarkMode}
              style={{ justifyContent: isActive ? 'flex-end' : 'flex-start', background: isActive ? '#6C757D' : '#DEE2E6' }}
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
