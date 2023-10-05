import React from 'react';
import Login from './Componenet/Login/Login';
import  {Routes, Route} from "react-router-dom";
import Register from './Componenet/Register/Register';
import Dashboard from './Componenet/Dashboard/Dashboard';
function App() {
  return (
   <>
     <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path="/register"  element={<Register/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/' element={<Login/>}/>

  </Routes>
   </>
  );
}

export default App;
