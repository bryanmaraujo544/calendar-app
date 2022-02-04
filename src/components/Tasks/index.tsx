import { Container } from './styles';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { TasksContext } from '../../contexts/TasksContext';
import { HomeContext } from '../../pages/Home';

import { BiTaskX } from 'react-icons/bi';
import { TaskCard } from '../TaskCard';
import Loading from 'react-loading';
import { ThemeContext } from 'styled-components';

export const Tasks = () => {
  const { tasks, isTasksLoading } = useContext(TasksContext);
  const theme = useContext(ThemeContext);
  const { taskTitle } = useContext(HomeContext);

  const filteredTasks = tasks.filter(({ title, description, date }) => title.includes(taskTitle) || description?.includes(taskTitle) || date?.includes(taskTitle) );

  return (
    <Container>
      {isTasksLoading && (
        <Loading type="spinningBubbles" className="loading" height="12.8rem" width="12.8rem" color={theme.title === 'light' ? '#000' : '#fff'} />
      )}
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
      {tasks.length === 0 && !isTasksLoading && (
        <div className="alert-container">
          <p className="alert-title"> There is no tasks </p>
          <BiTaskX className="icon" />
        </div>
      )}

    </Container>
  );
};

