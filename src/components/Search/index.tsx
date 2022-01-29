import { Container } from "./styles";

import { RiSearch2Line } from 'react-icons/ri';

export const Search = () => {
  return (
    <Container>
      <RiSearch2Line className="icon"/>
      <input type="text" placeholder="Search for tasks..." />
    </Container>
  );
}
