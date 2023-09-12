import React from 'react';
import VictorImage from '../../assets/imagenes/Victor.jpg';
function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={VictorImage} // Utiliza la imagen importada como fuente
        alt="Foto de Victor Raul Huaman Simeon"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Victor Raul Huaman Simeon</p>
        <p className="cargo-testimonio">Secretario en IEEE CS UNTELS</p>
        <p className="texto-testimonio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  );
}

export default Testimonio;
