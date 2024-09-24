import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Navigate to ='/signup'/>}/>
         <Route path='/signup1' element={<SignUp/>}/>
         <Route path='/login2' element={<Login/>}/>
       </Routes>
      
    </div>
  );
};

export default App;