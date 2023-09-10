import React from 'react';
function Testimonio() {
  console.log("Testimonio");
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        /* src={require('../../imagenes/VictorRaulHuamanSimeon.jpg')} */
        alt="Foto de Pepo"
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
