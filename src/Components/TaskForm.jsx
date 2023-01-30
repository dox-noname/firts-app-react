import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [Titulo, setTitle] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);
  const eventform = (e) => {
    e.preventDefault();

    createTask({
      Titulo,
      Descripcion,
    });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="min-w-full ">
      <form action="" onSubmit={eventform} className="bg-slate-800 p-10 mb-4  max-w-maxx">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir tareas</h1>
        <input 
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={Titulo}
          autoFocus
          className="bg-slate-800 p-3 w-full mb-2 border-b-2 border-b-white text-white outline-none"
        />
        <textarea
          placeholder="Descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={Descripcion}
          className=" p bg-slate-800 p-3 w-full mb-2 border-b-2 border-b-white text-white outline-none"
        ></textarea>
        <button className="bg-green-700 px-5 py-2 text-white mt-4  hover:bg-green-600">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default TaskForm;
