//#region Phạm vi để import các file, thư viện bên ngoài, tạo các biến toàn cục
import { useState } from "react";

//#endregion

export default function DemoState() {
  //#region Phạm vi viết logic code và sử dụng các react hooks
  const [count, setCount] = useState<number>(0);

  console.log("Render");

  const handleIncrease = () => {
    // Cập nhật giá trị của state "count"
    setCount(count + 1);
  };

  //#endregion

  //#region Phạm vi để render giao diện
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );

  //#endregion
}