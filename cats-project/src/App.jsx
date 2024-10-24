import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatList from './CatList.jsx';
import CatDetails from './CatDetails.jsx';
import CatCreate from './CatCreate.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CatList />} />
          <Route path="/cats/:id" element={<CatDetails />} />
          <Route path="/cats/create" element={<CatCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
