import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useErrors } from '../../hooks/useErrors';
import { AuthContext } from '../../contexts/AuthContext';

import { MainContainer } from '../../components/Auth/MainContainer';
import { FirstContainer } from '../../components/Auth/FirstContainer';
import { SecondContainer } from '../../components/Auth/SecondContainer';
import RegisterImg from '../../assets/register-img.svg';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passIsVisible, setPassIsVisible] = useState(false);

  const { setError, removeError, errors, getErrorMessageByFieldName } = useErrors();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);


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

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (email && password ) {
      await login({ email, password });
    } else {
      return window.alert("Don't let any field empty!");
    }
  }

  function cleanFields() {
    setEmail('');
    setPassword('');
  }

  return (
    <MainContainer>
      <FirstContainer>
        <h1 className="title">Sign In to access your calendar </h1>
        <h2 className="subtitle">Don't have an account? <Link to="/register">Sign Up </Link></h2>
        <img src={RegisterImg} alt="calendar-image" />
      </FirstContainer>
      <SecondContainer>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                value={email}
                placeholder="Email..."
                onChange={handleChangeEmail}
              />
              {errors.some(({ field }: any) => field === 'email') && (
                <span>{getErrorMessageByFieldName('email')}</span>
              )}
            </div>
            <div className="input-group">
              <div className="password-input">
                <input
                  value={password}
                  placeholder="Password..."
                  onChange={handleChangePassword}
                  type={passIsVisible ? 'text' : 'password'}
                />
                {passIsVisible ? (
                  <AiFillEyeInvisible className="eye-icon" onClick={() => setPassIsVisible(false)} />
                ) : (
                  <AiFillEye className="eye-icon" onClick={() => setPassIsVisible(true)} />
                )}
              </div>
              {errors.some(({ field }: any) => field === 'password') && (
                <span>{getErrorMessageByFieldName('password')}</span>
              )}
            </div>
            <button type="submit">Sign In</button>
          </form>
          <h2 className="subtitle">Don't have an account? <Link to="/register">Sign Up </Link></h2>
      </SecondContainer>
    </MainContainer>
  );
};
