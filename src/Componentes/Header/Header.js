import React from 'react';
import './Header.css'
import { Servicios } from './../Servicios/Servicios';



export const Header = () => {
    return (                
        <header>
            <div className="contenedor">
                <div className="logo">
                    <a href="/">
                        <img src="../../img/logo_negro.jpg" alt=""/>
                    </a>
                </div>
                <div className="enlaces">
                    <a className="opciones" href="#acerca">Acerca</a>
                    <a className="opciones" href="#servicios">Servicios</a>  
                    <a className="opciones" href="#proyectos">Proyecto</a>                    
                    <a className="opciones" href="#contacto">Contacto</a> 
                             
                </div>
                <div className="deslizable">
                    <img src="../../img/" alt="" />
                </div>
            </div>
        </header>
      
    );
}

