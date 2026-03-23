import "./css/App.css";
import Navbar from "./components/TopMenu";
import BotaoAgendar from "./components/BotaoAgendar";
import Agendar from "./components/Agendar";
import Contato from "./components/Contato";
import Clientes from "./components/Clientes";
import Solucoes from "./components/Solucoes";
import Cursos from "./components/Cursos";
import Conteudo from "./components/Conteudo";
import Material from "./components/Material";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="intro">
          <div className="intro-container">
            <h1>
              Soluções educativas, entrega de conhecimento e conexão para a sua
              organização.
            </h1>
            <p>
              Conteúdos estratégicos, desenvolvidos para a sua realidade,
              adaptados para os seus colaboradores e personalizados para sua
              empresa. Com a TOT, o cliente nunca anda sozinho.
            </p>
            <BotaoAgendar />
          </div>
        </div>
        <div className="img-intro">
          <p>
            O conteúdo é estratégico.<br></br>A entrega, humana.
          </p>
        </div>
        <div className="clientes">
          <h2>Nossos Clientes</h2>
          <p>As empresas que geramos as experiências desejadas!</p>
          <Clientes />
        </div>
        <div className="solucoes">
          <h2>Soluções com propósito</h2>
          <p>
            Entender o contexto, personalizar a jornada e caminhar lado a lado.
          </p>
          <Solucoes />
        </div>
        <Conteudo />
        <Material />
        <div className="cursos">
          <h2>Confira os nossos Cursos de Prateleira</h2>
          
        </div><Cursos />
        <Agendar />
        <Contato />
      </div>
    </>
  );
}

export default App;
