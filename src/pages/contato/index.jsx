import './index.scss'


import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
export default function Contato() {

    return (

        <div className='pagina pagina-contato'>
            <Cabecalho h1 = 'React | Contato'/>
           
            <img src = '/assets/images/ftcontato.png'/>
        </div>
    )
}