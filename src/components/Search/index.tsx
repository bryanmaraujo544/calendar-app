import { Container } from "./styles";

import { RiSearch2Line } from 'react-icons/ri';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setWhichItemIsActive: any,
  taskTitle: string,
  setTaskTitle: any
}

export const Search = ({ setWhichItemIsActive, taskTitle, setTaskTitle }: Props) => {
  const navigate = useNavigate();

  function handleChangeTaskTitle(event: any) {
    setTaskTitle(event.target.value);

    if (event.target.value !== ''){
      navigate('tasks');
      setWhichItemIsActive('tasks');
    }
  }

  return (
    <Container>
      <RiSearch2Line className="icon"/>
      <input
        type="text"
        placeholder="Search for tasks..."
        value={taskTitle}
        onChange={handleChangeTaskTitle}
      />
    </Container>
  );
}
