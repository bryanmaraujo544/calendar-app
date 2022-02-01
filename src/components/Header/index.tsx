import { Search } from '../Search';
import { Container } from './styles';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useContext } from 'react';
import { HomeContext } from '../../pages/Home';
interface Props {
  setSideMenuIsOpen: any
}

export const Header = ({
  setSideMenuIsOpen
}: Props) => {
  const { taskTitle, setTaskTitle, setWhichItemIsActive } = useContext(HomeContext);
  const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/768px-Breezeicons-actions-22-im-user.svg.png';

  return (
    <Container>
      <HiMenuAlt2 className="menu-icon" onClick={() => setSideMenuIsOpen(true)}/>
      <Search />
      <div className="profile-container">
        <img src={noImage} alt="profile-img" />
      </div>
    </Container>
  );
};
