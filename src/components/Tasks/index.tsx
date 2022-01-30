import { Container } from './styles';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';

const tasks = [
  {
    title: 'Work with my mom',
    description: 'I need to help my mom make the food for today dinner',
    date: 'Sun Jan 30 2022'
  },
  {
    title: 'Build a timer app',
    description: 'Start to develop my timer app',
    date: 'Sun Feb 30 2022'
  },
  {
    title: 'Build a timer app',
    description: 'Start to develop my timer app',
    date: 'Sun Feb 30 2022'
  },
]

export const Tasks = () => {
  return (
    <Container>

      <div className="tasks-container">

      {tasks.map((task) => (
        <div className="task-card">
          <p className="title">{task.title}</p>
          <p className="desc">{task.description}</p>
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

