import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index'
import Employe from './pages/employe'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Index />}/>
          <Route path="/employe" element={<Employe />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
