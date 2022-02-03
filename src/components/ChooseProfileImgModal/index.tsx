/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { useAnimation, motion } from 'framer-motion';
import { Overlay, ModalContainer } from './styles';

import { overlayVariants } from '../../variants/overlayVariants';
import { modalVariants } from '../../variants/modalVariants';
import { IoClose } from 'react-icons/io5';
import { api } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

const photos = [
  'https://i.pinimg.com/564x/fd/4c/c1/fd4cc10a0b9a1b1bcf3f6c0fca1673e6.jpg',
  'https://i.pinimg.com/564x/5d/73/bf/5d73bfcb05979a0540389dfadce8bdee.jpg',
  'https://i.pinimg.com/564x/24/0e/c2/240ec2fc262cbfc8786185af2e5b57e3.jpg',
  'https://i.pinimg.com/564x/86/1c/86/861c86e59841a1b66a478f9297d2d869.jpg',
  'https://i.pinimg.com/564x/11/2f/f7/112ff7fda21e25c663c883395be01350.jpg',
  'https://i.pinimg.com/564x/a8/aa/3b/a8aa3b398b069d7e7dc62ab2cc8f335f.jpg',
  'https://i.pinimg.com/564x/75/bb/8d/75bb8df61e58505884416fc6a9e206cf.jpg',
  'https://i.pinimg.com/564x/5d/20/37/5d2037ea5eed386d8c3428c399ac0f61.jpg',
  'https://i.pinimg.com/236x/c7/4d/69/c74d69676ff0e3bfc7834cbbb5eb4a73.jpg',
  'https://i.pinimg.com/564x/2e/0a/2c/2e0a2c1b8c283c00d138692241202f20.jpg',
  'https://i.pinimg.com/564x/61/dc/9f/61dc9f068b9fae5911ae571f99fe3c82.jpg',
  'https://i.pinimg.com/564x/04/24/68/0424687bcf7a55f76f61596e11dd57e1.jpg',

]

interface Props {
  isModalOpen: boolean,
  setIsModalOpen: any,
  setPhotoUrl: any,
  isToUpdateProfilePhoto?: boolean
}

export const ChooseProfileImgModal = ({
  isModalOpen,
  setIsModalOpen,
  setPhotoUrl,
  isToUpdateProfilePhoto
}: Props) => {
  const { setUser } = useContext(AuthContext);
  const overlayControl = useAnimation();

  useEffect(() => {
    if (isModalOpen) {
      overlayControl.start('show');
    }
  }, [isModalOpen]);

  function handleCloseModal() {
    setIsModalOpen(false);
    overlayControl.start('hidden');
  }

  async function handleChoosePhoto(url: string) {
    if (isToUpdateProfilePhoto) {
      await updateProfilePhoto(url);
      handleCloseModal();
    } else {
      setPhotoUrl(url);
      handleCloseModal();
    }
  }

  async function updateProfilePhoto(photoUrl: string) {
    try {
      const { data } = await api.put('/users', { photoUrl });
      const { id, profile_image } = data.userUpdated;
      setUser({ id, profile_image }); // Setting the user to don't need to reload the page
    } catch (err: any) {
      console.log(err?.response);
    }
  }

  return ReactDOM.createPortal(
    <Overlay
      as={motion.div}
      variants={overlayVariants}
      animate={overlayControl}
    >
      <ModalContainer
        as={motion.div}
        variants={modalVariants}
      >
        <header>
          <p className="title">Choose an picture</p>
          <IoClose className="close-icon" onClick={handleCloseModal} />
        </header>
        <div className="pictures-container">
          {photos.map((photo) => (
            <img src={photo} alt="" onClick={() => handleChoosePhoto(photo)} />
          ))}
        </div>
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root') as any
  )
}
