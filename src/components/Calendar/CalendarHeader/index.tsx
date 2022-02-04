import { Container } from './styles';
import { TiArrowSortedUp } from 'react-icons/ti';
import { getMonthName } from '../../../utils/getMonthName';
import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../../contexts/TasksContext';


const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarHeader = ({
  date,
  setDate,
}: any) => {
  const { tasks } = useContext(TasksContext);
  const dateOfLastDayOfActualMonth = new Date(date.year, date.month + 1, 0);
  const dateOfFirstDayOfActualMonth = new Date(date.year, date.month);

  
  const [hasTasksInLastMonths, setHasTasksInLastMonths] = useState(() => checkIfHasTasksInLastMonths());
  const [hasTasksInNextMonths, setHasTasksInNextMonths] = useState(() => checkIfHasTasksInNextMonths());
  
  
  useEffect(() => {
    setHasTasksInLastMonths(checkIfHasTasksInLastMonths());
    setHasTasksInNextMonths(checkIfHasTasksInNextMonths());
  }, [date]);
  
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
  
  function checkIfHasTasksInLastMonths() {
    const thereIs = tasks.some((task: any) => (
      new Date(task.date) < dateOfFirstDayOfActualMonth
    ));
    return thereIs;
  }

  function checkIfHasTasksInNextMonths() {
    const thereIs = tasks.some((task: any) => (
      new Date(task.date) > dateOfLastDayOfActualMonth
    ));
    return thereIs;
  }


  return (
    <Container>
      <div className="date-container">
        <div className="btn-container" onClick={handlePassToLastMonth}>
          <TiArrowSortedUp className="icon first" />
          {hasTasksInLastMonths && (
            <div className="ball left"></div>
          )}
        </div>
        <p className="date">{getMonthName(date.month)} {date.year}</p>
        <div className="btn-container" onClick={handlePassToNextMonth}>
          <TiArrowSortedUp className="icon second" />
          {hasTasksInNextMonths && (
            <div className="ball right"></div>
          )}
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
