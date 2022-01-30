import { Search } from '../Search';
import { Container } from './styles';

import { getDaysInMonth } from '../../utils/getDaysInMonth';

export const Header = () => {
  const daysInMonth = getDaysInMonth(2022, 1);
  console.log({ daysInMonth });
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
