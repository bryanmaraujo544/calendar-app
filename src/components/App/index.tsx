import { Container } from './styles';
import { Home } from '../../pages/Home';
import GlobaStyles from '../../styles/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';

function App() {
  return (
    <Container>
      <GlobaStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
