import './App.css'
import SubjectList from './components/PTIT_CNTT1_IT104_Ss16_01/SubjectList'
import LoginStatus from './components/PTIT_CNTT1_IT104_Ss16_02/LoginStatus'
import Color from './components/PTIT_CNTT1_IT104_Ss16_03/Color'
import ClickCounter from './components/PTIT_CNTT1_IT104_Ss16_04/ClickCounter'
import UserForm from './components/PTIT_CNTT1_IT104_Ss16_05/UserForm'
import ThemeSwitched from './components/PTIT_CNTT1_IT104_Ss16_06/ThemeSwitched'

function App() {

  return (
    <>
      <SubjectList></SubjectList>
      <LoginStatus></LoginStatus>
      <ClickCounter></ClickCounter>
      <UserForm></UserForm>
      <ThemeSwitched></ThemeSwitched>
      <Color></Color>
     
    </>
  )
}

export default App
