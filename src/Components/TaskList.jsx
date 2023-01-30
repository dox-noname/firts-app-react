import TaskCard from "./TaskCard";
import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
function TaskList() { 
const {tasks} = useContext(TaskContext)
  if(tasks.length ===  0){
    return <h1 className="text-center text-white font-bold text-4xl">No hay tareas </h1>;

  }
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
      