import React from 'react';

const ProyectoItem = (props) => {
    const { proyecto, descripcion, imagen } = props;

    return (
        <div className='proyectos'>
            <h2>{proyecto}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{__html: descripcion}} />
            <hr/>
        </div>
    );
}

export default ProyectoItem;