import React from 'react'
import { BrowserRouter  ,Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import ReservePage from './Components/ReservePage/ReservePage'
import DelFood from './Components/DelFood/DelFood'
import Food from './Components/Admin/Foods/Food'
export default function App() {
  return (
      
   <BrowserRouter>
 
  
   
  <Routes>
    <Route  path=""  element={<Layout/>}>
       <Route path="/" element={<Home/>}/>
       <Route index path="/login" element={<Login/>}/>
       <Route path='/reserve' element={<ReservePage/>} />
       <Route path='/del' element={<DelFood/>}/>
       <Route path='/admin/food' element={<Food/>}/>
         
      
      
    </Route>

  
     
       


    
   </Routes>
   
   
   
   
   </BrowserRouter>
  )
}

 
 
