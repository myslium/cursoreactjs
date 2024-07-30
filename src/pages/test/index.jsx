import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Test () {

    const [meta, setMeta] = useState('')
    const [lista, setLista] = useState([])
    
    const [cont, setCont] = useState(0)

    const [frase, setFrase] = useState('')

    const [opcao, setOpcao] = useState('')

    const [quadradoFeio, setQuadradoFeio] = useState(true)
    const [texto, setTexto] = useState('')
    const [novo, setNovo] = useState('')

   

    function soma () {
        setCont(cont + 1)
    }
    
    function subtrair () {
        setCont(cont -1)
    }

    function alterou (e) {
        setFrase(e.target.value)
    }

    function escolha (e) {
        setOpcao(e.target.value)
    }

    function oi (e){
        setQuadradoFeio(e.target.checked)
    }

    function mudou () {
        setNovo(texto)
    }

    function adicionarMeta () {

        
    
        setLista([...lista, meta])
    }

    function apertou (e) {
        if (e.key === 'Enter'){
            adicionarMeta()
        }
    }

   return (
    <div className='pagina-test'>
        <header className='cabecalho'>
          <Link to = '/'>
          <i className='fa fa-arrow-left'> </i>
          </Link>
            <h1>ReactJS | Treino</h1>
        </header>

        <section className='secao'>
                <h1>Calculadora</h1>

                <div className='calc'>
                    <button onClick={soma}>+</button>
                    {cont}
                    <button onClick={subtrair}>-</button>

                </div>
            </section>

            <section className='secao'>
                <h1>{frase}</h1>

                <div className='entrada'>
                    <input type="text" value={frase} onChange={alterou}/>
                </div>
            </section>

            <section className='secao'>
                <h1>{opcao}</h1>

                <div className='entrada'>
                    <select value= {opcao} onChange={escolha} >
                        <option>Engenharia de Software</option>
                        <option>Ciência da Computação</option>
                        <option>ADS</option>
                    </select>
                </div>

            </section>

            <section className='secao'>
                <h1>Sou diva {quadradoFeio ? 'Sim' : 'Não'}</h1>

                <div className='entrada'>
                    <input type='checkbox' checked={quadradoFeio} onChange={oi}/>
                </div>
            </section>

            <section className='secao'>
                <h1>{novo}</h1>

                <div className='entrada'>
                    <input type='text' value={texto} onChange={e => setTexto(e.target.value)}/>
                    <button onClick={mudou}>Alterar</button>
                </div>
            </section>

        <section className='secao'>
          <h1>Metas para o ano que vem</h1>

          <div className='entrada'>
            
            <input type="text" placeholder='Digite aqui' onKeyUp={apertou} value={meta} onChange={e => setMeta(e.target.value)}/>
            <button onClick={adicionarMeta} >Adicionar</button>
          
          </div>

          <ul>
            {lista.map(item =>
                <li>
                <i className='fa fa-pen-to-square'></i>
            
                <i className='fa fa-trash-can' ></i>
                    {item}</li>
            )}
          </ul>

        </section>
    </div>
   )
}