import React from "react";
import Barra from "../layout/Barra";
import Sidebar from "../layout/Sidebar";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div class="seccion-principal">
        <Barra />
        <main>
            <FormTarea />
          <div class="contenedor-tareas">
              <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
