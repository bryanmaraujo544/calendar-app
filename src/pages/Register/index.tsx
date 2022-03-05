import { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { MainContainer } from '../../components/Auth/MainContainer';
import { FirstContainer } from '../../components/Auth/FirstContainer';
import { SecondContainer } from '../../components/Auth/SecondContainer';
import { ChooseProfileImgModal } from '../../components/ChooseProfileImgModal';

import { useErrors } from '../../hooks/useErrors';
import { AuthContext } from '../../contexts/AuthContext';
import isEmailValid from '../../utils/isEmailValid';
import { isPasswordValid } from '../../utils/isPasswordValid';
import { propagationContainerVariants } from '../../variants/propagationContainerVariants';
import { propagationItemVariants } from '../../variants/propagationItemVariants';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import RegisterImg from '../../assets/register-img.svg';
import { BsPlusLg } from 'react-icons/bs';

export const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passIsVisible, setPassIsVisible] = useState(false);
  const [isRegisterBtnDisabled, setIsRegisterBtnDisabled] = useState(false);

  const { setError, removeError, errors, getErrorMessageByFieldName } = useErrors();
  const { register } = useContext(AuthContext);

  function handleChangePhotoUrl(e: any) {
    setPhotoUrl(e.target.value);
  }

  function handleChangeEmail(e: any) {
    setEmail(e.target.value);

    // Is the input is empty say that email is required
    if (!e.target.value) {
      removeError({ field: 'email', message: 'Invalid email' });
      setError({ field: 'email', message: 'Email is required' });
    } else {
      // When the input it isn't empty anymore, remove the above error
      removeError({ field: 'email', message: 'Email is required' });

      // When the input it isn't empty but the email is invalid, set the below error
      if (!isEmailValid(e.target.value)) {
        setError({ field: 'email', message: 'Invalid email' });
      } else {
        // When the input it is not empty but the email it is alreavy valid, remove the above error
        removeError({ field: 'email', message: 'Invalid email' });
      }
    }
  }

  function handleChangePassword(e: any) {
    setPassword(e.target.value);

    if (!e.target.value) {
      removeError({ field: 'password', message: 'Password needs at least: 1 uppercase character, 1 number and lenght of 6 characters' });
      setError({ field: 'password', message: 'Password is required' });
    } else {
      removeError({ field: 'password', message: 'Password is required' });
      if (!isPasswordValid(e.target.value)) {
        setError({ field: 'password', message: 'Password needs at least: 1 uppercase character, 1 number and lenght of 6 characters' });
      } else {
        removeError({ field: 'password', message: 'Password needs at least: 1 uppercase character, 1 number and lenght of 6 characters' });
      }
    }
  }

  function handleChangeConfirmedPassword(e: any) {
    setConfirmedPassword(e.target.value);

    if (!e.target.value) {
      setError({ field: 'confirmedPassword', message: 'Confirm your password' });
    } else {
      removeError({ field: 'confirmedPassword', message: 'Confirm your password' });
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const passwordsIsEqual = password === confirmedPassword;

    if (!passwordsIsEqual) {
      return window.alert('Passwords are differents');
    }

    if (email && password && confirmedPassword && errors.length === 0) {
      const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/768px-Breezeicons-actions-22-im-user.svg.png';
      setIsRegisterBtnDisabled(true);
      await register({ photoUrl: photoUrl === '' ? defaultImage : photoUrl, email, password });
    } else {
      return window.alert('Something is wrond!');
    }
  }

  const animationProps = {
    variants: propagationItemVariants,
    transition: { type: 'spring', mass: 1, stiffness: 175 },
  };

  return (
    <MainContainer>
      <FirstContainer as={motion.section} variants={propagationContainerVariants} initial="hidden" animate="show">
        <motion.h1 {...animationProps} className="title">
          {' '}
          Create your account easily!{' '}
        </motion.h1>
        <motion.h2 {...animationProps} className="subtitle">
          Already have an account? <Link to="/login">Sign In </Link>
        </motion.h2>
        <motion.img {...animationProps} src={RegisterImg} alt="calendar" />
      </FirstContainer>
      <SecondContainer as={motion.section} variants={propagationContainerVariants} initial="hidden" animate="show">
        <motion.form {...animationProps} className="form" onSubmit={handleSubmit}>
          <div className="register-img-container">
            <div className="input-group">
              <input value={photoUrl} placeholder="Profile image Url.." onChange={(e) => handleChangePhotoUrl(e)} />
            </div>
            <div className="or-container">
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <button type="button" onClick={() => setIsModalOpen(true)}>
              <BsPlusLg className="icon" />
            </button>
          </div>

          <div className="input-group">
            <input value={email} placeholder="Email..." onChange={(e) => handleChangeEmail(e)} />
            {errors.some(({ field }: any) => field === 'email') && <span>{getErrorMessageByFieldName('email')}</span>}
          </div>

          <div className="input-group">
            <div className="password-input">
              <input value={password} placeholder="Password..." onChange={(e) => handleChangePassword(e)} type={passIsVisible ? 'text' : 'password'} />
              {passIsVisible ? <AiFillEyeInvisible className="eye-icon" onClick={() => setPassIsVisible(false)} /> : <AiFillEye className="eye-icon" onClick={() => setPassIsVisible(true)} />}
            </div>
            {errors.some(({ field }: any) => field === 'password') && <span>{getErrorMessageByFieldName('password')}</span>}
          </div>

          <div className="input-group">
            <input value={confirmedPassword} placeholder="Confirm the password..." onChange={(e) => handleChangeConfirmedPassword(e)} type="password" />

            {errors.some(({ field }: any) => field === 'confirmedPassword') && <span>{getErrorMessageByFieldName('confirmedPassword')}</span>}
          </div>
          <button type="submit" disabled={isRegisterBtnDisabled}>
            Register
          </button>
        </motion.form>
        <motion.h2 {...animationProps} className="subtitle">
          Already have an account? <Link to="/login">Sign In </Link>
        </motion.h2>
      </SecondContainer>
      <ChooseProfileImgModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setPhotoUrl={setPhotoUrl} />
    </MainContainer>
  );
};
