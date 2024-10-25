// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Register from './Components/Register';
// import Login from './Components/Login';
// import Sidebar from 'react-sidebar';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path='/' element ={<Sidebar/>}/>
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './Components/Register';
import Login from './Components/Login';
import MySidebar from './Components/Dashboard'; // Assuming you renamed MySidebar correctly
import AddStory from './Components/AddStory';
import Storyboards from './Components/Storyboards';
import Integrations from './Components/Integrations';
import EmployessPage from './Components/EmployessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<MySidebar />} />
        <Route path="/storyboards" element={<Storyboards/>} />
        <Route path='/integrations' element={<Integrations/>}/>
        <Route path='/employess' element={<EmployessPage/>}/>


        <Route path="/add-story" element={<AddStory />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
