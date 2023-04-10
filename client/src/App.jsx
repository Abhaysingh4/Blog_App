import { useState } from 'react'
import Header from './components/Header'
import { Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/login'
import Blogs from './pages/Blogs'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Blogs />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App
