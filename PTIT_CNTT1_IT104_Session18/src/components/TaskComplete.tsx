import { useTaskContext } from "../context/TaskContext";

export default function TaskComplete() {
  const { handleCountTaskCompleted, tasks } = useTaskContext();

  return (
    <>
      {handleCountTaskCompleted === 0 && (
        <div className="text-center text-danger fw-medium">
          Chưa có công việc nào hoàn thành
        </div>
      )}
      {/* Hiển thị khi tất cả công việc hoàn thành */}

      {handleCountTaskCompleted !== 0 && (
        <div className="text-center text-success fw-medium">
          {handleCountTaskCompleted === tasks?.length ? (
            <p> Tất cả công việc đã hoàn thành </p>
          ) : (
            <p>
              {handleCountTaskCompleted} / {tasks?.length} công việc đã hoàn
              thành
            </p>
          )}
        </div>
      )}
    </>
  );
}