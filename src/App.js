import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

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
