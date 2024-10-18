import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
