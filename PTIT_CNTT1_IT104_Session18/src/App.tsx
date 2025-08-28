import './App.css'
import ColorPicker from './components/PTIT_CNTT1_IT104_Ss01-06/ColorPicker'
import Increase from './components/PTIT_CNTT1_IT104_Ss01-06/Increase'
import InputChange from './components/PTIT_CNTT1_IT104_Ss01-06/InputChange'
import InputRadio from './components/PTIT_CNTT1_IT104_Ss01-06/InputRadio'
import LoginForm from './components/PTIT_CNTT1_IT104_Ss01-06/LoginForm'
import UserList from './components/PTIT_CNTT1_IT104_Ss01-06/UserList'
import TodoApp from './components/PTIT_CNTT1_IT104_Ss18_07+8/TodoApp'

function App() {


  return (
    <>
     <Increase/>
     <UserList/>
     <LoginForm/>
     <ColorPicker/>
     <InputChange/>
     <InputRadio/>
     <TodoApp/>
    </>
  )
}

export default App
