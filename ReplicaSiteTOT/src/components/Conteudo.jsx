import React from 'react'
import "../css/Conteudo.css"
import aprendizes from "../assets/aprendizes.png"
import projetos from "../assets/projetos.png"
import engajamento from "../assets/engajamento.png"

const Conteudo = () => {
  return (
    <div className="conteudo">
      <div className="conteudo-container">
            <img src={aprendizes} alt="" />
            <h2>+ de 2,5 milhões</h2>
            <p>de aprendizes impactados com os nossos cursos.</p>
          </div>
          <div className="conteudo-container">
            <img src={projetos} alt="" />
            <h2>+ de 1200</h2>
            <p>projetos entregues para os nossos clientes.</p>
          </div>
          <div className="conteudo-container">
            <img src={engajamento} alt="" />
            <h2>97%</h2>
            <p>de engajamento e conclusão dos cursos desenvolvidos pela TOT</p>
          </div>
    </div>
  )
}

export default Conteudo
