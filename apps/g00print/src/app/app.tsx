import { Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';




function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="login" element={<LoginView />} />
      </Routes>
    </div>
  );
}

export default App;
