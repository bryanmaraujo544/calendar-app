import { Container, Header } from "./styles";

import { TiArrowSortedUp } from 'react-icons/ti';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Calendar = () => {
  return (
    <Container>
      <Header>
        <div className="date-container">
          <div className="btn-container"><TiArrowSortedUp className="icon first" /></div>
          <p className="date">January 2022</p>
          <div className="btn-container"><TiArrowSortedUp className="icon second" /></div>
        </div>
        <div className="week-container">
          {weekDays.map((day: string) => (
            <div className="week-day">{day}</div>
          ))}
        </div>
      </Header>
      Calendar
    </Container>
  );
}
