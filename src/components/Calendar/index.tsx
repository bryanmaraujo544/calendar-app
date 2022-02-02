import { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { Container, CalendarContainer } from "./styles";

import { getDaysInMonth } from "../../utils/getDaysInMonth";
import { getDaysOfPreviousMonth } from "../../utils/getDaysOfPreviousMonth";
import { EventModal } from '../EventModal';
import { TasksContext } from '../../contexts/TasksContext';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../pages/Home';
import { CalendarHeader } from './CalendarHeader';


export const Calendar = (props: any) => {
  const navigate = useNavigate();
  const { tasks } = useContext(TasksContext);
  const { setWhichItemIsActive, setTaskTitle } = useContext(HomeContext);

  const dt = new Date();
  const [date, setDate] = useState({ year: dt.getFullYear(), month: dt.getMonth() }); // State to storage the actual month and year of calendar
  const [daysOfActualMonth, setDaysOfActualMonth] = useState([] as number[]);
  const [lastDaysOfLastMonth, setLastDaysOfLastMonth] = useState([] as number[]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDate, setEventDate] = useState(''); // Date of the square of calendar clicked

  const { firstDayDate, daysInMonth } = useMemo(() => getDaysInMonth(date.year, date.month), [date]); // This variable grabs how many days the actual month has and the date of the first day of the month
  const { daysInLastMonth } = getDaysOfPreviousMonth(date.year, date.month); // How many days the previous month has

  useEffect(() => {
    setDaysOfActualMonth(getDaysOfActualMonth());
    setLastDaysOfLastMonth(getLastDaysOfLastMonth());
  }, [date]);

  // Every Time the calendar is renderes, ensure the search is cleaned
  useEffect(() => {
    setTaskTitle('');
  }, []);

  const getDaysOfActualMonth = useCallback(() => {
    // Here I am pushing all the days of month, for example 1 - 31
    const daysOfActualMonth = [];
    for (let i = 1; i <= daysInMonth; i++){
      const dateOfDay = new Date(date.year, date.month, i).toISOString();
      daysOfActualMonth.push({ day: i, dateOfDay });
    }

    return daysOfActualMonth as any;
  }, [date]);


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

  function getAmountOfTasksInThatDate(dt: string) {
    const formattedDate = getFormattedDate(dt); // 2022-04-39
    const tasksOnDate: any = tasks.filter((task: any) => task.date === formattedDate);
    return tasksOnDate.length;
  }

  function handleOpenModal(dt: string) {
    setEventDate(getFormattedDate(dt));
    setIsModalOpen(true);
  }

  function handleSeeTasksByDate(dt: string) {
    const formattedDate = getFormattedDate(dt); // 2022-04-39
    setTaskTitle(formattedDate);
    navigate('/tasks');
    setWhichItemIsActive('tasks');
  }


  return (
    <Container>
      <CalendarHeader
        date={date}
        setDate={setDate}
      />
      <CalendarContainer>
        {lastDaysOfLastMonth.map((day) => (
          <div className="day-container last-month">
            <p className="day">{day}</p>
            <p className="tasks">- <span>tasks</span></p>
          </div>
        ))}
        {daysOfActualMonth.map(({ day, dateOfDay }: any) => (
          <div className="day-container" onClick={() => handleOpenModal(dateOfDay)}>
            <p className="day">{day}</p>
            <p className="tasks" onClick={() => handleSeeTasksByDate(dateOfDay)}>{getAmountOfTasksInThatDate(dateOfDay)} <span>tasks</span></p>
          </div>
        ))}
      </CalendarContainer>
      <EventModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        eventDate={eventDate}
      />
    </Container>
  );
}
