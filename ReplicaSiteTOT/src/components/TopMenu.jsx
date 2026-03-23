import React, { useState } from "react";
import logo from "../assets/toteduca_logotipo.png";
import menuIcon from "../assets/menu.png";
import "../css/TopMenu.css";

const TopMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-cabecalho">
          <h>TOT News - A sua nova newsletter sobre Educação Corporativa! </h>
          <h
            className="link-newsletter"
            onClick={() =>
              window.open(
                "https://pagina.toteduca.com.br/inscricao-totnews",
                "_blank",
              )
            }
          >
            Inscreva-se aqui.
          </h>
        </div>
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="#home">
              <img src={logo} alt="TOT Educa logotipo" />
            </a>
          </div>
          <img 
            src={menuIcon} 
            alt="Menu" 
            className="menu-icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
          <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#cursos_personalizados">Cursos Personalizados</a>
            </li>
            <li>
              <a href="#cursos_prateleira">Cursos de Prateleira</a>
            </li>
            <li>
              <a href="#plataforma_aprendizagem">Plataforma de Aprendizagem</a>
            </li>
            <li>
              <a href="#consultoria">Consultoria</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#ebooks">eBooks</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopMenu;
