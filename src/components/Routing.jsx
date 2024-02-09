import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing
