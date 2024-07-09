import React from 'react'
import LayoutComponent from './components/LayoutComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Activity from './pages/Activity';

function App() {
  
  return (
   <Router>
     <LayoutComponent >
/      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/home' element={<Home />} />
        <Route path='/activity' element={<Activity />} />
      </Routes>
    </LayoutComponent >
   </Router>

  );
}

export default App;
