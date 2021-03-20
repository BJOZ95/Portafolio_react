import React from 'react';

const Tarjeta = ({Imagen, Titulo, Contenido}) => {
    return (
        <div className="tarjeta">
            <img className="tarjeta-imagen" src={Imagen} alt="" />
        <div className="tarjeta-contenido">                            
            <h3 className="tarjeta-titulo">{Titulo}</h3>
            <p className="tarjeta-parrafo">{Contenido}</p>
        </div>
            
        </div>
        
    );
}

export default Tarjeta;
