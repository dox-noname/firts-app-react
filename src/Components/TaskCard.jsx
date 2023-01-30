import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
export function TaskCard({ task}) {
const {deleteTask}=useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md ">
      <div key={task.id}>
        <h1 className="text-xl font-bold capitalize" >{task.Titulo}</h1>
        <p className="text-gray-500 text-sm">{task.Descripcion}</p>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default TaskCard;
