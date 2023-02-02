import { Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import styled from 'styled-components';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';


const AppContainer = styled.div`
 
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="auth" element={<LoginView />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
