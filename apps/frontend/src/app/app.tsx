import { Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';
import GetUserInfo from './components/GetUserInfo';
import UploadView from './view/UploadView';
import GalleryView from './view/GalleryView';




function App() {
  return (
    <div>
      <h1 style={{display: "none"}}>Welcome G00print</h1>
      <Header />
      <Routes>
        <Route path="/" element={  <HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="getUser" element={<GetUserInfo />} />
        <Route path="/upload" element={<UploadView />} />
        <Route path="/gallery" element={<GalleryView />} />
      </Routes>
    </div>
  );
}

export default App;
