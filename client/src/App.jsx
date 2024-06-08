import './App.css'

import {Routes, Route} from 'react-router-dom'

import UserHome from './pages/UserHome'
import HomePage from './pages/Home/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/user' element={<UserHome/>}/>
    </Routes>
  )
}

export default App
