import React, { useState, useEffect } from 'react';
import './Servicios.css'
import Tarjeta from "./Tarjeta";
import servicio1  from "../../img/servicio1.png";
import servicio2  from "../../img/servicio2.png";
import servicio3  from "../../img/servicio3.png";
import { db } from '../../firebase';



export const Servicios = () => {

    const[servicios, setServicios]= useState([])
    
    useEffect(()=>{
        db.collection('servicios').onSnapshot(datos=>{
            const servis=[]
            datos.forEach(registro=> {
                servis.push({...registro.data(),id:registro.id});
            })
            setServicios(servis)
        })
    },[setServicios]);
    
    return (
        <div className="servicio" id="servicios">
            <h2 className="servicio-titulo">Mis Servicios </h2>
            <div className="servicio-cajas">
                {servicios.map(servicio=> 
                    <Tarjeta
                        Imagen={`/img/${servicio.Imagen}`}
                        Titulo={servicio.Titulo}
                        Contenido={servicio.Contenido}
                    
                    />                   
                )}
            </div>           
        </div>
    );
}

