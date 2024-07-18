import './index.scss';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="pagina-app">
     <h1>Estudos de ReactJs
     <i className='fa fa-heart'></i>
     </h1>

     <img className='foto'  src="/assets/images/ft.react.png" />
    
    <h2 className='linkando'> <Link to = '/contato'> Ir para Contato</Link></h2>
    </div>
  );
}

export default App;
