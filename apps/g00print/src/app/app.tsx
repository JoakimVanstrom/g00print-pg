import { Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import HomeView from './view/HomeView';
import GetUserInfo from './components/GetUserInfo';




function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="aboutUs" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="getUser" element={<GetUserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
