import './index.scss'

export default function Cabecalho(props) {

    return (
        <header className='comp-cabecalho'> 
        <h1>
            {props.h1}
        </h1>
     </header>

    )
}