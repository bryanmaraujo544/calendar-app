import { useContext, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';
import { TasksContext } from '../../contexts/TasksContext';

import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { EventModal } from '../EventModal';
import { motion } from 'framer-motion';
import { getFormattedDate } from '../../utils/getFormattedDate';

export const TaskCard = ({ title, date, description, id }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setTasks } = useContext(TasksContext);

  async function handleCheckEvent({ title, date, id }: any) {
    setTasks((prevTaks: any) => prevTaks.filter((task: any) => task.title !== title || task.date !== date ));
    await api.delete(`/tasks/${id}`);
  }

  async function handleOpenEditModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Container
        key={`${title}${date}`} 
        as={motion.div} 
        layout
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="content-container">
          <div>
            <p className="title">{title}</p>
            <p className="desc">{description}</p>
          </div>
          <div className="date-container">
            <BsFillCalendarEventFill className="icon" />
            <p className="date">{getFormattedDate(date)}</p>
          </div>
        </div>
        <div className="icons-container">
          <AiFillCheckCircle className="icon check" onClick={() => handleCheckEvent({ title, date, id })} />
          <MdModeEdit className="icon edit" onClick={() => handleOpenEditModal()} />
        </div>
      </Container>
      <EventModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        eventDate={date}
        isToEditEvent
        taskId={id}
      />
    </>
  );
}
