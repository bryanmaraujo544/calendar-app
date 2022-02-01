import { Container } from './styles';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { HomeContext } from '../../pages/Home';

export const Tasks = (props: any) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const { taskTitle } = useContext(HomeContext);

  const filteredTasks = tasks.filter(({ title, description, date }) => title.includes(taskTitle) || description?.includes(taskTitle) || date?.includes(taskTitle) );

  function handleCheckEvent({ title, date }: any) {
    setTasks((prevTaks: any) => prevTaks.filter((task: any) => task.title !== title || task.date !== date ));
  }
  return (
    <Container>
      <div className="tasks-container">
        {filteredTasks.length > 0 && (
          filteredTasks.map((task) => (
            <div className="task-card" key={`${task.title}${task.date}`}>
              <div>
                <p className="title">{task.title}</p>
                <p className="desc">{task.description}</p>

              </div>
              <div className="date-container">
                <BsFillCalendarEventFill className="icon" />
                <p className="date">{task.date}</p>
              </div>
              <AiFillCheckCircle className="check-icon" onClick={() => handleCheckEvent({ title: task.title, date: task.date })} />
            </div>
          ))
        )}
        {filteredTasks.length === 0 && tasks.map((task) => (
          <div className="task-card" key={`${task.title}${task.date}`}>
            <div>
              <p className="title">{task.title}</p>
              <p className="desc">{task.description}</p>

            </div>
            <div className="date-container">
              <BsFillCalendarEventFill className="icon" />
              <p className="date">{task.date}</p>
            </div>
            <AiFillCheckCircle className="check-icon" onClick={() => handleCheckEvent({ title: task.title, date: task.date })} />
          </div>
        ))}
      </div>

    </Container>
  );
};

