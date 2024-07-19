import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function VarEstado() {

   const [contador, setContador] = useState(0)
   const [tituloS2, setTituloS2] = useState ('Oii')
   const [tituloS3, setTituloS3] = useState('Escolha um item') 
   const [opcao, setOpcao] = useState(true)
   const [titulos4, setTitulos4] = useState('Oie')
   const [descricao, setDescricao] = useState('Oie')

   function aumentar () {

    if (contador < 10) {
    setContador(contador + 1)
    }
   }

   function diminuir () {

    if (contador > 0 ) {
    setContador(contador - 1)
    }
   }

   
    return (
        <div className='pagina-varestado'>
            <header className='cabecalho'>
                <Link to = '/'>
                <i className='fa fa-arrow-left'></i>
                </Link>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <section className='secao'>
                <h1>Contador</h1>
                
                <div className='cont'>
                <button onClick = {aumentar} >+</button>
                {contador}
                <button onClick = {diminuir} >-</button>
                </div>
            </section>

            <section className='secao'> 
                <h1>{tituloS2}</h1>
                <input type = 'text' value={tituloS2} onChange={e => setTituloS2(e.target.value)}/>
            </section>

            <section className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>JavaScript</option>
                    <option>Html/CSS</option>
                    <option>ReactJS</option>
                </select>
            </section>

            <section className='secao'>
                <h1>Programar é lindezinha? {opcao ? 'Sim' : 'Não'}</h1>
                <input type = 'checkbox' checked = {opcao} onChange={ e =>  setOpcao(e.target.checked)}/> Programar é lindezinha?

            </section>

            <section className='secao'>
                <h1>{titulos4}</h1>
                <input type = 'text' value = {descricao} onChange={e  => setDescricao(e.target.value)}/>
                <br /><br />
                <button onClick={() => setTitulos4(descricao)}>Alterar</button>
            </section>
        </div>
    )
}