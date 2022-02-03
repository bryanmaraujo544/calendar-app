import { useCallback, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, Form, InputGroup } from './styles';
import { motion, useAnimation } from 'framer-motion';
import { overlayVariants } from '../../variants/overlayVariants';
import { modalVariants } from '../../variants/modalVariants';

import { IoClose } from 'react-icons/io5';
import { TasksContext } from '../../contexts/TasksContext';
import { useErrors } from '../../hooks/useErrors';
import { api } from '../../services/api';
import { getFormattedDate } from '../../utils/getFormattedDate';

interface Props {
  isModalOpen: boolean,
  setIsModalOpen: any,
  eventDate: string,
  isToEditEvent?: boolean,
  taskId?: string
}

export const EventModal = ({
  isModalOpen,
  setIsModalOpen,
  eventDate,
  isToEditEvent,
  taskId
}: Props) => {
  const overlayControl = useAnimation();
  const { setTasks } = useContext(TasksContext);
  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputDate, setDate] = useState(''); // State that storage the date of the event

  useEffect(() => {
    if (isModalOpen) {
      overlayControl.start('show');

      // setting the date input the value of task/calendar-day clicked
      // Formating the date for the input shows the correct date
      setDate(getFormattedDate(eventDate)); 
    }
  }, [isModalOpen]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTitle('');
    setDescription('');
    setDate('');
    removeError({ field: 'title', message: "title can't be empty" });
    removeError({ field:  'description', message: 'Description is too long'});
    overlayControl.start('hidden');
  }, []);

  const handleChangeTitle = useCallback((event: any) => {
    setTitle(event.target.value);
    if (!event.target.value) {
      setError({ field: 'title', message: "Title can't be empty"  });
    } else {
      removeError({ field: 'title', message: "title can't be empty" });
    }
  }, []);

  function handleChangeDescription(event: any) {
    setDescription(event.target.value);
    if (event.target.value.length === 72) {
      setError({ field: 'description', message: "Description is too long"  });
    } else {
      removeError({ field:  'description', message: 'Description is too long'});
    }
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (title !== '' && errors.length === 0){
      try {
        if (isToEditEvent) {
          await updateEvent();
          handleCloseModal();
        } else {
          await createEvent()
          handleCloseModal();
        }
      } catch (err: any) {
        const msg = err.response.data?.message;
        window.alert(msg || 'Something is wrong;');
      }
    } else {
      window.alert('Something is wrong :(');
    }
  }

  const createEvent = useCallback(async () => {
    const { data: { taskCreated } } = await api.post('/tasks', { title, description, date: eventDate });
    setTasks((prevTaks: any) => [...prevTaks, { title, description, date: eventDate, id: taskCreated.id }]);

  }, [title, description, inputDate]);

  const updateEvent = useCallback(async () => {
    const { data: { taskUpdated } } = await api.put(`/tasks/${taskId}`, { title, description, date: eventDate });
    setTasks((prevTasks: any) => (
      prevTasks.map((task: any) => {
        if (task.id === taskUpdated.id) {
          return taskUpdated;
        }
        return task;
      })
    ));

  }, [title, description, inputDate]);

  return ReactDOM.createPortal(
    <Overlay
      as={motion.div}
      variants={overlayVariants}
      animate={overlayControl}
    >
      <ModalContainer
        as={motion.div}
        variants={modalVariants}
      >
        <header>
          <p className="title">Create an event</p>
          <IoClose className="close-icon" onClick={handleCloseModal} />
        </header>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <input value={title} placeholder="Title of event" onChange={handleChangeTitle} />
            {errors.some((error: any) => error.field === 'title') && (
              <span className="error-msg">{getErrorMessageByFieldName('title')}</span>
            )}
          </InputGroup>
          <InputGroup>
            <input value={description}  placeholder="Description of event" onChange={handleChangeDescription} maxLength={72} />
            {errors.some((error: any) => error.field === 'description') && (
              <span className="error-msg">{getErrorMessageByFieldName('description')}</span>
            )}
          </InputGroup>
          <InputGroup>
            <input value={inputDate} type="date" onChange={(e) => setDate(e.target.value)} />
          </InputGroup>
          <button type="submit">Create</button>
        </Form>
      </ModalContainer>
    </Overlay>,
    document?.getElementById('modal-root') as any,
  )
}
