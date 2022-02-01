import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MainContainer } from '../../components/Auth/MainContainer';
import { FirstContainer } from '../../components/Auth/FirstContainer';
import { SecondContainer } from '../../components/Auth/SecondContainer';
import { ChooseProfileImgModal } from '../../components/ChooseProfileImgModal';

import { BsPlusLg } from 'react-icons/bs';
import RegisterImg from '../../assets/register-img.svg';

export const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log({ isModalOpen })
  const [photoUrl, setPhotoUrl] = useState('');

  console.log('photoUrl', photoUrl);
  return (
    <MainContainer>
      <FirstContainer>
        <h1 className="title">Create your account easily! </h1>
        <h2 className="subtitle">Already have an account? <Link to="/login">Sign In </Link></h2>
        <img src={RegisterImg} alt="calendar-image" />
      </FirstContainer>
      <SecondContainer>
          <form className="form">
            <div className="register-img-container">
              <input value={photoUrl} type="text" placeholder="Profile image Url.." />
              <div className="or-container">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
              </div>
              <button type="button" onClick={() => setIsModalOpen(true)}><BsPlusLg className="icon" /></button>
            </div>
            <input type="email" placeholder="Email..." />
            <input type="text" placeholder="Password..."/>
            <input type="text" placeholder="Confirm the password..." />
            <button type="submit">Register</button>
          </form>
          <h2 className="subtitle">Already have an account? <Link to="/login">Sign In </Link></h2>
      </SecondContainer>
      <ChooseProfileImgModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setPhotoUrl={setPhotoUrl}
      />
    </MainContainer>
  );
};
