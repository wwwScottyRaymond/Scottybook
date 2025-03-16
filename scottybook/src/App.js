import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/LoginPage' element={<LoginPage />}/>
        <Route path='/HeaderArea' element={<HeaderArea />}/>
      </Routes>
    </div>
  );
}

export default App;
