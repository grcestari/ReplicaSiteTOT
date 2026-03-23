import React from 'react'
import '../css/Agendar.css'
import recaptchaImg from '../assets/recaptcha.jpg'

const Agendar = () => {
  return (
      <form className="agendar" id="agendar">
        <h1>Agende uma demonstração</h1>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Seu email corporativo" />
          <input type="text" placeholder="Qual empresa você trabalha?" />
          <input type="text" placeholder="Digite aqui como podemos te ajudar" />
            <img className="recaptcha" src={recaptchaImg} alt="Espaço para implemntar o recaptcha" />
          <button className="btn_send">Enviar</button>
      </form>
  )
}

export default Agendar
