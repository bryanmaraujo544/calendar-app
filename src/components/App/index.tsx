import { Container } from './styles';
import { Home } from '../../pages/Home';
import GlobaStyles from '../../styles/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { Calendar } from '../Calendar';
import { Tasks } from '../Tasks';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { theme } from '../../styles/theme';

function App() {
  const [themeMode, setThemeMode] = useLocalStorage('theme', 'light');

  return (
    <ThemeProvider theme={themeMode === 'light' ? theme?.light : theme.dark}>
      <Container>
        <GlobaStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setTheme={setThemeMode} />}>
              <Route index element={<Calendar />} />

              <Route path="calendar" element={<Calendar />} />
              <Route path="tasks" element={<Tasks />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
