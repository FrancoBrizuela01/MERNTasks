import React from "react";
import ListadoProyectos from "../proyectos/ListadoProyecto";
import NuevoProyecto from "../proyectos/NuevoProyecto";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div class="proyectos">
        <h2>Tus Proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
