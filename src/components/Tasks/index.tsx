import { Container } from './styles';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { TasksContext } from '../../contexts/TasksContext';
import { HomeContext } from '../../pages/Home';

import { BiTaskX } from 'react-icons/bi';
import { TaskCard } from '../TaskCard';

export const Tasks = () => {
  const { tasks } = useContext(TasksContext);
  const { taskTitle } = useContext(HomeContext);

  const filteredTasks = tasks.filter(({ title, description, date }) => title.includes(taskTitle) || description?.includes(taskTitle) || date?.includes(taskTitle) );

  return (
    <Container>
      <motion.div layout className="tasks-container">
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
      </motion.div>
      {tasks.length === 0 && (
        <div className="alert-container">
          <p className="alert-title"> There is no tasks </p>
          <BiTaskX className="icon" />
        </div>
      )}

    </Container>
  );
};

