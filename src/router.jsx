import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/app';
import Contato from './pages/contato';
import Eventos from './pages/eventos';
import NaoEncontrado from './pages/notfound';

export default function Navegacao() {

    return (

        <BrowserRouter>
           <Routes>
               <Route path= '/' element =  { <App/> }  />
               <Route path = '/contato' element = {<Contato/>} />
               <Route path='/eventos' element = {<Eventos/>}/> 
               <Route path='*' element = {<NaoEncontrado/>} />
           </Routes>
        </BrowserRouter>
    )
}