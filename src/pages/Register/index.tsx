import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { MainContainer } from '../../components/Auth/MainContainer';
import { FirstContainer } from '../../components/Auth/FirstContainer';
import { SecondContainer } from '../../components/Auth/SecondContainer';
import { ChooseProfileImgModal } from '../../components/ChooseProfileImgModal';

import { BsPlusLg } from 'react-icons/bs';
import RegisterImg from '../../assets/register-img.svg';
import { useErrors } from '../../hooks/useErrors';
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const { setError, removeError, errors, getErrorMessageByFieldName } = useErrors();
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  function handleChangePhotoUrl(e: any) {
    setPhotoUrl(e.target.value);
  }

  function handleChangeEmail(e: any) {
    setEmail(e.target.value);

    if (!e.target.value) {
      setError({ field: 'email', message: 'Email is required' })
    } else {
      removeError('email');
    }

  }

  function handleChangePassword(e: any) {
    setPassword(e.target.value);

    if (!e.target.value) {
      setError({ field: 'password', message: 'Password is required' })
    } else {
      removeError('password');
    }

  }

  function handleChangeConfirmedPassword(e: any) {
    setConfirmedPassword(e.target.value);

    if (!e.target.value) {
      setError({ field: 'confirmedPassword', message: 'Confirm your password' })
    } else {
      removeError('confirmedPassword');
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const passwordsIsEqual = password === confirmedPassword;

    if (!passwordsIsEqual) {
      return window.alert('Passwords are differents');
    }

    if (email && password && confirmedPassword) {
      const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/768px-Breezeicons-actions-22-im-user.svg.png';

      await register({ photoUrl: photoUrl === '' ? defaultImage : photoUrl, email, password })
    } else {
      return window.alert("Don't let any field empty!");
    }
  }

  function cleanFields() {
    setEmail('');
    setPassword('');
    setConfirmedPassword('');
  }

  return (
    <MainContainer>
      <FirstContainer>
        <h1 className="title">Create your account easily! </h1>
        <h2 className="subtitle">Already have an account? <Link to="/login">Sign In </Link></h2>
        <img src={RegisterImg} alt="calendar-image" />
      </FirstContainer>
      <SecondContainer>
          <form className="form" onSubmit={handleSubmit}>
            <div className="register-img-container">
              <div className="input-group">
                <input
                  value={photoUrl}
                  placeholder="Profile image Url.."
                  onChange={(e) => handleChangePhotoUrl(e)}
                />
              </div>
              <div className="or-container">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
              </div>
              <button type="button" onClick={() => setIsModalOpen(true)}><BsPlusLg className="icon" /></button>
            </div>

            <div className="input-group">
              <input
                value={email}
                placeholder="Email..."
                onChange={(e) => handleChangeEmail(e)}
              />
              {errors.some(({ field }: any) => field === 'email') && (
                <span>{getErrorMessageByFieldName('email')}</span>
              )}
            </div>

            <div className="input-group">
              <input
                value={password}
                placeholder="Password..."
                onChange={(e) => handleChangePassword(e)}
                type="password"
              />
              {errors.some(({ field }: any) => field === 'password') && (
                <span>{getErrorMessageByFieldName('password')}</span>
              )}
            </div>

            <div className="input-group">
              <input
                value={confirmedPassword}
                placeholder="Confirm the password..."
                onChange={(e) => handleChangeConfirmedPassword(e)}
                type="password"
              />
              {errors.some(({ field }: any) => field === 'confirmedPassword') && (
                <span>{getErrorMessageByFieldName('confirmedPassword')}</span>
              )}
            </div>
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
