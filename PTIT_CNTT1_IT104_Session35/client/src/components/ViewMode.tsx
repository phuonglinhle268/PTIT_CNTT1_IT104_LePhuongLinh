import { useDispatch } from "react-redux";
import { toggleView } from "../redux/slices/view.slice";
import { useAppSelector } from "../hooks/useRedux";

export default function ViewMode() {
  const { mode } = useAppSelector((store) => store.view);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleView());
  };

  const data = [1, 2, 3, 4]; // danh sách mẫu

  return (
    <div>
      <button onClick={handleToggle}>
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: mode === "list" ? "column" : "row",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "26px"
        }}
      >
        {data.map((item) => (
          <div
            key={item}
            style={{
              background: "red",
              color: "white",
              padding: "20px",
              textAlign: "center",
              flex: mode === "grid" ? "1" : "none",
              width: mode === "grid" ? "60px" : "200px",
              
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
