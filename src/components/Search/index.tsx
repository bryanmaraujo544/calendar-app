import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../pages/Home';
import { Container } from './styles';

import { RiSearch2Line } from 'react-icons/ri';


export const Search = () => {
  const navigate = useNavigate();
  const { taskTitle, setTaskTitle, setWhichItemIsActive } = useContext(HomeContext);

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
