import React from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export default function TaskDetail() {
    const navigate = useNavigate();
    const {id} = useParams();
    const task = tasks.find((t) => t.id === Number(id));
  return (
    <div>
      <div>
        <h3>{task.title}</h3>
        <p> {task.description}</p>
        <button
          style={{ backgroundColor: "skyblue" }}
          onClick={() => navigate(-1)}
        >
          Quay lai
        </button>
      </div>
    </div>
  );
}
