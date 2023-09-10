import React from 'react';
import './Testimonio.css';

function Testimonio({ nombre, cargo, testimonio, imagen }) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={imagen}
        alt={`Foto de ${nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{nombre}</p>
        <p className="cargo-testimonio">{cargo}</p>
        <p className="texto-testimonio">{testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
