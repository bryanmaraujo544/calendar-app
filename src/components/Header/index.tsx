import { useContext, useEffect, useState } from 'react';
import { Search } from '../Search';
import { Container } from './styles';
import { HomeContext } from '../../pages/Home';
import { AuthContext } from '../../contexts/AuthContext';
import { ChooseProfileImgModal } from '../ChooseProfileImgModal';

import { MdModeEdit } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';

interface Props {
  setSideMenuIsOpen: any
}

export const Header = ({
  setSideMenuIsOpen
}: Props) => {
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  useEffect(() => {
    setNewPhotoUrl(user.profile_image);
  }, [user]);

  return (
    <>
      <Container>
        <HiMenuAlt2 className="menu-icon" onClick={() => setSideMenuIsOpen(true)}/>
        <Search />
        <div className="profile-container" onClick={() => setIsModalOpen(true)}>
          <img src={user.profile_image} alt="profile-img" />
          <MdModeEdit className="edit-icon" />
        </div>
      </Container>
      <ChooseProfileImgModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setPhotoUrl={setNewPhotoUrl}
        isToUpdateProfilePhoto
      />
    </>
  );
};
