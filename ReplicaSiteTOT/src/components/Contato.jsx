import React from "react";
import "../css/Contato.css";
import recaptchaImg from '../assets/recaptcha.jpg'
import instagramIcon from '../assets/instagram.png'
import linkedinIcon from '../assets/linkedin.png'
import facebookIcon from '../assets/facebook.png'
import whatsappIcon from '../assets/whatsapp.png'

const Contato = () => {
  return (
    <div className="rodape">
      <footer className="informacoes">
        <div className="contato">
          <h3>Contato</h3>
          <p>
            R. Antônio da Veiga, 419, Sala 10 - Victor Konder, Blumenau - SC -
            89012-500
          </p>
          <p>(47) 96427-5326 (47) 3516-4418</p>
          <p>contato@toteduca.com.br</p>
          <div className="links">
              <img
                src={instagramIcon}
                alt="link instagram"
                onClick={() => window.open("https://www.instagram.com/toteduca/", "_blank")}
              />
              <img
                src={linkedinIcon}
                alt="link linkedin"
                onClick={() => window.open("https://www.linkedin.com/company/toteduca/posts/?feedView=all", "_blank")}
              />
              <img
                src={facebookIcon}
                alt="link facebook"
                onClick={() => window.open("https://www.facebook.com/toteduca/", "_blank")}
              />
              <img
                src={whatsappIcon}
                alt="link whatsapp"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5547984593826&text=Ol%C3%A1,%20acessei%20o%20site%20da%20TOT%20e%20preciso%20de%20atendimento.%20Obrigado(a)!", "_blank")}
              />
                      </div>
          </div>
        <div className="newsletter">
          <h3>Se inscreva para receber novidades</h3>
          <form>
            <input type="text" placeholder="Escreva seu nome aqui" />
            <input type="email" placeholder="Escreva seu melhor e-mail aqui" />
            <img className="recaptcha" src={recaptchaImg} alt="Espaço para implemntar o recaptcha" />
            <button type="submit">OK</button>
          </form>
        </div>
        
      </footer>
      <footer className="rodape-inferior">
        COPYRIGHT ® 2025. TOT EDUCAÇÃO CORPORATIVA. TODOS OS DIREITOS RESERVADOS
      </footer>
    </div>
  );
};

export default Contato;
