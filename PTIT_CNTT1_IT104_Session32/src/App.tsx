
import './App.css'
import ChangeState from './components/ChangeState'
import Counter from './components/Counter'
import ListUser from './components/ListUser'
import Profile from './components/Profile'
import Random from './components/Random'
import ThemeSwitcher from './components/ThemeSwitcher'
import {Route, Routes, Navigate} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

function App() {
 
  return (
    <>
      <Counter/>
      <Random/>
      <Profile/>
      <ListUser/>
      <ChangeState/>
      <ThemeSwitcher/>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
