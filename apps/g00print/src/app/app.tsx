import { Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';
import GetUserInfo from './components/GetUserInfo';




function App() {
  return (
    <div>
      <h1 style={{display: "none"}}>Welcome G00print</h1>
      <Header />
      <Routes>
        <Route path="/" element={  <HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="getUser" element={<GetUserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
