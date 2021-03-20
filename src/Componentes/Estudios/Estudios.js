import React from 'react';
import {  } from "./Estudios.css";
export const Estudios = () => {
    return (
        <section class="bloque3"> 
        <img src="../../img/descargar.jpg" alt=""/>     
        <div class="detalle">
            <h1 class="estudios realiz">Estudios Realizados:</h1>            
            <table class="tabla">
                <thead>
                 
                    <th>Primaria</th>
                    <th>Secundaria</th>
                    <th>Superior</th>
                  
                </thead>
                <tr>
                  <th>Escuela1</th>
                  <th>Tecnico en Sistemas</th>
                  <th>Ing. en Software</th>
                </tr>
                <tr>
                  <th> Escuela2</th>
                  <th>Bachirerato</th>
                  <th>5º Semestre</th>
                </tr>
                <tr>
                  <th>Escuela3</th>
                  <th>Colegio</th>
                  <th>UNEMI</th>
                </tr>
              </table>
        </div>        
     </section>
            
        
    );
}


