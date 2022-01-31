import { Container } from "./styles";

import { RiSearch2Line } from 'react-icons/ri';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({ setWhichItemIsActive }: any) => {
  const navigate = useNavigate();
  const [taskTitle, setTaskTitle] = useState('');

  function handleChangeTaskTitle(event: any) {
    setTaskTitle(event.target.value);

    if (event.target.value === ''){
      navigate('calendar');
      setWhichItemIsActive('calendar');
    } else {
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
