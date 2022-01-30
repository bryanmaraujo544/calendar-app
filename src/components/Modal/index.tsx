import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, Form } from './styles';
import { motion, useAnimation } from 'framer-motion';

import { overlayVariants } from '../../variants/overlayVariants';
import { modalVariants } from '../../variants/modalVariants';

import { IoClose } from 'react-icons/io5';

interface Props {
  isModalOpen: boolean,
  setIsModalOpen: any,
}

export const Modal = ({ isModalOpen, setIsModalOpen }: Props) => {
  const overlayControl = useAnimation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('2023-03-20');


  useEffect(() => {
    if (isModalOpen) {
      overlayControl.start('show');
    } else {
      overlayControl.start('hidden');
    }
  }, [isModalOpen]);

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log({ title, description, date });
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
          <IoClose className="close-icon" onClick={() => setIsModalOpen(false)} />
        </header>
        <Form onSubmit={handleSubmit}>
          <input placeholder="Title of event" onChange={(e) => setTitle(e.target.value)} />
          <input placeholder="Description of event" onChange={(e) => setDescription(e.target.value)} />
          <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
          <button type="submit">Create</button>
        </Form>
      </ModalContainer>
    </Overlay>,
    document?.getElementById('modal-root') as any,
  )
}
