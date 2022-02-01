import { Link } from 'react-router-dom';

import { MainContainer } from '../../components/Auth/MainContainer';
import { FirstContainer } from '../../components/Auth/FirstContainer';
import { SecondContainer } from '../../components/Auth/SecondContainer';
import RegisterImg from '../../assets/register-img.svg';

export const Login = () => {
  return (
    <MainContainer>
      <FirstContainer>
        <h1 className="title">Sign In to access your calendar </h1>
        <h2 className="subtitle">Don't have an account? <Link to="/login">Sign Up </Link></h2>
        <img src={RegisterImg} alt="calendar-image" />
      </FirstContainer>
      <SecondContainer>
          <form className="form">
            <input type="email" placeholder="Email..." />
            <input type="text" placeholder="Password..."/>
            <button type="submit">Sign In</button>
          </form>
          <h2 className="subtitle">Don't have an account? <Link to="/login">Sign Up </Link></h2>
      </SecondContainer>
    </MainContainer>
  );
};
