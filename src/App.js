import React,{useState} from 'react'
import { BrowserRouter  ,Routes,Route , Navigate} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import ReservePage from './Components/ReservePage/ReservePage'
import DelFood from './Components/DelFood/DelFood'
import Food from './Components/Admin/Foods/Food'
import Manage from './Components/Admin/Manage/Manage'
import Meals from './Components/Admin/Meals/Meals'
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
      
   <BrowserRouter>
 
  
   
  <Routes>
    <Route  path=""  element={<Layout/>}>
       <Route path="/home" element={<Home/>}/>
       <Route path="/" element={
          isLoggedIn ? <Home /> : <Navigate to="/login" replace />
        }/>
       <Route index path="/login" element={<Login  onLogin={() => setIsLoggedIn(true)} />}/>
       <Route path='/reserve' element={<ReservePage/>} />
       <Route path='/del' element={<DelFood/>}/>
        <Route path='/admin' element={<Manage/>}>
              
        <Route path='/admin/food' element={<Food/>}/>
        <Route path='/admin/plan' element={<Meals/>}/>
        
                </Route>
     
         
      
      
    </Route>

  
     
       


    
   </Routes>
   
   
   
   
   </BrowserRouter>
  )
}

 
 
