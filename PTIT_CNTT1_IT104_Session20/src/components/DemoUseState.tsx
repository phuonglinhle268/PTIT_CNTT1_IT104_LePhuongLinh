import React, { useState } from "react";

export default function DemoUseState() {
  const [count, setCount] = useState<number>(10); //gtri khoi tao chi dung 1 lan duy nhat
  // useState<string>("");   //dua vao du lieu truyen trong ngoac() ->xdinh kieu du lieu
  //useState<null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const [task, setTask] = useState({
    id: 0,
    name: "Quét nhà",
    isCompleted: false,
  });

  //tạo sate user có 4 trường: userName, email, address, gender
  //tiến hành submit form và lấy ra object user
  const [user, setUser] = useState({
    userName: "",
    gender: "",
    email: "",
    address: "",
  });

  cost[(numbers, setNumbers)] = useState<number[]>([]);

  const handleIncrease = () => {
    //trong react component, state ko đc gán lại gtri
    //-> để component bị re-render thì state phải bị thay đổi
    //-> để state bị thay đổi thì phải dùng setState

    //setCount(11);  //component sẽ ko bị thay đổi, ấn increase sẽ ko thể thay đổi
    //setCount(count + 1); //ấn increae sẽ bị thay đổi
    //setCount(count + 2);  count=10
    //setCount(count + 3);  count=10
    setCount((prevState) => prevState + 1); //prevState=10
    //setCount((prevState) => prevState + 1);  //prevState=11
    //setCount((prevState) => prevState + 1);  //prevState=13
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //cập nhật lại gtri của state inputValue
    setInputValue(event.target.value);
  };
  const handleUpdateTask = () => {
    setTask({ ...task, deadline: "11/11/2023" });
  };
  const handleRandomNumber = () => {};

  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <input onChange={handleChange} type="text" />
      <h3>Task Info: {JSON.stringify(task)}</h3>
      <button onClick={handleUpdateTask}>Random Number</button>
      <hr />
      <h3>{JSON.stringify(numbers)}</h3>
      <button onClick={handeRandomNumber}>Random number</button>
      <hr />

      
    </div>
  );
}
