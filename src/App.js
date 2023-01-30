import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
   <>
    <BrowserRouter >

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>

    </BrowserRouter>
   </>
  );
}

export default App;
