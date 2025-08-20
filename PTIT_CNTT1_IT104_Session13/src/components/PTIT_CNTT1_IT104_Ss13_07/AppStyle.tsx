import React, {useState} from 'react'

const AppStyle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
    const [language, setLanguage] = useState<"english" | "vietnamese">("english");

    const styles = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        border: "1px solid black",
    };

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    const changeLanguage = () => {
        setLanguage(language === "english" ? "vietnamese" : "english");
    }
    const Theme = theme === "light" ? (language === "english" ? "Light" : "Sang") : language === "english" ? "Dark" : "Toi";
    const Language = language === "english" ? "Tieng Anh" : "Tieng Viet";
  return (
    <div>
      <div style={styles}>
        <h3>Nen: {Theme}</h3>
        <h3>Ngon ngu: {Language}</h3>
      </div>
      <button onClick={changeTheme}>Doi theme</button>
      <button onClick={changeLanguage}>Doi ngon ngu</button>
    </div>
  )
}

export default AppStyle
