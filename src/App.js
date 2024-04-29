import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header/index"
import SignUp from "./components/signup/index"
import Home from './components/Home/index'
import ProtectedRoutes from "./components/protectedRoute/index"

import Login from "./components/login/index"
import "./App.css"

const App = () => 
   (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" Component={ProtectedRoutes}>
        <Route path="/" Component={Home}/>
      </Route>
      <Route path="/signup" Component={SignUp}/>
      <Route path="/login" Component={Login}/>
      </Routes>
        
      </BrowserRouter>
    </>
        
    
  )


export default App