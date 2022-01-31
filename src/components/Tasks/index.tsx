import { Container } from './styles';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { TaskInfosContext } from '../../pages/Home';

// const tasks = [
//   {
//     title: 'Work with my mom',
//     description: 'I need to help my mom make the food for today dinner',
//     date: 'Sun Jan 30 2022'
//   },
//   {
//     title: 'Build a timer app',
//     description: 'Start to develop my timer app',
//     date: 'Sun Feb 30 2022'
//   },
//   {
//     title: 'Build a timer app',
//     description: 'Start to develop my timer app',
//     date: 'Sun Feb 30 2022'
//   },
// ]

export const Tasks = (props: any) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const { taskTitle } = useContext(TaskInfosContext);

  const filteredTasks = tasks.filter(({ title, description }) => title.includes(taskTitle) || description?.includes(taskTitle));
  console.log('task title', taskTitle);
  return (
    <Container>

      <div className="tasks-container">
      {filteredTasks.length > 0 && (
        filteredTasks.map((task) => (
          <div className="task-card">
            <div>
              <p className="title">{task.title}</p>
              <p className="desc">{task.description}</p>

            </div>
            <div className="date-container">
              <BsFillCalendarEventFill className="icon" />
              <p className="date">{task.date}</p>
            </div>
            <AiFillCheckCircle className="check-icon" />
          </div>
        ))
      )}
      {filteredTasks.length === 0 && tasks.map((task) => (
        <div className="task-card">
          <div>
            <p className="title">{task.title}</p>
            <p className="desc">{task.description}</p>

          </div>
          <div className="date-container">
            <BsFillCalendarEventFill className="icon" />
            <p className="date">{task.date}</p>
          </div>
          <AiFillCheckCircle className="check-icon" />
        </div>
      ))}
      </div>
    </Container>
  );
};

