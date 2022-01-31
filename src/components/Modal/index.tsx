import { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, Form, InputGroup } from './styles';
import { motion, useAnimation } from 'framer-motion';

import { overlayVariants } from '../../variants/overlayVariants';
import { modalVariants } from '../../variants/modalVariants';

import { IoClose } from 'react-icons/io5';
import { TasksContext } from '../../contexts/TasksContext';
import { useErrors } from '../../hooks/useErrors';
import { getFormattedDate } from '../../utils/getFormattedDate';

interface Props {
  isModalOpen: boolean,
  setIsModalOpen: any,
  eventDate: string
}

export const Modal = ({
  isModalOpen,
  setIsModalOpen,
  eventDate
}: Props) => {
  const overlayControl = useAnimation();
  const { tasks, setTasks } = useContext(TasksContext);
  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const dateFormatted = getFormattedDate(eventDate);

  useEffect(() => {
    if (isModalOpen) {
      overlayControl.start('show');
    }

    setDate(dateFormatted);
  }, [isModalOpen]);

  function handleCloseModal() {
    setIsModalOpen(false);
    setTitle('');
    setDescription('');
    setDate('');
    removeError('title');
    removeError('description');
    overlayControl.start('hidden');
  }

  function handleChangeTitle(event: any) {
    setTitle(event.target.value);
    if (!event.target.value) {
      setError({ field: 'title', message: "title can't be empty"  });
    } else {
      removeError('title');
    }
  }

  function handleChangeDescription(event: any) {
    setDescription(event.target.value);
    if (event.target.value.length === 72) {
      setError({ field: 'description', message: "Description is too long"  });
    } else {
      removeError('description');
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const taskAlreadyExistsOnThatDay = tasks.some((task) => task.title === title && task.date === date);

    if (taskAlreadyExistsOnThatDay) {
      return window.alert('This event already exists on this date');
    }

    if (title !== '' && errors.length === 0){
      setTasks((prevTaks: any) => [...prevTaks, { title, description, date }]);
      handleCloseModal();
    } else {
      window.alert('Something is wrong :(');
    }
  }

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
            <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
          </InputGroup>
          <button type="submit">Create</button>
        </Form>
      </ModalContainer>
    </Overlay>,
    document?.getElementById('modal-root') as any,
  )
}
