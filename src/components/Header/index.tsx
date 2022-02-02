import { Search } from '../Search';
import { Container } from './styles';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useContext } from 'react';
import { HomeContext } from '../../pages/Home';
import { AuthContext } from '../../contexts/AuthContext';
interface Props {
  setSideMenuIsOpen: any
}

export const Header = ({
  setSideMenuIsOpen
}: Props) => {

  const { taskTitle, setTaskTitle, setWhichItemIsActive } = useContext(HomeContext);
  const { user } = useContext(AuthContext);

  console.log({ user });



  return (
    <Container>
      <HiMenuAlt2 className="menu-icon" onClick={() => setSideMenuIsOpen(true)}/>
      <Search />
      <div className="profile-container">
        <img src={user.profile_image} alt="profile-img" />
      </div>
    </Container>
  );
};
