import './index.scss'


import { Link } from 'react-router-dom'

export default function Contato() {

    return (

        <div className='pagina-contato'>

            <header className='cabecalho'>
                <Link to = '/'>
            <i className='fa fa-arrow-left'></i>
            </Link> 
            <h1>Contato</h1>
            </header>
            <img src = '/assets/images/ftcontato.png'/>
        </div>
    )
}