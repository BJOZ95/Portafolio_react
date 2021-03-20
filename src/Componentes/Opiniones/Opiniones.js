import React from 'react';
import "./Opiniones.css"
export const Opiniones = () => {
    return (
        <section id="Opiniones"  class="opiniones">
        <div class="tituloComen">
            <h1>Opiniones sobre mi...</h1>
        </div>        
        <div class="contenedor-comentarios">
            <article class="comentario-usuario">
              <div class="imagen-usuario"></div>
              <div class="contenido-usuario">
                <h1 class="nombre-usuario">Jonnathan Bastidas</h1>
                <h2 class="usuario-trabajo">web developer</h2>
                <p>Maneja los problemas de forma serena, en situaciones extremas es decidido en sus objetivos.</p>
              </div>
            </article>
            <article class="comentario-usuario">
              <div class="imagen-usuario"></div>
              <div class="contenido-usuario">
                <h1 class="nombre-usuario">Jorge Sanchez</h1>
                <h2 class="usuario-trabajo">web developer</h2>
                <p>Muy flexible y adaptativo a la hora de trabajar en un proyecto ya sea solo o con un equipo </p>
                <p></p>
              </div>
            </article>
            <article class="comentario-usuario">
                <div class="imagen-usuario"></div>
                <div class="contenido-usuario">
                  <h1 class="nombre-usuario">Carlos Flores</h1>
                  <h2 class="usuario-trabajo">web developer</h2>
                  <p>Siempre tratando de dar el 100%, nunca baja su nivel de esfuerzo en cada trabajo</p>
                </div>
            </article>
            <article class="comentario-usuario">
              <div class="imagen-usuario"></div>
              <div class="contenido-usuario">
                <h1 class="nombre-usuario">Ulises Ramos</h1>
                <h2 class="usuario-trabajo">web developer</h2>
                <p>Trabajador, actitud positiva, abierto a cambios y compromiso con el proyecto u objetivos</p>
              </div>
          </article>
       </div>
       </section>
            
        
    );
}


