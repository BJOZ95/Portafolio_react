import React from 'react';
import {Header} from './Componentes/Header/Header';
import { Portada } from "./Componentes/Portada/Portada";
import { Acerca } from './Componentes/Acerca/Acerca';
import { Estudios } from "./Componentes/Estudios/Estudios";
import { Habilidades } from "./Componentes/Habilidades/Habilidades";
import { Cursos } from "./Componentes/Cursos/Cursos";
import { Proyecto } from './Componentes/Proyectos/Proyecto';
import { Opiniones } from "./Componentes/Opiniones/Opiniones";
import { Contacto } from './Componentes/Contacto/Contacto';
import {Pie} from './Componentes/Pie_de_pagina/Pie';
import { Servicios } from './Componentes/Servicios/Servicios';
function App() {
  return (
    <div>
      <Header/>
      <Portada/>
      <Acerca/>
      <Servicios/>
      <Estudios/>
      <Habilidades/>
      <Cursos/>
      <Proyecto/>
      <Opiniones/>
      <Contacto/>
      <Pie/>
    </div>
  );
}
export default App;
