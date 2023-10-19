import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css';
import { Home, HotelPage, List } from './pages';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<List />} />
          <Route path='/hotels/:id' element={<HotelPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
