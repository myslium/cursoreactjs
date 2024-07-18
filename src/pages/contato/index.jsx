import './index.css'


import { Link } from 'react-router-dom'

export default function Contato() {

    return (

        <div className='pagina-contato'>
                <Link to = '/'>
            <i className='fa fa-arrow-left'></i>
            </Link> 
            <h1>Contato</h1>
        </div>
    )
}