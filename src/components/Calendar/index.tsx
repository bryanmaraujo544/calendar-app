import { Container, Header, CalendarContainer } from "./styles";

import { TiArrowSortedUp } from 'react-icons/ti';
import { getDaysInMonth } from "../../utils/getDaysInMonth";
import { getDaysOfPreviousMonth } from "../../utils/getDaysOfPreviousMonth";

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Calendar = () => {
  const { firstDayDate, daysInMonth } = getDaysInMonth(2022, 0); // This variable grabs how many days the actual month has and the date of the first day of the month
  const { daysInLastMonth } = getDaysOfPreviousMonth(2022, 0); // How many days the previous month has


  // This variable grab the first day of the month and returns which day it as of the week
  // For example: is the first day of monday was on Saturday, it will return 6. Because Sat is the 7 day of the week
  // The index of week days is 0 - 6
  const firstDayMonthInWeekDay = firstDayDate.getDay();


  // Here I am pushing all the days of month, for example 1 - 31
  const daysOfActualMonth = [];
  for (let i = 1; i <= daysInMonth; i++){
    daysOfActualMonth.push(i);
  }

  // Pushing all days of last month
  const daysOfLastMonth = [];
  for (let i = daysInLastMonth; i >= 0; i--) {
    daysOfLastMonth.push(i);
  }
  // Grabbing only last days of previous month,
  const lastDaysOfLastMonth = daysOfLastMonth.slice(0, firstDayMonthInWeekDay).reverse();

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
      <CalendarContainer>
        {lastDaysOfLastMonth.map((day) => (
          <div className="day-container last-month">
            <p className="day">{day}</p>
            <p className="tasks">8 tasks</p>
          </div>
        ))}
        {daysOfActualMonth.map((day: number) => (
          <div className="day-container">
            <p className="day">{day}</p>
            <p className="tasks">8 tasks</p>
          </div>
        ))}
      </CalendarContainer>
    </Container>
  );
}
