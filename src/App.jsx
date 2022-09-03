import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
