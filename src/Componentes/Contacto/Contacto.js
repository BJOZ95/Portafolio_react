import React from 'react';
import "./Contacto.css";
export const Contacto = () => {
    return (
        <section class="contactame" id="contacto">
            <div >
                <h1>CONTACTAME:</h1>
                <input class="campos" type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre"/>
                <input class="campos" type="email" name="correo" id="correo" placeholder="Correo Electronico"/>
                <input class="campos" type="text" name="mensaje" id="mensaje" placeholder="Ingrese su mensaje"/>
                <a class="enviar" href="#">Enviar</a>
                <img class="email" src="../../img/email.png" alt=""/>
                <p class="correo">obastidast@unemi.edu.ec</p>
                <img class="email" src="../../img/whatsapp.png" alt=""/>
                <p class="correo">+593 98 587 8335</p>
            </div> 
        </section>
            
        
    );
}


