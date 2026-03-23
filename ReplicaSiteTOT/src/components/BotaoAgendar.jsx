import React from 'react'
import '../css/BotaoAgendar.css'

const BotaoAgendar = () => {
  const scrollToAgendar = () => {
    const element = document.getElementById('agendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <button className="btn_demo" onClick={scrollToAgendar}>Agendar demonstração</button>
    </div>
  )
}

export default BotaoAgendar
