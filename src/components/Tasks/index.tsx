import { Container } from './styles';
import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { HomeContext } from '../../pages/Home';
import { api } from '../../services/api';

import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { BiTaskX } from 'react-icons/bi';
import { TaskCard } from '../TaskCard';

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
            <TaskCard
              title={title}
              date={date}
              description={description}
              id={id}
            />
          ))
        )}
        {filteredTasks.length === 0 && tasks.map(({ id, title, description, date }: any) => (
          <TaskCard
            title={title}
            date={date}
            description={description}
            id={id}
          />
        ))}
      </div>
      {tasks.length === 0 && (
        <div className="alert-container">
          <p className="alert-title"> There is no tasks </p>
          <BiTaskX className="icon" />
        </div>
      )}

    </Container>
  );
};

