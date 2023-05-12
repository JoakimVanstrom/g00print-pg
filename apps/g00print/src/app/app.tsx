import { Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import HomeView from './view/HomeView';
import GetUserInfo from './components/GetUserInfo';




function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={  <HomeView />} />
        <Route path="getUser" element={<GetUserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
