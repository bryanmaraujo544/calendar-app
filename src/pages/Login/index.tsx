import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MainContainer } from '../../components/Auth/MainContainer';
import { FirstContainer } from '../../components/Auth/FirstContainer';
import { SecondContainer } from '../../components/Auth/SecondContainer';
import RegisterImg from '../../assets/register-img.svg';
import { useErrors } from '../../hooks/useErrors';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setError, removeError, errors, getErrorMessageByFieldName } = useErrors();


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

  function handleSubmit(e: any) {
    e.preventDefault();
    if (email && password ) {
      console.log({ email, password });
    } else {
      return window.alert("Don't let any field empty!");
    }
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
              <input
                value={password}
                placeholder="Password..."
                onChange={handleChangePassword}
              />
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
