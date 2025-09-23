import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/useRedux";
import { toggleFavorite } from "../redux/slices/favorite.slice";

import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function FavoriteUserList() {
  const { users } = useAppSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", width: "300px", marginTop:"30px" }}>
      <h3>List Favorites User</h3>
      {users.map((u) => (
        <div
          key={u.id}
          style={{
            borderBottom: "1px solid grey",
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        >
          <p>UserName: {u.name}</p>
          <p>
            Favorites:{" "}
            <span
              style={{ cursor: "pointer", color: u.favorite ? "red" : "black" }}
              onClick={() => handleToggle(u.id)}
            >
              {u.favorite ? <HeartFilled /> : <HeartOutlined />}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
