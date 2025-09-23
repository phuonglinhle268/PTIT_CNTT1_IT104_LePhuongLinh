import { useDispatch } from "react-redux";
import { randomNumber, resetList } from "../redux/slices/number.slice";
import { useAppSelector } from "../hooks/useRedux";

export default function RandomNumber() {
  const { list } = useAppSelector((store) => store.number);
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch(randomNumber());
  };

  const handleReset = () => {
    dispatch(resetList());
  };

  return (
    <div>
      <h2>List number: [{list.join(", ")}]</h2>
      <button onClick={handleRandom}>Random number</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
