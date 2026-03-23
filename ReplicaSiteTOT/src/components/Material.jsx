import React from "react";
import "../css/Material.css";
import ebook from "../assets/ebook.png";

const Material = () => {
    const abrirLinkEbook = () => {
        window.open("https://www.toteduca.com.br/ebook-manual-da-universidade-corporativa", '_blank');
    }
  return (
    <div className="material">
      <div className="texto-material">
        <h1>Material Gratuito</h1>
        <p>
          Conheça o nosso Manual da Universidade Corporativa. Nele, você
          encontrará os 6 passos para uma implantação de sucesso na sua empresa.
          Aproveite!
        </p>
        <button onClick={abrirLinkEbook}>BAIXE AGORA</button>
    </div>
      <img src={ebook} alt="Ebook"/>
    </div>
  );
};

export default Material;
