import './App.css';
import React, { useEffect, useState } from 'react';
import Testimonio from './components/directivos/Testimonio.jsx';

function App() {
  const [testimonios, setTestimonios] = useState([
    {
      id: 1,
      nombre: 'Victor Raul Huaman Simeon',
      cargo: 'Secretario en IEEE CS UNTELS',
      testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      imagen: 'Victor.jpg',
    },
    {
      id: 2,
      nombre: 'Steve Edward Gomez Huamani',
      cargo: 'Presidente en IEEE CS UNTELS',
      testimonio: 'Lorem ipsum dolor sit amet consectetus adipisicin elit.',
      imagen: 'Steve.png',
    },
    {
      id: 3,
      nombre: 'Sebastian Rakauskas',
      cargo: 'Vicepresidente en IEEE CS UNTELS',
      testimonio: 'Lorem ipsum dolor sit amet consectetus adipisicin elit.',
      imagen: 'Sebas.jpg',
    },
    {
      id: 4,
      nombre: 'Miguel Prado',
      cargo: 'Vicepresidente en IEEE CS UNTELS',
      testimonio: 'Lorem ipsum dolor sit amet consectetus adipisicin elit.',
      imagen: 'Miguel.jpg',
    },
    {
      id: 5,
      nombre: ' Diego Quispe',
      cargo: 'Tesorero   en IEEE CS UNTELS',
      testimonio: 'Lorem ipsum dolor sit amet consectetus adipisicin elit.',
      imagen: 'Diego.jpg',
    },

  ]);

  return (
    <div>
      {testimonios.map((testimonio) => (
        <Testimonio
          key={testimonio.id}
          nombre={testimonio.nombre}
          cargo={testimonio.cargo}
          testimonio={testimonio.testimonio}
          imagen={`/assets/imagenes/${testimonio.imagen}`}
        />
      ))}
    </div>
  );
}

export default App;

