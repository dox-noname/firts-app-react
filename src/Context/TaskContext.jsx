import { createContext, useState , useEffect } from "react";
export const TaskContext = createContext();
import { tasks as data } from "../Data/tasks";



export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        Titulo: task.Titulo,
        id: tasks.length,
        Descripcion: task.Descripcion,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
