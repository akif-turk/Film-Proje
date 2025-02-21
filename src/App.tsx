import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Error from './components/Error/inderx';
import Load from './components/Load/index';
import FavPage from './pages/FavPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-5 md:p-10 lg:p-16 xl:p-20">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/FavPage" element={<FavPage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Loader" element={<Load />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
