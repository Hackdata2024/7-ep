import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { useStateContext } from './GlobalContext/ContextProvider';
import User from './components/User/User';
import Web from './pages/Web';
import Cyber from './pages/Cyber';
import UserForm from './pages/UserForm';
import DetailedInfo from './pages/DetailedInfo';
import News from './components/news/News';



function App() {
  const currentUser = useStateContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={currentUser !== null ? <Landing/> : <LoginPage/>}/>
          <Route path = '/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/ml' element={currentUser !== null ? <Home/> : <LoginPage/>}/>
          <Route path='/user' element={currentUser !== null ? <User/> : <LoginPage/>}/>
          <Route path='/web' element={currentUser !== null ? <Web/> : <LoginPage/>}/>
          <Route path='/cyber' element={currentUser !== null ? <Cyber/> : <LoginPage/>}/>
          <Route path='/form' element={currentUser !== null ? <UserForm/> : <LoginPage/>}/>
          <Route path='/info' element={currentUser !== null ? <DetailedInfo/> : <LoginPage/>}/>
          <Route path='/MLGenerate' element={currentUser !== null ? <News/> : <LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
