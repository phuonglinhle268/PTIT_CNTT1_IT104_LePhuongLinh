import { Routes, Route } from "react-router-dom";
import TeamsIndex from "./TeamsIndex";
import Team from "./Team";

export default function Teams() {
  return (
    <div>
      <h2>Teams Page</h2>
      <Routes>
        {/* Khi vào "/teams" thì hiển thị 
        index được hiểu là route mặc định của một route cha.
        Khi bạn vào đúng đường dẫn cha (ví dụ /teams) mà không có gì thêm phía sau, thì route có index sẽ hiển thị.
        thay thế cho việc viết path="".
         */}
        <Route index element={<TeamsIndex />} />

        <Route path="/teams/:teamId" element={<Team />} />
      </Routes>
    </div>
  );
}
