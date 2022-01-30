import { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, Form } from './styles';
import { motion, useAnimation } from 'framer-motion';

import { overlayVariants } from '../../variants/overlayVariants';
import { modalVariants } from '../../variants/modalVariants';

import { IoClose } from 'react-icons/io5';
import { TasksContext } from '../../contexts/TasksContext';
import { useErrors } from '../../hooks/useErrors';

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
  const { setError, removeError, errors } = useErrors();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const dt = new Date(eventDate);
  const month = (dt.getMonth() < 10 ? '0' : '') + (dt.getMonth() + 1);
  const day = (dt.getDate() < 10 ? '0' : '') + (dt.getDate());



  useEffect(() => {
    if (isModalOpen) {
      overlayControl.start('show');
    }

    setDate(`${dt.getFullYear().toString()}-${month.toString()}-${day.toString()}`);
  }, [isModalOpen]);

  function handleCloseModal() {
    setIsModalOpen(false);
    overlayControl.start('hidden');
  }

  function handleChangeTitle(event: any) {
    setTitle(event.target.value);
    console.log('event', event.target.value);
    if (!event.target.value) {
      setError({ field: 'title', message: "title can't be empty"  });
    } else {
      removeError('title');
    }
  }

  function handleChangeDescription(event: any) {
    setDescription(event.target.value);
    if (event.target.value.length > 200) {
      setError({ field: 'description', message: "Description is too long"  });
    } else {
      removeError('description');
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log({ title, description, date });

    setTasks((prevTaks: any) => [...prevTaks, { title, description, date }]);
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
          <input placeholder="Title of event" onChange={handleChangeTitle} />
          <input placeholder="Description of event" onChange={handleChangeDescription} />
          <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
          <button type="submit">Create</button>
        </Form>
      </ModalContainer>
    </Overlay>,
    document?.getElementById('modal-root') as any,
  )
}
