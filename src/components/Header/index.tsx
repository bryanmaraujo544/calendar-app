import { Search } from '../Search';
import { Container } from './styles';
import { HiMenuAlt2 } from 'react-icons/hi';
import { getDaysInMonth } from '../../utils/getDaysInMonth';

interface Props {
  whichItemIsActive: string,
  setWhichItemIsActive: any,
  taskTitle: string,
  setTaskTitle: any,
  setSideMenuIsOpen: any
}

export const Header = ({
  whichItemIsActive,
  setWhichItemIsActive,
  taskTitle,
  setTaskTitle,
  setSideMenuIsOpen
}: Props) => {

  const daysInMonth = getDaysInMonth(2022, 1);
  const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/768px-Breezeicons-actions-22-im-user.svg.png';
  return (
    <Container>
      <HiMenuAlt2 className="menu-icon" onClick={() => setSideMenuIsOpen(true)}/>
      <Search setWhichItemIsActive={setWhichItemIsActive} taskTitle={taskTitle} setTaskTitle={setTaskTitle} />
      <div className="profile-container">
        <img src={noImage} alt="profile-img" />
      </div>
    </Container>
  );
};
