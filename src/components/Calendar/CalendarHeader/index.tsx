import { Container } from './styles';
import { TiArrowSortedUp } from 'react-icons/ti';
import { getMonthName } from '../../../utils/getMonthName';


const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarHeader = ({
  date,
  setDate,
}: any) => {
  function handlePassToNextMonth() {
    if (date.month === 11) {
      setDate(({ year, month }: any) => (
        { year: year + 1, month }
      ));
    }

    setDate(({ year, month }: any) => {
      if (month === 11) {
        return { year, month: 0 }
      } else {
        return { year, month: month + 1 };
      }
    });
  }

  function handlePassToLastMonth() {
    if (date.month === 0) {
      setDate(({ year, month }: any) => (
        { year: year - 1, month }
      ));
    }

    setDate(({ year, month }: any) => {
      if (month === 0) {
        return { year, month: 11 }
      } else {
        return { year, month: month - 1 };
      }
    });
  }

  return (
    <Container>
      <div className="date-container">
        <div className="btn-container" onClick={handlePassToLastMonth}>
          <TiArrowSortedUp className="icon first" />
        </div>
        <p className="date">{getMonthName(date.month)} {date.year}</p>
        <div className="btn-container" onClick={handlePassToNextMonth}>
          <TiArrowSortedUp className="icon second" />
        </div>
      </div>
      <div className="week-container">
        {weekDays.map((day: string) => (
          <div className="week-day">{day}</div>
        ))}
      </div>
    </Container>
  )
}
