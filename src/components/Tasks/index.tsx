import { Container } from './styles';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { HomeContext } from '../../pages/Home';
import { api } from '../../services/api';

export const Tasks = (props: any) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const { taskTitle } = useContext(HomeContext);

  const filteredTasks = tasks.filter(({ title, description, date }) => title.includes(taskTitle) || description?.includes(taskTitle) || date?.includes(taskTitle) );

  async function handleCheckEvent({ title, date, id }: any) {
    const { data } = await api.delete(`/tasks/${id}`);
    setTasks((prevTaks: any) => prevTaks.filter((task: any) => task.title !== title || task.date !== date ));
  }
  return (
    <Container>
      <div className="tasks-container">
        {filteredTasks.length > 0 && (
          filteredTasks.map(({ title, date, description, id }: any) => (
            <div className="task-card" key={`${title}${date}`}>
              <div>
                <p className="title">{title}</p>
                <p className="desc">{description}</p>

              </div>
              <div className="date-container">
                <BsFillCalendarEventFill className="icon" />
                <p className="date">{date}</p>
              </div>
              <AiFillCheckCircle className="check-icon" onClick={() => handleCheckEvent({ title, date, id })} />
            </div>
          ))
        )}
        {filteredTasks.length === 0 && tasks.map(({ id, title, description, date }: any) => (
          <div className="task-card" key={`${title}${date}`}>
            <div>
              <p className="title">{title}</p>
              <p className="desc">{description}</p>

            </div>
            <div className="date-container">
              <BsFillCalendarEventFill className="icon" />
              <p className="date">{date}</p>
            </div>
            <AiFillCheckCircle className="check-icon" onClick={() => handleCheckEvent({ title, date, id })} />
          </div>
        ))}
      </div>

    </Container>
  );
};

