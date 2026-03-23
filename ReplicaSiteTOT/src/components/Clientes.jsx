import React, { useRef, useEffect, useState } from 'react'
import '../css/Clientes.css';

const Clientes = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const clientes = [];

  for (let i = 0; i < 15; i++) {
    clientes.push({ id: i, nome: `Cliente ${i + 1}` });
  }

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (sliderRef.current) {
          const slider = sliderRef.current;
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
          } else {
            slider.scrollLeft += 1;
          }
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollDireita = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollEsquerda = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
    <section className="clientes">
      <div 
        className="slider-wrapper-clientes"
        onMouseEnter={() => setIsPaused(true)} 
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="btn-slider-prev-clientes" onClick={scrollEsquerda}>❮</button>
        
        <div className="slider-clientes" ref={sliderRef}>
          <div className="slider-track-clientes">
            {clientes.map((cliente) => (
              <div className="slide-item-clientes" key={`orig-${cliente.id}`}>
                <div>{cliente.nome}</div>
              </div>
            ))}
            {clientes.map((cliente) => (
              <div className="slide-item-clientes" key={`dup-${cliente.id}`}>
                <div>{cliente.nome}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-slider-next-clientes" onClick={scrollDireita}>❯</button>
      </div>
    </section>
  );
};

export default Clientes;