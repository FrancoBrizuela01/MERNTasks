import React from "react";

const Tareas = ({ tarea }) => {
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div class="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>

      <div class="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button className="btn btn-secundario">Eliminar</button>
      </div>
    </li>
  );
};

export default Tareas;
