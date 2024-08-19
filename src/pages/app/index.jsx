import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';


function App() {
  return (
    <div className="pagina pagina-app">

     <Cabecalho h1 = 'estudando React'/>
      <section className='secao'>
        <h1>Estudando ReactJS</h1>

        <input type = 'text' placeholder='Digite aqui'/>
        <br /><br />
        <select>
          <option>Item 1</option>
          <option>Item 2</option>

        </select>
        <br /><br />

        <button> Clique aqui </button>

        <ul>
          <li>
          <Link to = '/contato'> Ir para Contato</Link>
          </li>
          <li>
            <Link to = '/eventos'> Ir para Eventos</Link>
          </li>
          <li>
            <Link to = '/varEstado'> Ir para Váriavel de Estado</Link>
          </li>
          <li>
            <Link to = '/componentes'> Ir para Componentes</Link>
          </li>
         
        </ul>
      </section>
    
    </div>
  );
}

export default App;
