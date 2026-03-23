import React, { useRef, useEffect, useState } from 'react'
import '../css/Cursos.css';

const Cursos = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const cursos = [];

  for (let i = 0; i < 15; i++) {
    cursos.push({ id: i, nome: `Curso ${i + 1}` });
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
    <section className="curso">
      <div 
        className="slider-wrapper-cursos"
        onMouseEnter={() => setIsPaused(true)} 
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="btn-slider-prev-cursos" onClick={scrollEsquerda}>❮</button>
        
        <div className="slider-cursos" ref={sliderRef}>
          <div className="slider-track-cursos">
            {cursos.map((curso) => (
              <div className="slide-item-cursos" key={`orig-${curso.id}`}>
                <div>{curso.nome}</div>
              </div>
            ))}
            {cursos.map((curso) => (
              <div className="slide-item-cursos" key={`dup-${curso.id}`}>
                <div>{curso.nome}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-slider-next-cursos" onClick={scrollDireita}>❯</button>
      </div>
    </section>
  );
};

export default Cursos;