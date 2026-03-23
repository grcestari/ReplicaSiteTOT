import React from 'react'
import '../css/Solucoes.css'
import logo from '../assets/toteduca_logotipo.png'

const Solucoes = () => {
  return (
    <div className='opcoes-cursos'>
      <div className='opcao' id='personalizados'>
        <img src={logo} className='logo-opcao'/>
        <h>Cursos<br/>Personalizados</h>
      </div>
      <div className='opcao' id='prateleira'>
        <img src={logo} className='logo-opcao'/>
        <h>Cursos de<br/>Prateleira</h>
      </div> 
      <div className='opcao' id='plataforma'>
        <img src={logo} className='logo-opcao'/>
        <h>Plataforma de<br/>Aprendizagem</h>
      </div>
      <div className='opcao' id='consultoria'>
        <img src={logo} className='logo-opcao'/>
        <h>Consultoria<br/>Educacional</h>

      </div>
    </div>
  )
}

export default Solucoes
