import { useDispatch, useSelector } from "react-redux";

export default function Random() {
  // Lấy dữ liệu từ store
  const result = useSelector((state) => state.random);
  const profile = useSelector((state) => state.profile);
  console.log("profile: ", profile);

  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({ type: "RANDOM", payload: Math.ceil(Math.random() * 10) });
  };
  return (
    <div>
      <br />
      <h2>Random: {JSON.stringify(result)}</h2>
      <button onClick={handleRandom}>Create random number</button>
    </div>
  );
}