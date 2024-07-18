import './index.scss';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="pagina-app">

      <header className='cabecalho'> 
         <h1>Estudos de ReactJs
         <i className='fa fa-heart'></i>
         </h1>
      </header>

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
        </ul>
      </section>
    
    </div>
  );
}

export default App;
