import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/theme.slice";
import { useAppSelector } from "../hooks/useRedux";

export default function ThemeSwitcher() {
  const { mode } = useAppSelector((store) => store.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "#fff" : "#333",
        color: mode === "light" ? "#000" : "#fff",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px"
      }}
    >
      <button onClick={handleToggle}>
        {mode === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
