
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/blog/Home'
import AddBlog from './pages/blog/AddBlog'
import  Description from './Description'
import EditBlog from './pages/blog/EditBlog'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/addblog' element={<AddBlog />}/> 
        <Route path='/desc' element={<Description />}/> 
        <Route path='/editblog' element={<EditBlog/>}/> 
        <Route path='/description' element={<Description/>}/> 
        
        

      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
