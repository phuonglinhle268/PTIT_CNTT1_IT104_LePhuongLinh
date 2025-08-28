import type { Task } from "../interfaces/task.interface";
import { useTaskContext } from "../context/TaskContext";

type PropTypes = {
  task: Task;
};

export default function TaskItem({ task }: PropTypes) {
  // Gọi hàm xóa trong context
  const { handleDeleteTask, handleToggleTask } = useTaskContext();

  const handleDelete = (id: number | string) => {
    if (handleDeleteTask) {
      handleDeleteTask(id);
    }
  };

  const handleChangeStatus = () => {
    if (handleToggleTask) {
      handleToggleTask(task.id);
    }
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            onChange={handleChangeStatus}
            className="form-check-input me-2"
            type="checkbox"
            checked={task.isCompleted}
          />
          {task.isCompleted ? (
            <s className="task-name">{task.name}</s>
          ) : (
            <span className="task-name">{task.name}</span>
          )}
        </div>
        <div>
          <i className="fas fa-edit text-primary me-3" role="button" />
          <i
            onClick={() => handleDelete(task.id)}
            className="fas fa-trash text-danger"
            role="button"
          />
        </div>
      </li>
    </>
  );
}