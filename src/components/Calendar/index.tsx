import { useContext, useEffect, useState } from 'react';
import { Container, Header, CalendarContainer } from "./styles";

import { TiArrowSortedUp } from 'react-icons/ti';
import { getDaysInMonth } from "../../utils/getDaysInMonth";
import { getDaysOfPreviousMonth } from "../../utils/getDaysOfPreviousMonth";
import { getMonthName } from '../../utils/getMonthName';
import { Modal } from '../Modal';
import { TasksContext } from '../../contexts/TasksContext';
import { getFormattedDate } from '../../utils/getFormattedDate';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Calendar = (props: any) => {
  const dt = new Date();
  const [date, setDate] = useState({ year: dt.getFullYear(), month: dt.getMonth() });

  const [daysOfActualMonth, setDaysOfActualMonth] = useState([] as number[]);
  const [lastDaysOfLastMonth, setLastDaysOfLastMonth] = useState([] as number[]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDate, setEventDate] = useState('');

  const { tasks } = useContext(TasksContext);
  console.log('tasks', tasks);

  useEffect(() => {
    setDaysOfActualMonth(getDaysOfActualMonth());
    setLastDaysOfLastMonth(getLastDaysOfLastMonth());
  }, [date]);

  const { firstDayDate, daysInMonth } = getDaysInMonth(date.year, date.month); // This variable grabs how many days the actual month has and the date of the first day of the month
  const { daysInLastMonth } = getDaysOfPreviousMonth(date.year, date.month); // How many days the previous month has

  function getDaysOfActualMonth() {
    // Here I am pushing all the days of month, for example 1 - 31
    const daysOfActualMonth = [];
    for (let i = 1; i <= daysInMonth; i++){
      const dateOfDay = new Date(date.year, date.month, i).toISOString();
      daysOfActualMonth.push({ day: i, dateOfDay });
    }

    return daysOfActualMonth as any;
  }

  function getLastDaysOfLastMonth() {
    // This variable grab the first day of the month and returns which day it as of the week
    // For example: if the first day of month was on Saturday, it will return 6. Because Sat is the 7 day of the week
    // The index of week days is 0 - 6
    const firstDayMonthInWeekDay = firstDayDate.getDay();

    // Pushing all days of last month
    const daysOfLastMonth = [];
    for (let i = daysInLastMonth; i >= 0; i--) {
      daysOfLastMonth.push(i);
    }
    // Grabbing only last days of previous month,
    const lastDaysOfLastMonth = daysOfLastMonth.slice(0, firstDayMonthInWeekDay).reverse();

    return lastDaysOfLastMonth;
  }

  function handlePassToNextMonth() {
    if (date.month === 11) {
      setDate(({ year, month }) => (
        { year: year + 1, month }
      ));
    }

    setDate(({ year, month }): any => {
      if (month === 11) {
        return { year, month: 0 }
      } else {
        return { year, month: month + 1 };
      }
    });
  }

  function handlePassToLastMonth() {
    if (date.month === 0) {
      setDate(({ year, month }) => (
        { year: year - 1, month }
      ));
    }

    setDate(({ year, month }): any => {
      if (month === 0) {
        return { year, month: 11 }
      } else {
        return { year, month: month - 1 };
      }
    });
  }

  function handleOpenModal(dt: string) {
    setEventDate(dt);
    setIsModalOpen(true);
  }

  function handleGetTasksInThatDate(dt: string) {
    const formattedDate = getFormattedDate(dt);
    const tasksOnDate: any = tasks.filter((task: any) => task.date === formattedDate);
    return tasksOnDate.length;
  }


  return (
    <Container>
      <Header>
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
      </Header>
      <CalendarContainer>
        {lastDaysOfLastMonth.map((day) => (
          <div className="day-container last-month">
            <p className="day">{day}</p>
            <p className="tasks">8 tasks</p>
          </div>
        ))}
        {daysOfActualMonth.map(({ day, dateOfDay }: any) => (
          <div className="day-container" onClick={() => handleOpenModal(dateOfDay)}>
            <p className="day">{day}</p>
            <p className="tasks">{handleGetTasksInThatDate(dateOfDay)} tasks</p>
          </div>
        ))}
      </CalendarContainer>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        eventDate={eventDate}
      />
    </Container>
  );
}
