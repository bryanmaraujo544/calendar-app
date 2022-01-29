import { Search } from '../Search';
import { Container } from './styles';

export const Header = () => {
  const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/768px-Breezeicons-actions-22-im-user.svg.png';
  return (
    <Container>
      <Search />
      <div className="profile-container">
        <img src={noImage} alt="profile-img" />
      </div>
    </Container>
  );
};
