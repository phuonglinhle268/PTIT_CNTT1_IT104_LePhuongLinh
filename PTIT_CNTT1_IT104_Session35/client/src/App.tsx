import './App.css'
import Counter from './components/Counter'
import FavoriteUserList from './components/FavoriteUserList'
import LanguageSwitcher from './components/LanguageSwitcher'
import RandomNumber from './components/RandomNumber'
import SidebarMenu from './components/SidebarMenu'
import ThemeSwitcher from './components/ThemeSwitcher'
import ViewMode from './components/ViewMode'
import { useAppSelector } from './hooks/useRedux'

function App() {
  const {currentLang} = useAppSelector((state) => state.language);

  return (
    <>
    <Counter/>
    <RandomNumber/>
    <ThemeSwitcher/>
    <ViewMode/>
    <SidebarMenu/>

    <div style={{ border: "1px solid grey", padding: "20px", marginTop:"26px" }}>
      <LanguageSwitcher />
      <h3>{currentLang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}</h3>
    </div>

    <FavoriteUserList/>
    </>
  )
}

export default App

