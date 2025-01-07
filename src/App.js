import React from 'react'
import { BrowserRouter  ,Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import ReservePage from './Components/ResrvePage/ReservePage'
export default function App() {
  return (
      
   <BrowserRouter>
 
  
   
  <Routes>
    <Route  path=""  element={<Layout/>}>
       <Route path="/home" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/reserve" element={<ReservePage/>}/>
         
      
      
    </Route>

  
     
       


    
   </Routes>
   
   
   
   
   </BrowserRouter>
  )
}

 
 
