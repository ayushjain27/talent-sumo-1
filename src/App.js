import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Components/CreateInterview/Create';
import Access from './Components/AccessInterview/Access';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/access' element={<Access />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
