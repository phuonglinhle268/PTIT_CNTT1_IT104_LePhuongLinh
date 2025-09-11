import React from "react";
import { Link } from "react-router-dom";

const tasks = [
  {
    id: 1,
    title: "Hoc react router",
    description: "Lam quan voi Dynamic Routes va useNavigate",
  },
  {
    id: 2,
    title: "On lai tailwind",
    description: "Thuc hanh tao UI co ban bang tailwind CSS",
  },
  {
    id: 1,
    title: "Hoan thanh BTVN",
    description: "Day code len Github",
  },
];
export default function TaskList() {

  return (
    <div>
      <h2>Danh sach cong viec</h2>
      <div >
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid grey",
              margin: "20px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <b>{task.title}</b>
            <p>{task.description}</p>
            <Link to={`/tasks/${task.id}`}>
              Xem chi tiet
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
